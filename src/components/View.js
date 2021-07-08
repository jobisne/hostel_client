import React from "react";
import './View.css';

function View({
  student: {
    childname,
    klass,
    age,
    sin,
    gender,
    state,
    childstatus,
    healthstatus,
    hostelName,
    quranStatus,
    image,
    relationshipone,
    fname,
    foccupation,
    fphone,
    faddress,
    relationshiptwo,
    sname,
    soccupation,
    sphone,
    saddress,
    iname,
    iphone,
  },
}) {
  return(
      <>
      <div>
      <h1>Information About {childname && childname.toUpperCase()}</h1>
        <div  className="gift-cards">
            <div className="round">
                <img  className='photo' src={image} alt='student' />
            </div>
            <div className="box_1">
              <h3 >Child Information</h3>
              <hr/>
                <div>Class: {klass}</div>
                <div>Age: {age}</div>
                <div>Student Identification Number: {sin}</div>
                <div>Gender: {gender}</div>
                <div>State: {state}</div>
                <div>Child Status: {childstatus}</div>
                <div>Health Status: {healthstatus}</div>
                <div>Hostel Name: {hostelName}</div>
                <div>Quran Status: {quranStatus}</div>
                <h3 >First Contact Information</h3>
              <hr/>
                <div>Relationship: {relationshipone}</div>
                <div>Name: {fname}</div>
                <div>Occupation: {foccupation}</div>
                <div>Address: {faddress}</div>
                <div>Phone Number: {fphone}</div>
                <h3 >Second Contact Information</h3>
              <hr/>
                <div>Second Contact Realtionship: {relationshiptwo}</div>
                <div>Name: {sname}</div>
                <div>Occupation: {soccupation}</div>
                <div>Address: {saddress}</div>
                <div>Phone Number: {sphone}</div>
                <h3 >Intermediary Information</h3>
              <hr/>
                <div>Intermediary: {iname}</div>
                <div>Intermediary Phone Number: {iphone}</div>
                
            </div>
            </div>
      </div>
      </>
  )
}

export default View;
