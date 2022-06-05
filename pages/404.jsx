import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import {useEffect} from "react"

const NotFound = () => {

    const router = useRouter();

    useEffect(()=> {
       setTimeout(() => {
           router.push("/")
       }, 5000)
    }, [])

    return ( 

        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a style={{color:"blue"}}>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;