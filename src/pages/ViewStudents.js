import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_STUDENTS_QUERY } from "../Query/graphql";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import DeleteButton from "../components/DeleteButton";
import { AuthContext } from "../context/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  '& > *': {
    margin: theme.spacing(1),
  },
}));

function ViewStudent(props) {
  const postId = props.match.params.postId;
  console.log(postId);

  const [getStudents, setGetStudents] = useState([]);

  const { user } = useContext(AuthContext)

  const { loading, data } = useQuery(FETCH_STUDENTS_QUERY, {
    variables: {
      postId,
    },
  });
// console.log(data)
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (data) {
        setGetStudents(data.getStudents);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [data]);
// console.log(data)
  const rows = getStudents;
  // console.log(rows);

function deleteStudentCallBack(){
  window.location.reload();
}


  const classes = useStyles();
  return (
    <>
      {loading && (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}
        />
      )}
          <h3>LIST OF STUDENT IN {postId.toUpperCase()}</h3>
      {/*========================== Table =============== */}
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Child Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Child Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>DELETE</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows ? (rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.sin}
                  </TableCell>
                  <TableCell>{row.childname}</TableCell>
                  <TableCell>{row.klass}</TableCell>
                  <TableCell>{row.childstatus}</TableCell>
                  <TableCell>
                    {row.id ? (
                      <Link to={`/editStudent/${row.id}`}>
                        <EditIcon />
                      </Link>
                    ) : (
                      row.hostelName
                    )}
                  </TableCell>
                  <TableCell>
                    {user && (
                      <DeleteButton postId={row.id}  callBack={deleteStudentCallBack}/>
                    )}
                    
                  </TableCell>
                  <TableCell>
                    {row.id ? (
                      <Link to={`/viewStudent/${row.id}`}>
                        <ViewColumnIcon />
                      </Link>
                    ) : (
                      row.hostelName
                    )}
                  </TableCell>
                </TableRow>
              );
            })):(
              <TableRow>
                <TableCell>
                No Record Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default ViewStudent;
