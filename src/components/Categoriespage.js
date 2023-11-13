import { useLoaderData, useParams } from "react-router-dom";
import SingleCategory from "./Singlecategories";

const Categoriespage = () => {

    const {item} = useParams()
    const productCat = item;
    const Singlecategories = useLoaderData()

    return ( 
        <div>
            <SingleCategory cats = { Singlecategories } />
        </div>
     );
}
export async function loadingCats({ params }) {
    const item = params.item;
    const response = await fetch(`https://dummyjson.com/products/category/${item}`);
  
    if (!response.ok) {
      // Handle the error here if needed
    }
  
    const data = await response.json();
    return data.products; // Directly return the products array
  }
  

// export async function loadingCats({params}) {
//     const item = params.item;
//     const response = await fetch (`https://dummyjson.com/products/category/${item}`)
//     if (!response.ok) {

//     }
//     const data = await response.json()
//     // console.log(data.products);
//     const mydATA =[]
//     mydATA.push(data.products)
//     return mydATA
//  }
 
export default Categoriespage;