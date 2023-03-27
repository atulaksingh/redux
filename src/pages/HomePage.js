import React from 'react'
import Products from '../components/Products'

function HomePage() {
  return (
   <>
   <div>
    <h2 className='heading'>welcome to the redux toolkit store</h2>
    <section>
        <h3>Products</h3>
        <Products />
    </section>
   </div>
   </>
  )
}

export default HomePage
