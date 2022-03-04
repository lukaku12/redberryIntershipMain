import React from "react";
import { useSelector } from "react-redux";
import Radio from '@mui/material/Radio';

const QuestinHadCovid = ({ handleChange, styles }) => {
  const checkedValue = useSelector((state) => state.covidData.covid19);
  return (
    <React.Fragment>
      <label htmlFor="covid19">Did you contact covid 19? :(</label>
      <div className={styles.radioInput}>
        <Radio
          type="radio"
          name="covid19"
          value="yes"
          checked={checkedValue === "yes"}
          onChange={handleChange}
        />
        <small> Yes</small>
      </div>
      <div className={styles.radioInput}>
        <Radio
          type="radio"
          name="covid19"
          value="no"
          checked={checkedValue === "no"}
          onChange={handleChange}
        />
        <small> No</small>
      </div>
    </React.Fragment>
  );
};

export default QuestinHadCovid;
