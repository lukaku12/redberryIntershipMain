import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skillActions } from "../../store/skillSlice";

import vectorImg from "../../assets/Vector.png";
import RemoveImg from "../../assets/Remove.png";
import styles from "./FormUserSkills.module.css";

const FormUserSkills = () => {
  const [fetchedDataIsVisible, setFetchedDataIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedId, setSelectedId] = useState();
  const [languageList, setLanguageList] = useState([]);
  const [year, setYear] = useState("");
  const savedSkills = useSelector((state) => state.skillData.items);
  const skillError = useSelector((state) => state.skillData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bootcamp-2022.devtest.ge/api/skills"
      );
      const data = await response.json();
      const loadedSkills = [];
      for (const key in data) {
        loadedSkills.push({
          id: data[key].id,
          title: data[key].title,
        });
      }
      const createdSkillList = loadedSkills.map((skill) => (
        <div key={skill.id} className={styles.items}>
          <button
            onClick={() => {
              setSelectedLanguage(skill.title);
              setSelectedId(skill.id);
              setFetchedDataIsVisible((prevValue) => !prevValue);
            }}
          >
            {skill.title}
          </button>
        </div>
      ));
      setLanguageList(createdSkillList);
    };
    fetchData();
  }, []);

  const createUserSkills = () => {
    if (year !== "" && selectedLanguage !== "" && year > 0 && year <= 10) {
      dispatch(
        skillActions.addSkill({
          selectedLanguage,
          year,
          id: selectedId,
        })
      );
      setSelectedLanguage("");
      setYear("");
    } else {
      dispatch(skillActions.addError({ error: "Invalid Entry" }));
    }
  };

  const userSkills = savedSkills.map((data) => (
    <div key={data.id} className={styles.skillList}>
      <p>{data.title}</p>
      <p>Years Of Experience: {data.experience}</p>
      <button
        className={styles.listRemover}
        onClick={() => {
          dispatch(skillActions.removeSkill({ title: data.title }));
        }}
      >
        <img className={styles.removeBtn} src={RemoveImg} alt="-" />
      </button>
    </div>
  ));

  return (
    <React.Fragment>
      <h1>Tell us about your skills</h1>
      <div className={styles.mainSection}>
        <div
          className={styles.skills}
          onClick={() => setFetchedDataIsVisible((prevValue) => !prevValue)}
        >
          <h3>skills</h3>
          <h2>{selectedLanguage}</h2>
          <button
            type="button"
            className={
              fetchedDataIsVisible ? styles.animateBtn : styles.reverseBtn
            }
          >
            <img src={vectorImg} alt="↓" />
          </button>
        </div>
        <div className={styles.wrap}>{fetchedDataIsVisible && languageList}</div>

        <input
          type="number"
          name="experience"
          className={styles.experience}
          placeholder="Experience Duration in Years"
          min={1}
          max={10}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <p style={{ paddingBottom: "1.5rem", color: "#D8000C" }}>
          {skillError}
        </p>
        <button className={styles.addSkill} onClick={createUserSkills}>
          Add Proggraming Language
        </button>
        <div className={styles.userSkillsDiv}>{userSkills}</div>
      </div>
    </React.Fragment>
  );
};

export default FormUserSkills;
