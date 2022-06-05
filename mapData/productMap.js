import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link"

const ProductMap = (props) => {

    const [like, setLike] = useState({
        isLike : true
    })
   
    let heartIcon = like.isLike ? "unfill.png" : "filled.png"  ;

    const toggleLike = () => {
         setLike(prevValue  => ({
             isLike : !prevValue.isLike
    }))
    }

    return ( 
        <>
        <div className="product-items">
               <Image  src={props.img} width={350} height={350} style={{borderRadius:"10px",  }}/>
               <div className="product-inform">
               <div className="product-left">
               <h3>{props.name}</h3>
               <p>{props.date}</p>
               </div>
               <div className="product-right">
               <Image heart="false" src={require(`../assets/product/${heartIcon}`)} width={30} height={30} onClick={toggleLike}/>
               </div>
               </div>
               <div className={styles.btn} style={{width:"120px",margin:"auto", padding:"10px",borderRadius:"5px" }}>
                    <Link href={`/productId/` + props.id}><a style={{color: "#fff"}}>Read More</a></Link></div>
        </div>
        </>
     );
}
 
export default ProductMap;