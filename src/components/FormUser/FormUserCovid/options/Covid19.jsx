import React from "react";
import { useSelector } from "react-redux";

const Covid19 = ({ styles, handleChange }) => {
  const dateValue = useSelector((state) => state.covidData.whenCovid19);
  return (
    <div className={styles.dateInput}>
      <label htmlFor="when">When?</label>
      <input
        type="date"
        id="when"
        name="whenCovid19"
        value={dateValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Covid19;
