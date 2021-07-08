import React, { useState, useEffect } from "react";
import '../App.css';
import { useQuery } from "@apollo/react-hooks";
import { FETCH_HOSTEL_QUERY } from "../Query/graphql";
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';
// import Cards from "../components/Cards";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    overflowY: 'none',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    width: 500,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



function Home(props) {

  const classes = useStyles();


  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4;
    }

    if (isWidthUp('lg', props.width)) {
      return 3;
    }

    if (isWidthUp('md', props.width)) {
      return 2;
    }

    return 1;
  }


  const [hostels, setHostel] = useState([]);

  const { loading, data, error } = useQuery(FETCH_HOSTEL_QUERY);
  // const { hostels } = data.getHostels;
  useEffect(() => {
    if (data) {
      console.log(data);
      setHostel(data.getHostels);
    }
  }, [data]);

  console.log(loading);

  if (error) {
    console.log(error);
    return "error";
  }

  return (
    <>
      
        {loading ? (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000}
          />
        ) : (
          <div className={classes.root}>
          <GridList cellHeight={315} cellWidth={100} spacing={15}   cols={getGridListCols()}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div" style={{ fontSize: '25px', fontWeight: 'bold'}}>Welcome To Al-Ihsan Hostel</ListSubheader>
            </GridListTile>
            {hostels.map((hostel) => (
              
               <GridListTile key={hostel.id}>
                <img src={hostel.hostelImage} alt={hostel.hostelName} />
                <Link to={`/hostel/${hostel.id}`}>
                <GridListTileBar
                  title={hostel.hostelName && hostel.hostelName.toUpperCase()}
                  subtitle={<span>Master: {hostel.hostelMaster && hostel.hostelMaster.toUpperCase()}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${hostel.hostelName && hostel.hostelName.toUpperCase()}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </Link>
              </GridListTile>
             
             
            ))}
          </GridList>
        </div>
        )}

    </>
  );
}

export default withWidth()(Home);
