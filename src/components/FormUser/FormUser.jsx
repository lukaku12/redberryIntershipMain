import React from "react";
import { useSelector } from "react-redux";
import { getCurrentPage } from "../store/pageSlice";

import Buttons from "../UI/Buttons";
import FormAboutYou from "./FormAboutYou/FormAboutYou";
import FormAboutYouInfo from "./FormAboutYou/FormAboutYouInfo";
import FormSubmit from "./FormSubmit/FormSubmit";
import styles from "./FormUser.module.css";
import FormUserCovid from "./FormUserCovid/FormUserCovid";
import FormUserCovidInfo from "./FormUserCovid/FormUserCovidInfo";
import FormUserInfo from "./FormUserInfo/FormUserInfo";
import FormUserInput from "./FormUserInfo/FormUserInput";
import FormUserSkills from "./FormUserSkills/FormUserSkills";
import FormUserSkillsInfo from "./FormUserSkills/FormUserSkillsInfo";

const FormUser = () => {
  const currentPage = useSelector(getCurrentPage);
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={currentPage !== 5 ? styles.leftSection : ""}>
        {currentPage === 1 && <FormUserInput />}
        {currentPage === 2 && <FormUserSkills />}
        {currentPage === 3 && <FormUserCovid />}
        {currentPage === 4 && <FormAboutYou />}
        {currentPage === 5 && <FormSubmit />}
        {currentPage !== 5 && <Buttons />}
      </div>
      {currentPage !== 5 && (
        <div className={styles.rightSection}>
          {currentPage === 1 && <FormUserInfo />}
          {currentPage === 2 && <FormUserSkillsInfo />}
          {currentPage === 3 && <FormUserCovidInfo />}
          {currentPage === 4 && <FormAboutYouInfo />}
        </div>
      )}
    </form>
  );
};

export default FormUser;
