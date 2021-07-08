import React, { useState } from "react";
import { useMutation} from "@apollo/react-hooks";
import { HOSTEL_REG } from '../Query/graphql';
 


function UploadForm() {
  const [values, setValues] =useState( {
    hostelName: '',
    hostelMaster: '',
    hostelDesc: '',
    yearEstablish: ''
  });
  const [selectedFile, setSelectedFile] = useState(null)




  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  // console.log(values);

//  console.log(selectedFile);

//   const [uploadFile] = useMutation(UPLOAD_FILE, {
//     onCompleted: (data) => console.log(data),
//   });

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file)
//     // if (!file) return;
//     // uploadFile({ variables: { file } });
 
//   };

  const [addHostel, {loading}] = useMutation(HOSTEL_REG, {
    update(proxy, result){
        console.log(result)
    },
    variables:{
        hostelName: values.hostelName,
        hostelMaster:values.hostelMaster,
        hostelImage: selectedFile,
        hostelDesc: values.hostelDesc,
        yearEstablish: values.yearEstablish
    }
})

const onSubmit = (event) => {
    event.preventDefault();
    addHostel();
    setValues({ hostelName:'', hostelMaster:'', hostelDesc: '', yearEstablish: ''})
  }

  return (
    <div>
      {loading && ( <h1> THis is loading</h1>)}
      <form onSubmit={onSubmit}>
        <h1>File Upload</h1>
        <input
          type="text"
          placeholder="Hostel Name"
          onChange={onChange}
          value={values.hostelName}
          name="hostelName"
        /><br/><br/>
        <input
          type="text"
          placeholder="Hostel Master"
          onChange={onChange}
          value={values.hostelMaster}
          name="hostelMaster"
        /><br/><br/>
        <input
          type="text"
          placeholder="Hostel Desc"
          onChange={onChange}
          value={values.hostelDesc}
          name="hostelDesc"
        /><br/><br/>
         <input
          type="text"
          placeholder="Year Establish"
          onChange={onChange}
          value={values.yearEstablish}
          name="yearEstablish"
        /><br/><br/>
        <input
          type="file"
         
          onChange={(e) => setSelectedFile((e.target.files[0]))}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UploadForm;
