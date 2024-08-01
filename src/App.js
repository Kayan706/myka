import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Products from "./components/Products";
import Delivery from "./components/Delivery";
import Card from "./components/Card";
import React from "react";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          img: "flour.png",
          title: "САХАР",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },
        {
          id: 2,
          img: "flour.png",
          title: "САХАР",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },
        {
          id: 3,
          img: "suga.png",
          title: "МУКА",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },
        {
          id: 4,
          img: "suga.png",
          title: "МУКА",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },
        {
          id: 5,
          img: "suga.png",
          title: "МУКА",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },
        {
          id: 6,
          img: "suga.png",
          title: "САХАР",
          about: "ВКУСНО И ТОЧКА",
          price: "999.99"
        },

      ]
    }
    
    }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Info/>
        <Products items={this.state.items}/>
        <Delivery/>
        <Card/>
        <Footer />
      </div>
    );
  }
}

export default App;
