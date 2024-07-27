import React from 'react'

const Requirements = ({product}) => {
  return (
    <div className='requirement'>
        {
            <p>
                {product.name}
            </p>
        }
    </div>
  )
}

export default Requirements