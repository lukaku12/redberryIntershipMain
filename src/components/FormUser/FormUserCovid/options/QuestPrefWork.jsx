import React from "react";
import { useSelector } from "react-redux";
import Radio from '@mui/material/Radio';

const QuestPrefWork = ({ handleChange, styles }) => {
  const checkedValue = useSelector((state) => state.covidData.preferWork);
  return (
    <React.Fragment>
      <label htmlFor="preferWork">how would you prefer to work?</label>
      <div className={styles.radioInput}>
        <Radio
          name="preferWork"
          value="from_office"
          checked={checkedValue === "from_office"}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'B' }}
        />
        <small>From Sairme Office</small>
      </div>
      <div className={styles.radioInput}>
        <Radio
          name="preferWork"
          value="from_home"
          checked={checkedValue === "from_home"}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'B' }}
        />
        <small> From Home</small>
      </div>
      <div className={styles.radioInput}>
        <Radio
          name="preferWork"
          value="hybrid"
          checked={checkedValue === "hybrid"}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'B' }}
        />
        <small> Hybrid</small>
      </div>
    </React.Fragment>
  );
};

export default QuestPrefWork;
