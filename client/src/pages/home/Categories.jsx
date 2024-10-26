import React from 'react'
import category1 from '../../assets/category-1.jpeg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpeg'
import category4 from '../../assets/category-4.jpeg'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: 'Accessories', path: 'accessories', image:category1},
        {name: 'Accessories', path: 'accessories', image:category2},
        {name: 'Accessories', path: 'accessories', image:category3},
        {name: 'Accessories', path: 'accessories', image:category4},
    ]

  return (
    <>
    <div className='product__grid'>
  {categories.map((category, index) => (
    <Link 
      key={`${category.name}-${index}`} // Use both name and index to ensure uniqueness
      to={`/categories/${category.path}`} 
      className='categories__card'
    >
      <img src={category.image} alt={category.name} />
      <h4>{category.name}</h4>
    </Link>
  ))}
</div>

    
    </>
  )
}

export default Categories