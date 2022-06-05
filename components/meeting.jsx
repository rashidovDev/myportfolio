import styles from "../styles/Home.module.css";
import Photo from "../assets/person.jpg"
import Image from "next/image";

const Meeting = () => {
    return (
        <>
            <div className="main">
                <div className={styles.container}>
                    <div className="main-items">
                        <div className="main-meeting">

                            <h4>Hi There, </h4>
                            <h1> I'm Anvar Rashidov </h1>
                            <h2>Frontend Developer Tashkent, Uzbekistan</h2>
                        </div>
                        <div className="main-photo">
                            <Image src={require("../assets/me.jpg")} alt="Me" width={500} height={520}  className="main-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Meeting;