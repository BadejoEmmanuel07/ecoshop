import { useLoaderData, useParams } from "react-router-dom";
import Singleproduct from "./Singleproducts";

const Singleproductspage  = () => {


    const {id} = useParams();
    const productId = id;
    const Singleproducts = useLoaderData(); //read on this
    const newItem = [];
    newItem.push(Singleproducts)
    
    return ( 
        <div>
            <Singleproduct prod= { newItem } />
        </div>
     );
}

 export async function loadingproducts({params}) {
    const id = params.id;
    const response = await fetch (`https://dummyjson.com/products/${id}`)
    if (!response.ok) {

    }
    const data = await response.json()
    console.log(data)
    return data
 }

export default Singleproductspage;