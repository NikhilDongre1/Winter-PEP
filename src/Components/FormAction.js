import React, { useState } from "react";
import './FormAction.css';

const FormAction = (props) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.name.trim()) {
      alert("Please enter your name");
      return;
    }
  
    if (!formdata.email.trim()) {
      alert("Please enter your email");
      return;
    }
  
    if (!formdata.age) {
      alert("Please enter your age");
      return;
    }
  
    if (!formdata.address.trim()) {
      alert("Please enter your address");
      return;
    }

    props.onFormSubmit(formdata);
    setTimeout(() => {
      alert("Details Updated");
    }, 600);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h1 className="card-title mb-4">Form Page</h1>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formdata.name}
                    className="form-control mt-4 bg-dark text-white"
                    id="inputName"
                    placeholder="Name"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    className="form-control mt-4 bg-dark text-white"
                    id="inputEmail4"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    value={formdata.age}
                    min="0"
                    className="form-control mt-4 bg-dark text-white"
                    id="inputAge"
                    placeholder="Age"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="address"
                    value={formdata.address}
                    className="form-control mt-4 bg-dark text-white"
                    id="inputAddress"
                    placeholder="Address..."
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary w-100 mt-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAction;
