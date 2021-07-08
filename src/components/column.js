// import React, { useState } from "react";
// import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

// const genderOptions = [
//   { key: "m", text: "Male", value: "male" },
//   { key: "f", text: "Female", value: "female" },
//   { key: "o", text: "Other", value: "other" },
// ];

// const quranOptions = [
//   { key: "h", text: "Hafiz", value: "hafiz" },
//   { key: "f", text: "Hafizat", value: "hafizat" },
//   { key: "n", text: "None", value: "none" },
// ];

// const relationOptions = [
//   { key: "m", text: "Maternal", value: "maternal" },
//   { key: "p", text: "Paternal", value: "paternal" },
//   { key: "n", text: "Guardian", value: "guardian" },
// ];

// const hostelOptions = [
//   { key: "s", text: "Sideeq", value: "sideeq" },
//   { key: "r", text: "Rifa", value: "rifa" },
//   { key: "f", text: "Faruk", value: "faruk" },
//   { key: "i", text: "Imaan", value: "imaan" },
//   { key: "k", text: "Khalid", value: "khalid" },
// ];

// const statusOptions = [
//   { key: "a", text: "Aetam", value: "aetam" },
//   { key: "n", text: "NonAetam", value: "nonaetam" },
// ];

// function Column() {
//   const [values, setValues] = useState({
//     firstName: "",
//     email: "",
//     gender: "",
//   });
//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleSelection = (event, data) => {
//     setValues({ [data.name]: data.value });
//   };
//   console.log(values);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setValues({ email: "", firstName: "" });
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Input
//             fluid
//             label="Child Name"
//             placeholder="Child name..."
//             type="text"
//             name="childname"
//             value={values.childname}
//             onChange={onChange}
//             error={errors.childname ? true : false}
//           />

//           <Form.Input
//             fluid
//             label="Class"
//             type="text"
//             name="klass"
//             value={values.klass}
//             onChange={onChange}
//             placeholder="Class .."
//             error={errors.klass ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Child Age"
//             type="text"
//             name="age"
//             onChange={onChange}
//             value={values.age}
//             placeholder="Child Age .."
//             error={errors.age ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="SIN(Student Identification Number) "
//             type="text"
//             name="sin"
//             onChange={onChange}
//             value={values.sin}
//             placeholder="Your Student Identification Number .."
//             error={errors.sin ? true : false}
//           />
//           <Form.Select
//             fluid
//             label="Gender"
//             options={genderOptions}
//             placeholder="Gender"
//             type="text"
//             name="gender"
//             onChange={handleSelection}
//             value={values.gender}
//             error={errors.gender ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="State"
//             type="text"
//             name="state"
//             onChange={onChange}
//             value={values.state}
//             placeholder="State."
//             error={errors.state ? true : false}
//           />
//           <Form.Select
//             fluid
//             label="Child Status"
//             options={statusOptions}
//             placeholder="Child status"
//             name="childstatus"
//             onChange={handleSelection}
//             value={values.childstatus}
//             error={errors.childstatus ? true : false}
//           />
//           <Form.TextArea
//             label="Health Status"
//             placeholder="Tell us about your health..."
//             onChange={onChange}
//             value={values.healthstatus}
//             name="healthstatus"
//             error={errors.healthstatus ? true : false}
//           />

//           <Form.Select
//             fluid
//             label="Hostel"
//             options={hostelOptions}
//             placeholder="Hostel"
//             onChange={handleSelection}
//             name="hostelName"
//             value={values.hostelName}
//             error={errors.hostelName ? true : false}
//           />
//           <Form.Select
//             fluid
//             label="Quran Status"
//             options={quranOptions}
//             placeholder="Quran Status"
//             name="quranStatus"
//             onChange={handleSelection}
//             value={values.quranStatus}
//             error={errors.quranStatus ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Child Image"
//             type="file"
//             onChange={(e) => setSelectedFile(e.target.files[0])}
//           />
//           <Form.Select
//             fluid
//             label="Relationship(First Contact)"
//             options={relationOptions}
//             placeholder="Relationship"
//             name="relationshipone"
//             onChange={handleSelection}
//             value={values.relationshipone}
//             error={errors.relationshipone ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Name"
//             placeholder="Name (first contact)"
//             type="text"
//             onChange={onChange}
//             value={values.fname}
//             name="fname"
//             error={errors.fname ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Occupation"
//             placeholder="Occupation"
//             type="text"
//             onChange={onChange}
//             value={values.foccupation}
//             name="foccupation"
//             error={errors.foccupation ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Phone Number"
//             placeholder="Phone Number"
//             type="text"
//             onChange={onChange}
//             value={values.fphone}
//             name="fphone"
//             error={errors.fphone ? true : false}
//           />
//           <Form.TextArea
//             label="Address"
//             placeholder="Address..."
//             onChange={onChange}
//             value={values.faddress}
//             name="faddress"
//             error={errors.faddress ? true : false}
//           />

//           <Form.Select
//             fluid
//             label="Relationship(Second Contact)"
//             options={relationOptions}
//             placeholder="Relationship"
//             name="relationshiptwo"
//             onChange={handleSelection}
//             value={values.relationshiptwo}
//             error={errors.relationshiptwo ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Name"
//             placeholder="Name (second contact)"
//             type="text"
//             onChange={onChange}
//             value={values.sname}
//             name="sname"
//             error={errors.sname ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Occupation"
//             placeholder="Occupation"
//             type="text"
//             onChange={onChange}
//             value={values.soccupation}
//             name="soccupation"
//             error={errors.soccupation ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Phone Number"
//             placeholder="Phone Number"
//             type="text"
//             onChange={onChange}
//             value={values.sphone}
//             name="sphone"
//             error={errors.sphone ? true : false}
//           />
//           <Form.TextArea
//             label="Address"
//             placeholder="Address..."
//             onChange={onChange}
//             value={values.saddress}
//             name="saddress"
//             error={errors.saddress ? true : false}
//           />

//           <Form.Input
//             fluid
//             label="Name (Intermediary)"
//             placeholder="Intermediary name"
//             type="text"
//             onChange={onChange}
//             value={values.iname}
//             name="iname"
//             error={errors.iname ? true : false}
//           />
//           <Form.Input
//             fluid
//             label="Phone Number(Intermediary)"
//             placeholder="Intermediary number"
//             type="text"
//             onChange={onChange}
//             value={values.iphone}
//             name="iphone"
//             error={errors.iphone ? true : false}
//           />

//           <Form.Field
//             control={Select}
//             options={genderOptions}
//             label={{
//               children: "Gender",
//               htmlFor: "form-select-control-gender",
//             }}
//             placeholder="Gender"
//             name="gender"
//             value={values.gender}
//             onChange={handleSelection}
//           />

//           <Form.Button>Submit</Form.Button>
//         </Form.Group>
//       </Form>
//       {Object.keys(errors).length > 0 && (
//         <div className="ui error message">
//           <ul className="list">
//             {Object.values(errors).map((value) => (
//               <li key={value}>{value}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Column;
