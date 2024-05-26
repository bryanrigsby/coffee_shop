import React from 'react';
import Menu from './Menu';

export default function Body(props) {
  return (
    <div className="container" >
       <Menu title={'Menu'} updateShoppingCart={(e) => props.updateShoppingCart(e) } menuItems={props.menuItems} addFavoriteHeart={(e) => props.addFavoriteHeart(e)} likedCoffee={props.likedCoffee}/>
       <Menu title={'Merchandise'} updateShoppingCart={(e) => props.updateShoppingCart(e) } menuItems={props.merchandiseItems} addFavoriteHeart={(e) => props.addFavoriteHeart(e)} likedCoffee={props.likedCoffee}/>
     </div>
  );
}
