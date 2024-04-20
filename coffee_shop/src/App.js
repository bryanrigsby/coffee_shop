import { useEffect, useState } from 'react'
import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  const getData = async () => {
    let mockMenuItems = [
      { id: 1, item: "Black Coffee", price: 1, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_black_coffee.jpeg?raw=true' },
      { id: 2, item: "Espresso", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_espresso1.jpeg?raw=true' },
      { id: 3, item: "Cappuccino", price: 3, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_cappuccino.jpeg?raw=true' },
      { id: 4, item: "Latte", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_latte.jpeg?raw=true' },
      { id: 5, item: "Mocha", price: 4, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_mocha.jpeg?raw=true' },
      { id: 6, item: "Americano", price: 2, image: 'https://github.com/bryanrigsby/imagesForCoffeeShopSite/blob/main/resized_americano.jpeg?raw=true' }
    ]
    setMenuItems(mockMenuItems)
  //   await fetch("/.netlify/functions/getData")
  //     .then(function (response) {
  //       console.log('response', response)
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then(function (data) {
  //       console.log('data', data)
  //       setMenuItems(data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert("Function Failed");
  //     });
  }

  const addToCart = (item) => {
    console.log('item in addToCart', item)
    setCart([...cart, item])
  }

  useEffect(() => {
    console.log('cart in useEffect App.js', cart)
  }, [cart])
  

  return (
    <div className="App container">
      <Navbar cart={cart}/>
      <Body />
      
      {isLoading ?
      <CircularProgress />
      :
      <Menu items={menuItems && menuItems.length > 0 ? menuItems : null} addToCart={(e) => addToCart(e)} />
      }
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
