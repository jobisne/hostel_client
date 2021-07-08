import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_STUDENT_QUERY } from '../Query/graphql';
import Loader from "react-loader-spinner";
import View from '../components/View';

function ViewStudent(props) {
    const postId = props.match.params.postId;

    const[student, setStudent] = useState('');

    const{ data, loading } = useQuery(FETCH_STUDENT_QUERY, {
        variables:{
            postId
        }
    })

    useEffect(() => {
        if(data){
            setStudent(data.getStudent)
        }
    }, [data])

    console.log(postId)


    return (
        <>
            {loading ?(
                <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000}
              />
            ): (
                <div>
                    
                        <View student={student} />
                </div>
            )
            }
        </>
    )
}

export default ViewStudent
