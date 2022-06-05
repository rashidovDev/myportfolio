import styles from "../styles/Home.module.css"

const AboutData = (props) => {
    return ( 
        <>
            <div className="about-elements">
                <h3>{props.title}</h3>
                <br/>
                <p>{props.inform}</p>
            </div>
        </>
     );
}
 
export default AboutData;