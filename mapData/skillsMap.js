const SkillsMap = (props) => {
    return (
        <>
        <div className="skill-elements">
            <h3>{props.name} </h3>
            <div className="skill-element">
                {/* <h3>{props.name}</h3> */}
                <div className="skill-item"  style={{
                    width: `${4 * (props.level)}px`, background:`coral`,  color: "#fff"
                }}>
                    <p>{props.level}%</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default SkillsMap;