import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DELETE_STUDENT_MUTATION,  FETCH_STUDENT_QUERY } from "../Query/graphql";
import Button from '@material-ui/core/Button';
import { useConfirm } from 'material-ui-confirm';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";



function DeleteButton({ postId, callBack}) {
  const confirm = useConfirm();

  const [student, setStudent]= useState('')


  const { data  } = useQuery(FETCH_STUDENT_QUERY, {
    variables: {
      postId
    }
  })

  useEffect(() => {
    if(data){
      setStudent(data.getStudent)
    }
  }, [data])

  

  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    update(proxy) {
        //TODO: remove post from cache
        // const data = proxy.readQuery({
        //   query: FETCH_STUDENTS_QUERY
        // })
        // data.getStudents = data.getStudents.filter(p => p.id !== postId)
        // proxy.writeQuery({
        //   query: FETCH_STUDENTS_QUERY,
        //   data
        // })
         if(callBack) { callBack();}
      },
    variables: {
      postId,
    },
  });

 const onDelete = () => {

  confirm({ description: `Did You Want To Delete  ${student && student.childname} Permanently`  })
      .then(() =>  deleteStudent() )
      .catch(() =>  console.log("Deletion cancelled.") );
  };

 
   

    


  return (
    <>
      <Button onClick={onDelete}
      >
        <DeleteForeverIcon />
      </Button>
    
    </>
  );
}



export default DeleteButton;