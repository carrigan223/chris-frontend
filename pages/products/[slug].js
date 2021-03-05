import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";
import BuyButton from "../../components/BuyButton";

const Product = ({ product }) => {
  return (
    <div>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>${twoDecimals(product.price)} <BuyButton product={product} /></p>

      <p>{product.content}</p>
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0], //because the API response for fiters is an array
    },
  };
}

export async function getStaticPaths() {
  //get all the paths
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  //then return them to nextJS
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, //tells next to show a 404 if the param doesnt match
  };
}

export default Product;
