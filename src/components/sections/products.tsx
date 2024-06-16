import Card from "../../components/ui/product-card";
import { Container } from "@containers";
import useProductStore from "../../store/products";
import { useEffect, useState } from "react";
const index = () => {
  const { getProducts } = useProductStore()
  const {getLikedProducts} = useProductStore()
  const [data, setData] = useState([])
  const [liked, setLiked]:any = useState([])
  const [params] = useState({
    page: 1,
    limit: 16,
    name: "",
  })
  const getData = async () => {
    const response:any = await getProducts(params)
    setData(response?.data?.products);
  }
  const getLiked = async () => {
    const response:any = await getLikedProducts()
    setLiked(response.data.products.map((item:any) => item.product_id))
  }
  useEffect(()=> {
    getData()
    getLiked()
  }, [])
  return (
    <>
      <section className="pt-[50px]">
        <Container>
          <p className="text-[35px] font-semibold mb-5">Products</p>
          <div className="grid gap-x-3 justify-center grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-10 lg:grid-cols-4">
          {
            data?.map((item, index) => {
              return <Card liked={liked} key={index} data={item} />;
            })
          }
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
