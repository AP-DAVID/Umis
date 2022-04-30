import Nav from "../components/Nav";
import Pricing from "../components/Pricing";

function pricing() {
  return (
    <div className=" bg-gray-800">
      {/* Navbar for the pricing page */}
      <Nav />
      {/* pricing component */}
      <Pricing />
    </div>
  );
}

export default pricing;
