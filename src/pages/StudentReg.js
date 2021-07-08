import React, {useState} from "react";
import { useMutation } from '@apollo/react-hooks';
import { STUDENT_REG } from '../Query/graphql';
import "./Student.css";



function StudentReg(props) {
  
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        childname: '',
        klass: '',
        age: '',
        sin: '',
        gender: '',
        state: '',
        childstatus: '',
        healthstatus: '',
        hostelName: '',
        quranStatus: '',
        image: '',
        relationshipone: '',
        fname: '',
        foccupation: '',
        fphone: '',
        faddress: '',
        relationshiptwo: '',
        sname: '',
        soccupation: '',
        sphone: '',
        saddress: '',
        iname: '',
        iphone: ''
    });
    const [selectedFile, setSelectedFile] = useState('')

// console.log(values)
    const onChange = (event) => {
        setValues( {...values, [event.target.name] : event.target.value })
    }

    // const handleSelection = (event, data) => {
    //   setValues({ [data.name]: data.value });
    // };

    const [addStudent, {  loading }] = useMutation(STUDENT_REG, {
      update(proxy, result){
        console.log(result)
        window.location.reload();
      },
      onError(err) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: {
        childname:values.childname,
        klass: values.klass,
        age : values.age,
        sin: values.sin,
        gender: values.gender,
        state: values.state,
        childstatus: values.childstatus,
        healthstatus: values.healthstatus,
        hostelName: values.hostelName,
        quranStatus: values.quranStatus,
        image: selectedFile,
        relationshipone: values.relationshipone,
        fname: values.fname,
        foccupation: values.foccupation,
        fphone: values.fphone,
        faddress:values.faddress,
        relationshiptwo: values.relationshiptwo,
        sname: values.sname,
        soccupation: values.soccupation,
        sphone: values.sphone,
        saddress: values.saddress,
        iname: values.iname,
        iphone: values.iphone
      }
    })
