import { Radio } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const QuestHavVac = ({ handleChange, styles }) => {
  const checkedValue = useSelector((state) => state.covidData.vaccinated);
  return (
    <React.Fragment>
      <label htmlFor="vaccinated">Have you been vaccinated?</label>
      <div className={styles.radioInput}>
        <Radio
          type="radio"
          name="vaccinated"
          value="yes"
          checked={checkedValue === "yes"}
          onChange={handleChange}
        />
        <small>Yes</small>
      </div>
      <div className={styles.radioInput}>
        <Radio
          type="radio"
          name="vaccinated"
          value="no"
          checked={checkedValue === "no"}
          onChange={handleChange}
        />
        <small>No</small>
      </div>
    </React.Fragment>
  );
};

export default QuestHavVac;
