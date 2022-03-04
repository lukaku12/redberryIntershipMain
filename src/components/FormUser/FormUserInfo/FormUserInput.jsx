import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getValidationData,
  getValidationErrors,
  setIsValidUser,
  setValidationData,
  setValidationErrors,
} from "../../store/userDataSlice";
import validateUser from "../../Validation/validateUser";

const FormUserInput = () => {
  const dispatch = useDispatch();
  const validationData = useSelector(getValidationData);
  const validationErrors = useSelector(getValidationErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setValidationData({ name: name, data: value }));
  };

  useEffect(() => {
    dispatch(setValidationErrors(validateUser(validationData)));
  }, [dispatch, validationData]);

  useEffect(() => {
    if (
      Object.values(validationData).every((x) => x !== "") &&
      Object.values(validationData).every((x) => x.length >= 3) &&
      Object.values(validationErrors).every((x) => x === "")
    ) {
      dispatch(setIsValidUser(true));
    } else {
      dispatch(setIsValidUser(false));
    }
  }, [dispatch, validationData, validationErrors]);

  return (
    <React.Fragment>
      <h1>
        Hey, Rocketeer, what <br /> are your coordinates?
      </h1>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={validationData.firstName}
        onChange={handleChange}
      />
      <p style={{ color: "#D8000C" }}>{validationErrors.firstNameError}</p>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={validationData.lastName}
        onChange={handleChange}
      />
      <p style={{ color: "#D8000C" }}>{validationErrors.lastNameError}</p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={validationData.email}
        onChange={handleChange}
      />
      <p style={{ color: "#D8000C" }}>{validationErrors.emailError}</p>
      <input
        type="tel"
        name="tel"
        placeholder="+995 5_ _ _ _"
        value={validationData.tel}
        onChange={handleChange}
      />
      <p style={{ color: "#D8000C" }}>{validationErrors.telError}</p>
    </React.Fragment>
  );
};

export default FormUserInput;
