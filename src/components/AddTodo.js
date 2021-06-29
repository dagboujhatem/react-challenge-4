import React, {useEffect} from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  description: "",
};


const onSubmit = (values, actions) => {
   const todos = JSON.parse(localStorage.getItem('todos') || '[]') ;
  todos.push(values);
  localStorage.setItem('todos',JSON.stringify(todos));
  actions.resetForm({
    values: {
      name: '',
      description: ''
    },
  });

};

const validate = (values) => {
  // values.username values.email values.password
  // errors.username errors.email errors.passowrd
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  } 
  // else if (!/^[A-Z]{10,50}$/i.test(values.description)) {
  //   errors.description = "Invalid desciption";
  // }
  return errors;
  
};

const AddTodo = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
// console.log(formik.values);
//console.log(formik.values);


const handleCancel = () => {
  props.history.push("/");
};

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="offset-3 col-6">
          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); props.history.push('/')}}>
            <div className="form-group">
              <label className="text-start w-100">Name:</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={formik.values.name}
                placeholder="Enter Todo Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-start w-100 invalid-feedback d-block">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className="form-group mt-3">
              <label className="text-start w-100">Description:</label>
              <input
                id="description"
                type="text"
                className="form-control"
                value={formik.values.description}
                placeholder="Enter Todo Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-start w-100 invalid-feedback d-block">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
            <div className="form-group mt-1">
              <button type="submit" className="btn btn-success" disabled={!formik.isValid}>Valider</button>
              <button className="btn btn-info" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
