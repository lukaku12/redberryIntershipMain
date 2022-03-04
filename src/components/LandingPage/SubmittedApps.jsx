import React from "react";

import styles from "./SubmittedApps.module.css";
import vectorImg from "../assets/VectorWhite.png";
import changer from "../Validation/changeIdToTitle";

const SubmittedApps = (props) => {
  const sentFetchedData = props.fetchedData;

  const createdData = sentFetchedData.map((data) => (
    <React.Fragment key={data.id}>
      <div className={styles.appWrapper}>
        <li></li>
        <button type="button" className={styles.button}>
          <img src={vectorImg} alt="↓" />
        </button>
      </div>
      {[data].map((index) => (
        <React.Fragment key={index.id}>
          <div className={styles.listContainer}>
            <div className={styles.padder}>
              <div className={styles.listItems}>
                <h2>Personal Information</h2>
                <div className={styles.listFlex}>
                  <p>First Name</p>
                  <div className={styles.rightDiv}>
                    <p>{index.first_name}</p>
                  </div>
                </div>
                <div className={styles.listFlex}>
                  <p>Last Name</p>
                  <div className={styles.rightDiv}>
                    <p>{index.last_name}</p>
                  </div>
                </div>
                <div className={styles.listFlex}>
                  <p>Email</p>
                  <div className={styles.rightDiv}>
                    <p>{index.email}</p>
                  </div>
                </div>
                <div className={styles.listFlex}>
                  <p>Phone</p>
                  <div className={styles.rightDiv}>
                    <p>{index.phone}</p>
                  </div>
                </div>
              </div>
              <div className={styles.listItems}>
                <h2 className={styles.skillset}>Skillset</h2>
                {index.skills.map((skill) => (
                  <React.Fragment key={skill.id}>
                    <div className={styles.skillItems}>
                      <p className={styles.skillset}>{changer(skill.id)}</p>
                      <p>Years Of Experience: {skill.experience}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className={styles.listItems}>
                <h2>Covid Situation</h2>
                <h5>how would you prefer to work?</h5>
                <p>{index.work_preference}</p>
                <h5>Did you have covid 19?</h5>
                <p>{index.had_covid}</p>
                <h5>When did you have covid 19?</h5>
                <p>{index.had_covid_at}</p>
                <h5>Have you been vaccinated?</h5>
                <p>{index.vaccinated}</p>
                <h5>When did you get covid vaccine?</h5>
                <p>{index.vaccinated_at}</p>
              </div>
              <div className={styles.listItems}>
                <h2>Insigts</h2>
                <h5>
                  Would you attend Devtalks and maybe also organize your own?
                </h5>
                <p>{index.will_organize_devtalk}</p>
                <h5>What would you speak about at Devtalk?</h5>
                <textarea
                  className={styles.textArea}
                  value={index.devtalk_topic}
                  readOnly
                ></textarea>
                <h5>Tell us somthing special</h5>
                <textarea
                  className={styles.textArea}
                  value={index.something_special}
                  readOnly
                ></textarea>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.headingText}>Submitted Applications</h1>
        <button onClick={props.hideApps} className={styles.hideApps}>
          X
        </button>
        <ul className={styles.fetchedApps}>{createdData}</ul>
      </div>
    </div>
  );
};

export default SubmittedApps;
