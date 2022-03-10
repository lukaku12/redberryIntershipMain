import { Radio } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AboutYouActions } from "../../store/aboutYouSlice";

import styles from "./FormAboutYou.module.css";

const FormAboutYou = () => {
  const dispatch = useDispatch();
  const aboutYouData = useSelector((state) => state.aboutYouData);
  const aboutYouError = useSelector((state) => state.aboutYouData.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(AboutYouActions.setAboutYouInfo({ name, value }));
  };

  return (
    <React.Fragment>
      <h1>What about you?</h1>
      <div className={styles.mainSection}>
        <div className={styles.radioDiv}>
          <label htmlFor="preferWork">
            Would you attend Devtalks and maybe also organize your own?
          </label>

          <div className={styles.radioInput}>
            <Radio
              type="radio"
              name="attend"
              value="yes"
              checked={aboutYouData.attend === "yes"}
              onChange={handleChange}
            />
            <small>Yes</small>
          </div>
          <div className={styles.radioInput}>
            <Radio
              type="radio"
              name="attend"
              value="no"
              checked={aboutYouData.attend === "no"}
              onChange={handleChange}
            />
            <small>No</small>
          </div>
        </div>
        {aboutYouData.attend === "yes" && (
          <div className={styles.label}>
            <label htmlFor="devTalk">
              What would you speak about at Devtalk?
            </label>
            <textarea
              className={styles.textAreaAbout}
              placeholder="I would..."
              name="AboutDevTalk"
              value={aboutYouData.AboutDevTalk}
              onChange={handleChange}
            ></textarea>
          </div>
        )}
        <div className={styles.label}>
          <label htmlFor="devTalk">Tell us something special</label>
          <textarea
            className={styles.textAreaSpecial}
            placeholder="1."
            name="tellUs"
            value={aboutYouData.tellUs}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <p className="general-error">{aboutYouError}</p>
    </React.Fragment>
  );
};

export default FormAboutYou;
