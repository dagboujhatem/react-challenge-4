import React from "react";
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
  let errors = {};
  if (!values.name) {
    errors.name = "This field is required.";
  }
  if (!values.description) {
    errors.description = "This field is required.";
  }
  return errors;
};

const AddTodo = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


const handleCancel = () => {
  props.history.push("/home");
};

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="offset-3 col-6">
          <h1 className="my-5 text-center text-primary">Add todo</h1>
          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); props.history.push('/home')}}>
            <div className="form-group">
              <label className="text-start w-100">Name:</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={formik.values.name}
                placeholder="Type the name here"
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
              <textarea
                id="description"
                rows="4"
                className="form-control"
                value={formik.values.description}
                placeholder="Type the description here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-start w-100 invalid-feedback d-block">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success" disabled={!formik.isValid}>
              <i className="fa fa-save"></i> Valider</button>
              <button className="btn btn-secondary text-white" onClick={handleCancel}>
              <i className="fa fa-undo"></i> Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