// console.log(values)
    const onSubmit = (event) => {
        event.preventDefault();
        addStudent()
    }

  return (
    <div className="">
      <h3>Child Information</h3>
      <form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
     
      <div className="row">
        <div className="col-25">
          <label for="fname">Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="childname"
            value={values.childname}
            onChange={onChange}
            placeholder="Your name.."
            error={errors.childname ? true : false }
            required
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-25">
          <label>Class</label>
        </div>
        <div className="col-75">
          <select
            name="klass"
            value={values.klass}
            onChange={onChange}
            error={errors.klass ? true : false }
          >
            <option value="none">Select..</option>
            <option value="kg 1">Kg 1</option>
            <option value="kg 2">Kg 2</option>
            <option value="nursery 1">Nursery 1</option>
            <option value="nursery 2">Nursery 2</option>
            <option value="basic 1">Basic 1</option>
            <option value="basic 2">Basic 2</option>
            <option value="basic 3">Basic 3</option>
            <option value="basic 4">Basic 4</option>
            <option value="basic 5">Basic 5</option>
            <option value="jss 1">Jss 1</option>
            <option value="jss 2">Jss 2</option>
            <option value="jss 3">Jss 3</option>
            <option value="sss 1">Sss 1</option>

          </select>
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
            onChange={onChange}
            value={values.age}
            placeholder="Your Age .."
            error={errors.age ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>SIN(Student Identification Number)</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="sin"
            onChange={onChange}
            value={values.sin}
            placeholder="Your Student Identification Number .."
            error={errors.sin ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Gender</label>
        </div>
        <div className="col-75">
          <select
            name="gender"
            onChange={onChange}
            value={values.gender}
            error={errors.gender ? true : false }
          >
            <option value="none">Select..</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >State Of Origin</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="state"
            onChange={onChange}
            value={values.state}
            placeholder="Your State."
            error={errors.state ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Child Status</label>
        </div>
        <div className="col-75">
          <select
            name="childstatus"
            onChange={onChange}
            value={values.childstatus}
            error={errors.childstatus ? true : false }
          >
            <option value="none">Select..</option>
            <option value="aetam">Aetam</option>
            <option value="nonaetam">Non Aetam</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Health Status</label>
        </div>
        <div className="col-75">
          <textarea
            onChange={onChange}
            value={values.healthstatus}
            name="healthstatus"
            placeholder="Write something.."
            style={{ height: "100px" }}
            error={errors.healthstatus ? true : false }
          ></textarea>
        </div>
      </div>
    
      <div className="row">
        <div className="col-25">
          <label >Hostel Name</label>
        </div>
        <div className="col-75">
          <select
            name="hostelName"
            onChange={onChange}
            value={values.hostelName}
            placeholder="Your State."
            error={errors.hostelName ? true : false }
          >
            <option value="none">Select..</option>
            <option value="dharu-rifaa">Rifaa</option>
            <option value="dharu-khalid">Khalid</option>
            <option value="dharul-faruuk">Faruk</option>
            <option value="dharus-sideeq">Sideeq</option>
            <option value="dharul-imaan">Imaan</option>
            <option value="dharul-muhybid">muhydib</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Quran Status</label>
        </div>
        <div className="col-75">
          <select
            name="quranStatus"
            onChange={onChange}
            value={values.quranStatus}
            error={errors.quranStatus ? true : false }
          >
            <option value="null">Select...</option>
            <option value="hafiz">Hafiz</option>
            <option value="hafizat">Hafizat</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Image</label>
        </div>
        <div className="col-75">
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
      </div>
      <h3>FIRST CONTACT</h3>
      <div className="row">
        <div className="col-25">
          <label>Relationship</label>
        </div>
        <div className="col-75">
          <select 
          name="relationshipone" 
          onChange={onChange}
            value={values.relationshipone}  error={errors.relationshipone ? true : false }  >
            <option value="none">Select....</option>
            <option value="paternal">Paternal</option>
            <option value="maternal">Maternal</option>
            <option value="guardian">Guardian</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.fname}
            name="fname"
            placeholder="Your name.."
            error={errors.fname ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Occupation</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.foccupation}
            name="foccupation"
            placeholder="Your Occupation.."
            error={errors.foccupation ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Phone Number</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.fphone}
            name="fphone"
            placeholder="Your Phone Number.."
            error={errors.fphone ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Address</label>
        </div>
        <div className="col-75">
          <textarea
            onChange={onChange}
            value={values.faddress}
            name="faddress"
            placeholder="Write something.."
            style={{ height: "100px" }}
            error={errors.faddress ? true : false }
          ></textarea>
        </div>
      </div>
      <h3>SECOND CONTACT</h3>
      <div className="row">
        <div className="col-25">
          <label >Relationship</label>
        </div>
        <div className="col-75">
          <select name="relationshiptwo" onChange={onChange}
            value={values.relationshiptwo}  error={errors.relationshiptwo ? true : false }>
            <option value="none">Select....</option>
            <option value="paternal">Paternal</option>
            <option value="maternal">Maternal</option>
            <option value="guardian">Guardian</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label > Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.sname}
            name="sname"
            placeholder="Your Name.."
            error={errors.sname ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Occupation</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.soccupation}
            name="soccupation"
            placeholder="Your Occupation.."
            error={errors.soccupation ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Phone Number</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.sphone}
            name="sphone"
            placeholder="Your Phone Number.."
            error={errors.sphone ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Address</label>
        </div>
        <div className="col-75">
          <textarea
            onChange={onChange}
            value={values.saddress}
            name="saddress"
            placeholder="Write something.."
            error={errors.saddress ? true : false }
            style={{ height: "100px" }}
          ></textarea>
        </div>
      </div>
      <h3>Intermediary</h3>
      <div className="row">
        <div className="col-25">
          <label >Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.iname}
            name="iname"
            placeholder="Your Name.."
            error={errors.iname ? true : false }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label >Phone Number</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            onChange={onChange}
            value={values.iphone}
            name="iphone"
            placeholder="Your Phone Number.."
            error={errors.iphone ? true : false }
          />
        </div>
      </div>
      <br/>
     <div className="row">
        <input type="submit" value='Submit' />
     </div>
        
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentReg;
