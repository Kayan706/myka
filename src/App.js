import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Products from "./components/Products";
import Delivery from "./components/Delivery";
import Card from "./components/Card";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Info/>
      <Products/>
      <Delivery/>
      <Card/>
      <Footer />
    </div>
  );
}

export default App;
