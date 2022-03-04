import React, { useState } from "react";

import vectorImg from "../assets/VectorWhite.png";
import changer from "../Validation/changeIdToTitle";

const AppList = ({ sentFetchedData, styles }) => {
  const [toogle, setToogle] = useState(false);
  const [test, setTest] = useState();
  const createdData = sentFetchedData.map((data) => (
    <React.Fragment key={data.id}>
      <div
        className={styles.appWrapper}
        onClick={() => {
          setTest([data].filter((test) => test.id === data.id));
          setToogle(prevValue => !prevValue);
        }}
      >
        <li></li>
        <button type="button" className={styles.button}>
          <img src={vectorImg} alt="↓" />
        </button>
      </div>
      {test !== undefined &&
        test.map(
          (index) =>
            index.id === data.id &&
            toogle && (
              <React.Fragment key={index.id}>
                {console.log()}
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
                            <p className={styles.skillset}>
                              {changer(skill.id)}
                            </p>
                            <p>Years Of Experience: {skill.experience}</p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className={styles.listItems}>
                      <h2>Covid Situation</h2>
                      <h5>how would you prefer to work?</h5>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.work_preference === "from_office"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>From Sairme Office</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.work_preference === "from_home"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>From Home</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.work_preference === "hybrid"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>Hybrid</p>
                      </div>
                      <h5>Did you have covid 19?</h5>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.had_covid === "yes"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>yes</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.had_covid === "no" ? styles.acitveRadio : ""
                            }
                          ></div>
                        </div>
                        <p>no</p>
                      </div>
                      {index.had_covid === "yes" && (
                        <React.Fragment>
                          <h5>When did you have covid 19?</h5>
                          <input
                            className={styles.date}
                            type="date"
                            value={index.had_covid_at}
                            readOnly
                          />
                        </React.Fragment>
                      )}
                      <h5>Have you been vaccinated?</h5>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.vaccinated === "yes"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>yes</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.vaccinated === "no"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>no</p>
                      </div>
                      {index.vaccinated === "yes" && (
                        <React.Fragment>
                          <h5>When did you get covid vaccine?</h5>
                          <input
                            className={styles.date}
                            type="date"
                            value={index.vaccinated_at}
                            readOnly
                          />
                        </React.Fragment>
                      )}
                    </div>
                    <div className={styles.listItems}>
                      <h2>Insigts</h2>
                      <h5>
                        Would you attend Devtalks and maybe also organize your
                        own?
                      </h5>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.will_organize_devtalk === "yes"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>yes</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={styles.radioDivision}>
                          <div
                            className={
                              index.will_organize_devtalk === "no"
                                ? styles.acitveRadio
                                : ""
                            }
                          ></div>
                        </div>
                        <p>no</p>
                      </div>
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
            )
        )}
    </React.Fragment>
  ));

  return <ul className={styles.fetchedApps}>{createdData}</ul>;
};

export default AppList;
