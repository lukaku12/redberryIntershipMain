import React from "react";
import { useSelector } from "react-redux";

const Vac = ({ styles, handleChange }) => {
  const dateValue = useSelector((state) => state.covidData.vaccineWhen);
  return (
    <div className={styles.dateInput}>
      <label htmlFor="vaccineWhen">
        When did you get your last covid vaccine?
      </label>
      <input
        type="date"
        id="vaccineWhen"
        name="vaccineWhen"
        value={dateValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Vac;
