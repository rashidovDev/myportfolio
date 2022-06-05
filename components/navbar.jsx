import { FaBars } from 'react-icons/fa';
import Link from "next/link";
import { useState } from 'react';
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

    const [Bar, setBar] = useState(false)

    const showBar = () => setBar(!Bar)

    return (
        <>
            <div className="navbar">
                <div className={styles.container}>
                    <div className="nav-items">
                        <div className="nav-logo">
                            <h1>My PortFolio</h1>
                        </div>
                        <a className='toggle-button'> <FaBars onClick={showBar} /></a> 
                        <div className="nav-elements" onClick={showBar}>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/products"><a>Products</a></Link>
                            <Link href="/about"><a>About</a></Link>
                            <Link href="/contact"><a>Contact</a></Link>
                            <Link href="/skills"><a>Skills</a></Link>
                        </div>
                        <div className="nav-search">
                            <div className="search">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    style={{ fontSize: 15}}
                                />
                                <input type="text" />
                                <button className={styles.btn}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;