import styles from "../styles/Home.module.css"
import React from "react";
import { useState } from "react";
import SkillsMap from "../mapData/skillsMap";
import Head from "next/head";
import { skills } from "../data/data";

const Skills = () => {

    const [skill, setSkill] = useState(skills) 

    const skillElements = skills.map(item => (
        <SkillsMap
            key={item.id}
            name={item.name}
            level={item.level}
        />
    ))


    return (
        <>
            <Head>
                <title>My Portfolio | Skills</title>
                <meta name="keywords" content="ninjas" />
            </Head>

            <div className="skills">
                <div className={styles.container}>
                    <h1 className={styles.head}>Skills</h1>
                    <div className="skill-items">
                        {skillElements}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;