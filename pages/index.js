import data from "../utils/data";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xl:grid-cols-6 "
      >
      
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
