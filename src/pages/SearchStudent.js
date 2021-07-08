import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_STUDENT_MUTATION } from "../Query/graphql";
import View from "../components/View";

function SearchStudent() {
  const [values, setValues] = useState({
    sin: "",
  });

  const [student, setStudent] = useState("");

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [searchStudent] = useMutation(SEARCH_STUDENT_MUTATION, {
    update(proxy, result) {
    //   console.log(result.data.searchStudent);
      // console.log(record)
      setStudent(result.data.searchStudent);
    },
    variables: {
      searchInput: values.sin,
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    searchStudent();
  };

//   const { childname } = student;
//   console.log(childname);

  return (
    <>
      {!student ? (
        <Form onSubmit={onSubmit} noValidate>
          <Form.Input
            label="Student Identification Number"
            placeholder="sin..."
            value={values.sin}
            type="text"
            name="sin"
            onChange={onChange}
          />
          <Button type="submit" primary>
            Search Student
          </Button>
        </Form>
      ) : (
        <div>
          <View student={student} />
        </div>
      )}
    </>
  );
}

export default SearchStudent;
