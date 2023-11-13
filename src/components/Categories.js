import { useQuery } from "@tanstack/react-query";
import { Rings } from "react-loader-spinner";
import Catcard from "./Categoriesdetail";


const api = "https://dummyjson.com/products/categories";

const Categories = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(api).then((res) => res.json()),
  });



  if (isLoading)
    return (
      <div className="loader">
        {" "}
        <Rings width="200" color="black" />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return  (

  <div>
     {<Catcard Catcard={data} />} 
  </div>
  )
};

export default Categories;
