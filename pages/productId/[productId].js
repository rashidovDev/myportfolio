import { product as products } from "../../data/productData";
import { useRouter } from "next/router";
import Image from "next/image"

const Details = () => {

    const router = useRouter()
    const productId = router.query.productId;
    const proDetail = products.filter(x => x.id == productId)
    const product = proDetail[0];

    console.log(product, proDetail);
    return (
        <>
            <div>

                <div>
                    <div >
                        {
                            proDetail.length > 0&&<div className="product-id">
                            <div className="product-left1">
                                <Image src={product.img} height={400} width={400} style={{ borderRadius: "10px" }} alt="product"/>
                            </div>
                            <div className="product-right1">
                                <h1>{product.name}</h1>
                                <h3>{product.list}</h3>
                                <p>{product.title}</p>
                                <h5>{product.date}</h5>
                            </div>

                        </div>
                        }
                    </div>
                    </div>
            </div>
        </>
    );
}

export default Details;




// export const getStaticPaths = () => {
//    const data = productData

//    const paths = data.map(item => {
//        return{
//            params: {id: item.id.toString() }
//        }
//    })
//    return{
//        paths,
//        fallback: false
//    }
