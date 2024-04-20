import React from 'react'
import MenuItem from './MenuItem';

export default function Menu(props) {
  // console.log('Menu props', props)

  let items = props && props.items && props.items.length > 0 ? props.items : [];
  // console.log('items', items)
  return (
      <div className="menu">
        <div className="row">
          <h3 className={'col-12 p-1'} >
            Menu
          </h3>
        </div>

        <div className={'row container pb-2'} style={{margin: '0 auto'}}>
          {items.length > 0 ? 
            items.map(item => (
              <MenuItem key={item.id} item={item} addToCart={(e) => {
                console.log('MenuItem passed to Menu', e);
                props.addToCart(e)
              }} />
            )) 
            :
            null
          }
        </div>
      </div>
  )
}
