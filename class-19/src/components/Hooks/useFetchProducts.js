import { useQuery } from "@tanstack/react-query";

const useFetchProducts = () => {
  function getProducts() {
    return fetch("https://fakestoreapi.com/products").then(res => res.json())
  }
  
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
  return query;
};

export default useFetchProducts;