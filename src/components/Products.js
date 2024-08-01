import React, { Component } from 'react'
import Item from './Item'

export class Products extends Component {
  render() {
    return (
      <section className='product'>
      <div className='producthead'>
            <h2>ПРОДУКЦИЯ</h2>
        </div>
      <main className='position'>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} />
        ))}
      </main>
      </section>
    )
  }
}

export default Products