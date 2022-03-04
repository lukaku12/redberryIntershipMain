import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { covidActions } from "../../store/covidSlice";

import styles from "./FormUserCovid.module.css";
import Covid19 from "./options/Covid19";
import QuestHavVac from "./options/QuestHavVac";
import QuestinHadCovid from "./options/QuestinHadCovid";
import QuestPrefWork from "./options/QuestPrefWork";
import Vac from "./options/Vac";

const FormUserCovid = () => {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidData);
  const covidError = useSelector(state => state.covidData.error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(covidActions.setCovidInfo({ name, value }));
  };

  return (
    <React.Fragment>
      <h1>Covid Stuff</h1>
      <div className={styles.mainSection}>
        <QuestPrefWork handleChange={handleChange} styles={styles} />
        <QuestinHadCovid handleChange={handleChange} styles={styles} />
        {covidInfo.covid19 === "yes" && (
          <Covid19 styles={styles} handleChange={handleChange} />
        )}
        <QuestHavVac handleChange={handleChange} styles={styles} />
        {covidInfo.vaccinated === "yes" && (
          <Vac styles={styles} handleChange={handleChange} />
        )}
      </div>
      <p className="general-error">{covidError}</p>
    </React.Fragment>
  );
};

export default FormUserCovid;
