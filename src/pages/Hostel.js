import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import {
  FETCH_SINGLE_HOSTEL,
  FETCH_NUMBERS_OF_AETAM,
  FETCH_NUMBERS_OF_NONAETAM,
} from "../Query/graphql";
import { useQuery } from "@apollo/react-hooks";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Hostel.css";

function Hostel(props) {
  const admin = "admin";
  const aetam = "aetam";
  const nonAetam = "nonaetam";
  // const hostelName = 'seediq'
  const postId = props.match.params.postId;

  console.log(postId);
  const [getHostel, setGetHostel] = useState([]);
  const [getAetam, setGetAetam] = useState("");
  const [getNonAetam, setGetNonAetam] = useState("");

  const { user } = useContext(AuthContext);
  // console.log(user)

  const { data: single_hostel } = useQuery(FETCH_SINGLE_HOSTEL, {
    variables: {
      postId,
    },
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (single_hostel) {
        setGetHostel(single_hostel.getHostel);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [single_hostel]);

  const { id, hostelName, hostelImage, hostelDec, hostelMaster } = getHostel;
  console.log(hostelName)

  const { data: num_aetam } = useQuery(FETCH_NUMBERS_OF_AETAM, {
    variables: {
      postAetam: aetam,
      nameHostel: hostelName,
    },
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (num_aetam) {
        setGetAetam(num_aetam.getAetam);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [num_aetam]);
  console.log(num_aetam)

  const { data: num_nonaetam } = useQuery(FETCH_NUMBERS_OF_NONAETAM, {
    variables: {
      postNonAetam: nonAetam,
      nameHostel: hostelName,
    },
  });
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (num_nonaetam) {
        setGetNonAetam(num_nonaetam.getNonAetam);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [num_nonaetam]);
  console.log(num_nonaetam)

  let numberOfNonAetam = Object.keys(getNonAetam).map(
    (key) => getNonAetam[key]
  );
  // console.log(numberOfNonAetam[0])
  let numberOfAetam = Object.keys(getAetam).map((key) => getAetam[key]);

  let totalNum = parseInt(numberOfAetam[0]) + parseInt(numberOfNonAetam[0]);

  

  const page = user ? (
    user.hostelName === hostelName || user.hostelName === admin ? (
      <div>
        <section  >
          <div >
            <div className="container">
              <div className="box_one">
                <img src={hostelImage} alt="hostel" className="image_box" />
              </div>
              <div className="box_two">
                <h2>Hostel Information</h2>
                <div>
                  <label>Hostel Name</label> : <span>{hostelName && hostelName.toUpperCase()}</span> 
                </div>
                <div>
                  <label>Year Establish</label> : <span>2020</span>
                </div>
                <div>
                  <label>Hostel Master</label> :<span>{hostelMaster && hostelMaster.toUpperCase()}</span> 
                </div>
                {/* <div>num_aetam
                            <label>Hoster Mistress</label> : Mistress Basiroh
                        </div> */}
                <div>
                  <label>Total Number of Students</label> :<span>{totalNum}</span>
                </div>
                <div>
                  <label>Non Aetam</label> : <span>{numberOfNonAetam[0]}</span>
                </div>
                <div>
                  <label>Aetam</label> : <span>{numberOfAetam[0]}</span>
                </div>
              </div>
              <div className="box_three">
                <Link to="/registration" className="navbar-logo">
                  <div className="btn">Add New Student</div>
                </Link>
                <Link to="/search" className="navbar-logo btn-space">
                  <div className="btn">Search Students</div>
                </Link>
                <Link
                  to={`/view/${hostelName}`}
                  className="navbar-logo btn-space"
                >
                  <div className="btn">View Students</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    ) : (
      <Button color="teal" as={Link} to="/ourproject" secondary>
       Click To View Our Project
      </Button>
    )
  ) : (
    <Button color="teal" as={Link}  to="/ourproject" secondary>
      Click to View Our Project
    </Button>
  );

  return page;
}

export default Hostel;
