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
          title: "МУКА",
          about: 'Мука шеничная хлебопекарная. \n Первый сорт \n ГОСТ 26574 - 2017',
          price: "23₽/кг"
        },
        {
          id: 2,
          img: "flour.png",
          title: 'МУКА \n"ЭЛИТ"',
          about: "Мука шеничная хлебопекарная. \n Высший сорт \n ГОСТ 26574 - 2017",
          price: "26/кг ₽"
        },
        {
          id: 3,
          img: "flour.png",
          title: 'МУКА \n "ОРЕНБУРЖЬЯ НИВА"',
          about: "Мука шеничная хлебопекарная. \n Высший сорт \n ГОСТ 26574 - 2017",
          price: "28.50₽/кг"
        },
        {
          id: 6,
          img: "suga.png",
          title: "САХАР",
          about: "ГОСТ 33222 - 2015",
          price: "66.50₽/кг"
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
