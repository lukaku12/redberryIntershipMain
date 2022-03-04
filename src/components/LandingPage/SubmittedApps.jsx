import React from "react";

import styles from "./SubmittedApps.module.css";
import AppList from "./AppList";

const SubmittedApps = (props) => {
  const sentFetchedData = props.fetchedData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.headingText}>Submitted Applications</h1>
        <button onClick={props.hideApps} className={styles.hideApps}>
          X
        </button>
        <AppList sentFetchedData={sentFetchedData} styles={styles} />
      </div>
    </div>
  );
};

export default SubmittedApps;
