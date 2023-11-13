import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductsTemp from "./Productcard";
import Singleproduct from "./Singlecategoryp";

const SingleCategory = ({cats}) => {

    const categories = cats[0];

    return ( 
        <div className="bigproduct">
           <Singleproduct productcat={categories} />
        </div>
     );
}
 
export default SingleCategory;