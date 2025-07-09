import Jumbotron from "../components/Jumbotron";
import ProductList from "../components/ProductList";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20 w-full">
      <Jumbotron />
      <ProductList />
    </div>
  );
}
