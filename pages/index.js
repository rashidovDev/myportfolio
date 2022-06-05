import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Meeting from "../components/meeting"
import About from './about';
import Contact from "./contact";
import Product from "./products"
import Skills from './skills';

export default function Home() {
  return (
    <>
    
    <Head>
      <title>My Portfolio | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
  
    <Meeting />
    <About />
    <Product />
    <Skills />
    <Contact />
    </>
  )
}
