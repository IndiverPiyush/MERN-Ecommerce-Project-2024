import Navbar from "../features/navbar/Navbar.js";
import ProductList from "../features/product-list/ProductList.js";

function Home() {
  return (
    <Navbar>
      <ProductList></ProductList>
    </Navbar>
  );
}

export default Home;
