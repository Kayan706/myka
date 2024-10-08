import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
       
      <div className='shopCart'>
        
        <img src={"./img/" + this.props.item.img} />
        <div className='textPosition'>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.about}</p>
            <b>{this.props.item.price}</b>
        </div>
      
      </div>
    )
  }
}

export default Item