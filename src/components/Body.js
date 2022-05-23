import React from "react";
import {FormikConsumer, useFormik} from "formik"


const Body = () => {
  const validate = values => {
    const errors = {}
    if (!values.email){
      errors.email = 'Required'
    }else if (values.email.length < 4){
      errors.email = 'email is too short'
    }

    if (!values.password){
      errors.password = 'Required'
    } else if (values.password.length < 8){
      errors.password = 'Length is too Short'
    }

    return errors
  }

  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },validate,
    onSubmit: values => {
      alert(JSON.stringify(values,null,2))
    }
  })  
    return (
      <div>
          <form onSubmit={ formik.handleSubmit }>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={ formik.handleChange } onBlur={ formik.handleBlur } value={ formik.values.email } className="Email form-control" name="email" />
                    { formik.touched.email && formik.errors.email ?<div>{ formik.errors.email }</div>: null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={ formik.handleChange } onBlur={ formik.handleBlur } value={ formik.values.password } className="Password form-control" name="password" />
                    { formik.touched.password && formik.errors.password ? <div>{ formik.errors.password }</div>: null }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
    )
}
export default Body