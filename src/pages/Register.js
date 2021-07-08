import React, { useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_USER } from '../Query/graphql';
import { Form, Button } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';


function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({})
    const [values, setValues ] = useState({
        masterName: '',
        hostelName: '',
        password: '',
        confirmPassword: ''
    })
 
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value })
    }

    const [addUser, { loading} ] = useMutation(REGISTER_USER, {
        update(proxy, {data: {register: userData}}){
            // console.log(result)
            context.login(userData)
            props.history.push("/");
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser()
    }
    return (
        <div>
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>

<Form.Input 
    label="Username"
    placeholder="Username..."
    value={values.masterName}
    type='text'
    name='masterName'
    onChange={onChange}
    error={errors.masterName ? true : false }
/> 
 <Form.Input 
    label="Name"
    placeholder="Name..."
    value={values.hostelName}
    type='text'
    name='hostelName'
    onChange={onChange}
    error={errors.hostelName ? true : false }

/> 
<Form.Input 
      label="Password"
    placeholder="Password..."
    value={values.password}
    type='password'
    name='password'
    onChange={onChange}
    error={errors.password ? true : false }

/> 
 <Form.Input 
    label="Confirm Password"
    placeholder="Confirm Password..."
    value={values.confirmPassword}
    name='confirmPassword'
    type='password'
    onChange={onChange}
    error={errors.confirmPassword ? true : false }

/> 
<Button type='submit' primary>
    Register
</Button>
</Form>
{Object.keys(errors).length > 0 && (
<div className='ui error message'>
    <ul className='list'>
        {Object.values(errors).map(value => (
            <li key={value}>{value}</li>
        ))}
    </ul>
</div>
)}
        </div>
    )
}

export default Register
