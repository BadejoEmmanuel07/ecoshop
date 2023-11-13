import { useQuery } from "@tanstack/react-query"
import ProductsTemp from "./Productcard"
import { Rings } from "react-loader-spinner"

const api = 'https://dummyjson.com/products/'

const Products = () => {

        const { isLoading, error, data } = useQuery({
          queryKey: ['repoData'],
          queryFn: () =>
            fetch(api).then(
              (res) => res.json(),
            ),
        })
      
        if (isLoading) return <div className="loader"> <Rings
        width='200'
        color="black"
      /></div>
      
        if (error) return 'An error has occurred: ' + error.message
      

    return ( 
        <div>
    {<ProductsTemp produce={data.products}/>}
        </div>
     );
}
 
export default Products;