import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { renderPrevPage } from "../../store/pageSlice";
import { getValidationData } from "../../store/userDataSlice";
import TOKEN from "../../Validation/Token";

import styles from "./FormSubmit.module.css";

const FormSubmit = () => {
  const [thankPage, setThankPage] = useState(false);
  const dispatch = useDispatch();
  const validationData = useSelector(getValidationData);
  const savedSkills = useSelector((state) => state.skillData.items);
  const savedCovidData = useSelector((state) => state.covidData);
  const savedAboutYouData = useSelector((state) => state.aboutYouData);

  const { firstName, lastName, email, tel } = validationData;
  const { preferWork, vaccinated, vaccineWhen, covid19, whenCovid19 } =
    savedCovidData;
  const { attend, AboutDevTalk, tellUs } = savedAboutYouData;

  let hadCovid;
  let hadVaccine;
  let willOrganize;

  if (vaccinated === "no") {
    hadVaccine = false;
  } else if (vaccinated === "yes") {
    hadVaccine = true;
  }
  if (covid19 === "no") {
    hadCovid = false;
  } else if (covid19 === "yes") {
    hadCovid = true;
  }
  if (attend === "no") {
    willOrganize = false;
  } else if (attend === "yes") {
    willOrganize = true;
  }

  const submitedData = {
    token: TOKEN,
    first_name: firstName,
    last_name: lastName,
    email,
    phone: tel,
    skills: [...savedSkills],
    work_preference: preferWork,
    had_covid: hadCovid,
    had_covid_at: whenCovid19,
    vaccinated: hadVaccine,
    vaccinated_at: vaccineWhen,
    will_organize_devtalk: willOrganize,
    devtalk_topic: AboutDevTalk,
    something_special: tellUs,
  };

  const formSubmitHandler = () => {
    const sendUserData = async () => {
      await fetch("https://bootcamp-2022.devtest.ge/api/application", {
        method: "POST",
        body: JSON.stringify(submitedData),
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
      });
    };
    sendUserData();

    setThankPage(true);
    const reload = () => {
      window.location.reload();
    };
    setTimeout(reload, 3000);
  };

  const goBackToForm = () => {
    dispatch(renderPrevPage());
  };

  return (
    <div className={styles.wrapper}>
      {!thankPage ? (
        <div className={styles.buttonWrapper}>
          <React.Fragment>
            <button
              type="submit"
              className={styles.submit}
              onClick={formSubmitHandler}
            >
              Submit
            </button>
            <button
              type="button"
              className={styles.goBack}
              onClick={goBackToForm}
            >
              Go back
            </button>
          </React.Fragment>
        </div>
      ) : (
        <h1 className={styles.thanks}>Thanks for Joining 😊</h1>
      )}
    </div>
  );
};

export default FormSubmit;
