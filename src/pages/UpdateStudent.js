import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_STUDENT_QUERY, EDIT_STUDENT_REG } from '../Query/graphql';

function UpdateStudent(props) {

    const postId = props.match.params.postId;
    console.log(postId);
    
    const [errors, setErrors] = useState({})


    const [childname, setChildName] = useState(null)
    const [klass, setKlass] = useState(null)
    const [age, setAge] = useState(null)
    const [sin, setSin] = useState(null)
    const [gender, setGender] = useState(null)
    const [state, setState] = useState(null)
    const [childstatus, setChildStatus] = useState(null)
    const [healthstatus, setHealthStatus] = useState(null)
    const [hostelName, setHostelName] = useState(null)
    const [quranStatus, setQuranStatus] = useState(null)
    const [relationshipone, setRelationshipOne] = useState(null)
    const [fname, setFname] = useState(null)
    const [foccupation, setFoccupation] = useState(null)
    const [fphone, setFphone] = useState(null)
    const [faddress, setFaddress] = useState(null)
    const [relationshiptwo, setRelationshipTwo] = useState(null)
    const [sname, setSname] = useState(null)
    const [soccupation, setSoccupation] = useState(null)
    const [sphone, setSphone] = useState(null)
    const [saddress, setSaddress] = useState(null)
    const [iname, setIname] = useState(null)
    const [iphone, setIphone] = useState(null)





    const [editStudent ] = useMutation(EDIT_STUDENT_REG, {
      update(proxy, result){
        console.log(result)
        props.history.push(`/view/${hostelName}`);
      },
      variables: {
        postId,
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
      }
    }) 



    const [ getStudent, setGetStudent ] = useState('');

    const { data } = useQuery(FETCH_STUDENT_QUERY, {
        variables: {
            postId
        }
    })

    useEffect(() => {
       
            if(data) {
              
                setGetStudent(data.getStudent)
            }
    
            const { childname, klass, age, sin, gender, state, childstatus, 
              healthstatus, hostelName, quranStatus, relationshipone, fname, 
              foccupation, fphone, faddress, relationshiptwo, sname, soccupation, sphone, saddress, iname, iphone } = data.getStudent
  
              setChildName(childname)
              setKlass(klass)
              setAge(age)
              setSin(sin)
              setGender(gender)
              setState(state)
              setChildStatus(childstatus)
              setHealthStatus(healthstatus)
              setHostelName(hostelName)
              setQuranStatus(quranStatus)
              setRelationshipOne(relationshipone)
              setFname(fname)
              setFoccupation(foccupation)
              setFphone(fphone)
              setFaddress(faddress)
              setRelationshipTwo(relationshiptwo)
              setSname(sname)
              setSoccupation(soccupation)
              setSphone(sphone)
              setSaddress(saddress)
              setIname(iname)
              setIphone(iphone)

       


    },[data])
     

    console.log(getStudent+'only me');

   
    const onSubmit = (event) => {
        event.preventDefault();
        editStudent()
        setChildName("")
              setKlass("")
              setAge("")
              setSin("")
              setGender("")
              setState("")
              setChildStatus("")
              setHealthStatus("")
              setHostelName("")
              setQuranStatus("")
              setRelationshipOne("")
              setFname("")
              setFoccupation("")
              setFphone("")
              setFaddress("")
              setRelationshipTwo("")
              setSname("")
              setSoccupation("")
              setSphone("")
              setSaddress("")
              setIname("")
              setIphone("")
    }




    return (
        <div>
        <h3>Child Information</h3>
        <form onSubmit={onSubmit} noValidate >
          <div className="row">
            <div className="col-25">
              <label for="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="childname"
                value={childname}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Your name.."
                error={errors.childname ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Class</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="klass"
                value={klass}
                onChange={(e) => setKlass(e.target.value)}
                placeholder="Your Class .."
                error={errors.klass ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="age">Age</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="Your Age .."
                error={errors.age ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="age">SIN(Student Identification Number)</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="sin"
                onChange={(e) => setSin(e.target.value)}
                value={sin}
                placeholder="Your Student Identification Number .."
                error={errors.sin ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="gender">Gender</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                placeholder="Your Gender.."
                error={errors.gender ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="gender">State Of Origin</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="state"
                onChange={(e) => setState(e.target.value)}
                value={state}
                placeholder="Your State."
                error={errors.state ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="relationship">Child Status</label>
            </div>
            <div className="col-75">
              <select
                name="childstatus"
                onChange={(e) => setChildStatus(e.target.value)}
                value={childstatus}
                error={errors.childstatus ? true : false }
              >
                <option value="aetam">Aetam</option>
                <option value="nonaetam">Non Aetam</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Health Status</label>
            </div>
            <div className="col-75">
              <textarea
                onChange={(e) => setHealthStatus(e.target.value)}
                value={healthstatus}
                name="healthstatus"
                placeholder="Write something.."
                style={{ height: "100px" }}
                error={errors.healthstatus ? true : false }
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="gender">Hostel Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="hostelName"
                onChange={(e) => setHostelName(e.target.value)}
                value={hostelName}
                placeholder="Your State."
                error={errors.hostelName ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Quran Status</label>
            </div>
            <div className="col-75">
              <select
                name="quranStatus"
                onChange={(e) => setQuranStatus(e.target.value)}
                value={quranStatus}
                error={errors.quranStatus ? true : false }
              >
                <option value="hafiz">Hafiz</option>
                <option value="hafizat">Hafizat</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
         
          <h3>FIRST CONTACT</h3>
          <div className="row">
            <div className="col-25">
              <label for="relationship">Relationship</label>
            </div>
            <div className="col-75">
              <select name="relationshipone" onChange={(e) => setRelationshipOne(e.target.value)}
                value={relationshipone} error={errors.relationshipone ? true : false }
                >
                <option value="none">Select....</option>
                <option value="paternal">Paternal</option>
                <option value="maternal">Maternal</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                name="fname"
                placeholder="Your name.."
                error={errors.fname ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Occupation</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setFoccupation(e.target.value)}
                value={foccupation}
                name="foccupation"
                placeholder="Your Occupation.."
                error={errors.foccupation ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Phone Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) =>  setFphone(e.target.value)}
                value={fphone}
                name="fphone"
                placeholder="Your Phone Number.."
                error={errors.fphone ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Address</label>
            </div>
            <div className="col-75">
              <textarea
                onChange={(e) => setFaddress(e.target.value)}
                value={faddress}
                name="faddress"
                placeholder="Write something.."
                style={{ height: "200px" }}
                error={errors.faddress ? true : false }
              ></textarea>
            </div>
          </div>
          <h3>SECOND CONTACT</h3>
          <div className="row">
            <div className="col-25">
              <label for="relationship">Relationship</label>
            </div>
            <div className="col-75">
              <select name="relationshiptwo" onChange={(e) => setRelationshipTwo(e.target.value)}
                value={relationshiptwo} error={errors.relationshiptwo ? true : false }
                >
                <option value="none">Select....</option>
                <option value="paternal">Paternal</option>
                <option value="maternal">Maternal</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="fname"> Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setSname(e.target.value)}
                value={sname}
                name="sname"
                placeholder="Your Name.."
                error={errors.sname ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Occupation</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setSoccupation(e.target.value)}
                value={soccupation}
                name="soccupation"
                placeholder="Your Occupation.."
                error={errors.soccupation ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Phone Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setSphone(e.target.value)}
                value={sphone}
                name="sphone"
                placeholder="Your Phone Number.."
                error={errors.sphone ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Address</label>
            </div>
            <div className="col-75">
              <textarea
                onChange={(e) => setSaddress(e.target.value)}
                value={saddress}
                name="saddress"
                placeholder="Write something.."
                error={errors.saddress ? true : false }
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <h3>Intermediary</h3>
          <div className="row">
            <div className="col-25">
              <label for="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setIname(e.target.value)}
                value={iname}
                name="iname"
                placeholder="Your Name.."
                error={errors.iname ? true : false }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Phone Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(e) => setIphone(e.target.value)}
                value={iphone}
                name="iphone"
                placeholder="Your Phone Number.."
                error={errors.iphone ? true : false }
              />
            </div>
          </div>
         <div className="row">
            <input type="submit" value='Submit' />
         </div>
         </form>

         {Object.keys(errors).length > 0 && (
      <div>
       <ul>
         {Object.values(errors).map(value => (
          <li key={value}>{value}</li>
         )
         )}
       </ul>
     </div>
     )}
        </div>
    )
}

export default UpdateStudent
