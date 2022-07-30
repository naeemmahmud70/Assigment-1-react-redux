import React from "react";
import Modal from "react-modal";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "452px",
    border: 0,
  },
};
Modal.setAppElement("#root");

const Registration = ({ modalIsOpen, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="registration-form">
        <div>
          <div className="sign-up-form-header">
            <h1 id="sign-up">Sign Up</h1>
            <p className="text-secondary">It's quick and easy.</p>
          </div>
        </div>
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="row">
              <div className="col-md-6 form-group bg">
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  id=""
                  placeholder="Full name"
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  className="form-control"
                  type="text"
                  name="surName"
                  id=""
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="form-group py-2">
              <input
                className="form-control"
                type="text"
                name="mobileOremail"
                id=""
                placeholder="Mobile number or email address"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="newPassword"
                id=""
                placeholder="New password"
                required
              />
            </div>
          </form>
        </div>
        {/* Dath of birth inputs */}
        <div className="row px-3">
          <p>Date of birth</p>
          <div className="col-sm-4 form-group margin-decrease">
            <select className="form-select" aria-label="Default select example">
              <option selected>Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col-sm-4 form-group margin-decrease">
            <select className="form-select" aria-label="Default select example">
              <option selected>Month</option>
              <option value="1">Jan</option>
              <option value="2">Fab</option>
              <option value="3">Mar</option>
            </select>
          </div>
          <div className="col-sm-4 form-group margin-decrease">
            <select className="form-select" aria-label="Default select example">
              <option selected>Year</option>
              <option value="1">2000</option>
              <option value="2">2001</option>
              <option value="3">2002</option>
            </select>
          </div>
        </div>
        {/* Gender Select inputs */}
        <div className="row p-3">
          <p>Select Gender</p>
          <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-end margin-decrease">
            <label className="form-check-label mx-2" for="flexRadioDefault1">
              Female
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
          <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-between margin-decrease">
            <label className="form-check-label mx-2" for="flexRadioDefault1">
              Male
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
          <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-between margin-decrease">
            <label className="form-check-label mx-2" for="flexRadioDefault1">
              Custom
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
        </div>
        {/* Form footer text */}
        <div className="px-3">
          <p className="gray-text-color">
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <Link to="/learnMore">
              <span>Learn more</span>
            </Link>
            .
          </p>
          <p className="gray-text-color">
            By clicking Sign Up, you agree to our{" "}
            <Link to="/privacyPolicy">
              <span>Terms, Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link to="/cookiesPolicy">
              <span>Cookies Policy</span>
            </Link>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </p>
        </div>
        <div className="text-center ">
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
