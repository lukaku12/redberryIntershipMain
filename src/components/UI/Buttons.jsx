import React from "react";
import nextBtn from "../assets/Next.png";
import lastBtn from "../assets/Previous.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCurrentPage,
  renderFirstPage,
  renderFourthPage,
  renderNextPage,
  renderPrevPage,
  renderSecondPage,
  renderThirdPage,
} from "../store/pageSlice";
import { getIsUserValid } from "../store/userDataSlice";

import styles from "./Buttons.module.css";

const Buttons = () => {
  const dispatch = useDispatch();
  const userIsValid = useSelector(getIsUserValid);
  const skillIsValid = useSelector((state) => state.skillData.validSkills);
  const covidIsValid = useSelector((state) => state.covidData.validCovidInfo);
  const aboutYouIsValid = useSelector(
    (state) => state.aboutYouData.validCovidInfo
  );
  const currentPage = useSelector(getCurrentPage);

  const goToLastPage = () => {
    dispatch(renderPrevPage());
  };

  const goToNextPage = () => {
    if (userIsValid && currentPage === 1) {
      dispatch(renderNextPage());
    }
    if (skillIsValid && currentPage === 2) {
      dispatch(renderNextPage());
    }
    if (covidIsValid && currentPage === 3) {
      dispatch(renderNextPage());
    }
    if (aboutYouIsValid && currentPage === 4) {
      dispatch(renderNextPage());
    }
  };

  const goToFirstPage = () => {
    if (currentPage > 0) {
      dispatch(renderFirstPage());
    }
  };
  const goToSecondPage = () => {
    if (currentPage > 1) {
      dispatch(renderSecondPage());
    }
  };
  const goToThirdPage = () => {
    if (currentPage > 2) {
      dispatch(renderThirdPage());
    }
  };
  const goToFourthPage = () => {
    if (currentPage > 3) {
      dispatch(renderFourthPage());
    }
  };

  let buttonIsActive =
    userIsValid && currentPage === 1
      ? styles.arrow
      : styles.disabled && skillIsValid && currentPage === 2
      ? styles.arrow
      : styles.disabled && covidIsValid && currentPage === 3
      ? styles.arrow
      : styles.disabled && aboutYouIsValid && currentPage === 4
      ? styles.arrow
      : styles.disabled;

  return (
    <div className={styles.buttons}>
      <button className={styles.arrow} type="button" onClick={goToLastPage}>
        <img className={styles.prevBtn} src={lastBtn} alt="<" />
      </button>
      <button
        type="button"
        className={styles.index && currentPage > 0 && styles.active}
        onClick={goToFirstPage}
      ></button>
      <button
        type="button"
        className={currentPage > 1 ? styles.active : styles.index}
        onClick={goToSecondPage}
      ></button>
      <button
        type="button"
        className={currentPage > 2 ? styles.active : styles.index}
        onClick={goToThirdPage}
      ></button>
      <button
        type="button"
        className={currentPage > 3 ? styles.active : styles.index}
        onClick={goToFourthPage}
      ></button>
      <button type="button" className={styles.index}></button>
      <button type="button" className={buttonIsActive} onClick={goToNextPage}>
        <img className={styles.nextBtn} src={nextBtn} alt=">" />
      </button>
    </div>
  );
};

export default Buttons;
