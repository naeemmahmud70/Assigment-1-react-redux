import React, { useEffect } from "react";
import Modal from "react-modal";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterUser } from "../../Redux/Slices/registerUserSlice";
import { setAllRegisterUser } from "../../Redux/Slices/allregisteredUsersSlice";

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
  const registeredUser = useSelector((state) => state.registerUser.user);
  const allRegisteredUser = useSelector((state) => state.allRegisterUser.users);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const registrationData = {
      fullName: data.fullName,
      surName: data.surName,
      mobileOrEmail: data.mobileOrEmail,
      password: data.newPassword,
      dayOfDOB: data.dayOfDOB,
      monthOfDOB: data.monthOfDOB,
      yearOfDOB: data.yearOfDOB,
      gender: data.gender,
    };
    dispatch(setRegisterUser(registrationData));
    dispatch(setAllRegisterUser([...allRegisteredUser, registrationData]));
  };

  // storing all registered data in the session storage
  useEffect(() => {
    // console.log("registered", registeredUser);
    // console.log("allRegistered", allRegisteredUser);
    localStorage.setItem(
      "allRegisteredData",
      JSON.stringify(allRegisteredUser)
    );
  }, [allRegisteredUser]);

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
                  required
                  {...register("fullName")}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  className="form-control"
                  type="text"
                  name="surName"
                  id=""
                  placeholder="Surname"
                  required
                  {...register("surName")}
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
                {...register("mobileOrEmail")}
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
                {...register("newPassword")}
              />
            </div>

            {/* Dath of birth inputs */}
            <div className="row">
              <p className="mt-2">Date of birth</p>
              <div className="col-sm-4 form-group margin-decrease">
                <select
                  className="form-select"
                  aria-label="Day of month"
                  {...register("dayOfDOB")}
                  required
                >
                  <option selected>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-sm-4 form-group margin-decrease">
                <select
                  className="form-select"
                  aria-label="Month of ODB"
                  {...register("monthOfDOB")}
                  required
                >
                  <option selected>Month</option>
                  <option value="january">Jan</option>
                  <option value="february">Fab</option>
                  <option value="march">Mar</option>
                </select>
              </div>
              <div className="col-sm-4 form-group margin-decrease">
                <select
                  className="form-select"
                  aria-label="Year of DOB"
                  required
                  {...register("yearOfDOB")}
                >
                  <option selected>Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2003">2002</option>
                </select>
              </div>
            </div>
            {/* Gender Select inputs */}
            <div className="row">
              <p className="mt-2">Select Gender</p>
              <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-end margin-decrease">
                <label
                  className="form-check-label mx-2"
                  for="flexRadioDefault1"
                >
                  Female
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="female"
                  id="flexRadioDefault1"
                  {...register("gender")}
                  required
                />
              </div>
              <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-between margin-decrease">
                <label
                  className="form-check-label mx-2"
                  for="flexRadioDefault1"
                >
                  Male
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="male"
                  id="flexRadioDefault1"
                  {...register("gender")}
                />
              </div>
              <div className="col-md-4 form-group input-radio d-flex align-items-center justify-content-between margin-decrease">
                <label
                  className="form-check-label mx-2"
                  for="flexRadioDefault1"
                >
                  Custom
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="custom"
                  id="flexRadioDefault1"
                  {...register("gender")}
                />
              </div>
            </div>
            {/* Form footer text */}
            <div className="mt-3">
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
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </div>
            <div className="text-center ">
              <button className="sign-up-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
