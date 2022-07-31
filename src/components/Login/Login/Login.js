import React, { useEffect, useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import Registration from "../Registration/Registration";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUser } from "../../Redux/Slices/loginUserSlice";

const Login = () => {
  const user = useSelector((state) => state.loginUser.user);
  const allRegisteredUsers = useSelector(
    (state) => state.allRegisterUser.users
  );
  const dispatch = useDispatch();

  // Functions for modal
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // Functions for react router
  let navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user.password) {
    navigate(from, { replace: true });
  }
  // Submitting form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const registeredData = localStorage.getItem("allRegisteredData");
    const allRegisterData = JSON.parse(registeredData);

    const isThisUserAvaibale = allRegisterData.find(
      (registerData) => data.password === registerData.password
    );

    if (isThisUserAvaibale) {
      dispatch(setLoginUser(isThisUserAvaibale));
      localStorage.setItem("loggedInUser", JSON.stringify(isThisUserAvaibale));
    } else {
      alert("Please Sign Up First");
    }

    // reset();
  };

  useEffect(() => {
    const allRegisteredData = localStorage.getItem("allRegisteredData");
    // console.log("allData", JSON.parse(allRegisteredData));
  }, [allRegisteredUsers]);

  return (
    <div className="container login-section d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-7 d-flex align-items-center">
          <div>
            <h1 id="facebook">Facebook</h1>
            <h2 id="about-facebook">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
        </div>

        <div className="col-md-5">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="form-group">
                <input
                  name="emailOrPhone"
                  placeholder="Email adress or phone number"
                  className="form-control login-input"
                  type="text"
                  required
                  {...register("emailOrPhone")}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  name="password"
                  placeholder="passsword"
                  className="form-control login-input"
                  type="password"
                  required
                  {...register("password")}
                />
              </div>
              <div className="mt-3">
                <button type="submit" className="login-btn w-100 fw-bold">
                  Login
                </button>
              </div>
            </form>
            <p className="text-primary text-center mt-3">Forgotten password?</p>
            <hr />

            <div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn create-btn text-white fw-bold p-2"
                >
                  Create New Account
                </button>
                <Registration
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                ></Registration>
              </div>
            </div>
          </div>
          <p className="text-center mt-4">
            <strong>Create a page</strong> for a celebraty, brands or buisiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
