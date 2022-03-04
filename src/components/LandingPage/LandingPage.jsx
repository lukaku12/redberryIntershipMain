import React, { useEffect, useRef, useState } from "react";

import styles from "./LandingPage.module.css";
import stars from "../assets/starss.png";
import rocketman from "../assets/rocketman.png";
import { useDispatch } from "react-redux";
import { renderNextPage } from "../store/pageSlice";
import SubmittedApps from "./SubmittedApps";
import { Spinner } from "react-bootstrap";
import { gsap } from "gsap";
import TOKEN from "../Validation/Token";

const LandingPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [appsAreVisible, setAppsAreVisible] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();
  const astroRef = useRef();

  const startForm = () => {
    dispatch(renderNextPage());
  };

  useEffect(() => {
    gsap.fromTo(
      astroRef.current,
      { x: "0", y: "0", rotate: "0deg", duration: 2 },
      {
        x: "10",
        y: "-20",
        z: "-100",
        repeat: "-1",
        yoyoEase: true,
        yoyo: true,
        duration: 2,
      }
    );
  }, []);

  const fetchApplications = async () => {
    setisLoading(true);
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=" + TOKEN
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        devtalk_topic: data[key].devtalk_topic,
        email: data[key].email,
        first_name: data[key].first_name,
        had_covid: data[key].had_covid === true ? "yes" : "no",
        had_covid_at: data[key].had_covid_at,
        last_name: data[key].last_name,
        phone: data[key].phone,
        something_special: data[key].something_special,
        vaccinated: data[key].vaccinated === true ? "yes" : "no",
        vaccinated_at: data[key].vaccinated_at,
        will_organize_devtalk:
          data[key].will_organize_devtalk === true ? "yes" : "no",
        work_preference: data[key].work_preference,
        skills: data[key].skills,
      });
    }

    setAppsAreVisible(true);
    setFetchedData(loadedData);
    setisLoading(false);
  };
  const hideApps = () => {
    setAppsAreVisible(false);
  };

  return (
    <React.Fragment>
      {!appsAreVisible ? (
        <div className={styles.landingPage}>
          <img className={styles.backgroundImage} src={stars} alt="stars" />
          <div className={styles.startDiv}>
            <h1 className={styles.greet}>Welcome Rocketeer</h1>
          </div>
          <div className={styles.buttons}>
            <button className={styles.startQuest} onClick={startForm}>
              Start Questionnaire
            </button>
            <button className={styles.submitted} onClick={fetchApplications}>
              Submitted Applications
            </button>
          </div>
          <img
            className={styles.astro}
            src={rocketman}
            alt="RocketMan"
            ref={astroRef}
          />
          {isLoading && <Spinner animation="border" variant="danger" />}
        </div>
      ) : (
        <SubmittedApps hideApps={hideApps} fetchedData={fetchedData} />
      )}
    </React.Fragment>
  );
};

export default LandingPage;
