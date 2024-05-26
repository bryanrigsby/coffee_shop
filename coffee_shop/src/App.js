import React, { useEffect, useState } from 'react';
import './App.css';
import Body from 'components/Body';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import {fakeMenuItems, fakeMerchItems} from 'fakeData/fakeData'

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [merchandiseItems, setMerchandiseItems] = useState([]);
  const [likedCoffee, setLikedCoffee] = useState([]);
  

  useEffect(() => {
    getData();
    // Simulating fetching data from an API
    // setMenuItems(fakeMenuItems);
    setLikedCoffee([1,2,5,6]);
  }, []);

  const getData = async () => {
    const response = await fetch("/api/getData")
    try {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      console.log('response', response)
      const jsonData = await response.json();
      setMenuItems(jsonData.menuItems);
      setMerchandiseItems(jsonData.merchItems)
      console.log('jsonData', jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const updateShoppingCart = (shoppingCartItem) => {
    setShoppingCart([...shoppingCart, shoppingCartItem]);
  };

  const addFavoriteHeart = (likedCoffeeID) => {
    console.log("likedCoffeItem", likedCoffeeID)
    if (likedCoffee.includes(likedCoffeeID)) {
      let temp = [...likedCoffee];
      let index = temp.indexOf(likedCoffeeID);
      console.log("index", index);
      temp.splice(index,1);
      console.log("temp", temp)
      setLikedCoffee(temp);

      
    }else{
      setLikedCoffee([...likedCoffee, likedCoffeeID]);

    }
  };

  return (
    <div className="App">
      <Navbar shoppingCart={shoppingCart} />
      <Body updateShoppingCart={updateShoppingCart} menuItems={menuItems} merchandiseItems={merchandiseItems} addFavoriteHeart={addFavoriteHeart} likedCoffee={likedCoffee}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
