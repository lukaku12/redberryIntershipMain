import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import FormUser from "./components/FormUser/FormUser";
import LandingPage from "./components/LandingPage/LandingPage";
import { getCurrentPage } from "./components/store/pageSlice";

const App = () => {
  const currentPage = useSelector(getCurrentPage);

  return (
    <React.Fragment>
      {currentPage === 0 && <LandingPage />}
      {currentPage > 0 && <FormUser />}
    </React.Fragment>
  );
};

export default App;
