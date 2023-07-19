import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Items = ({id,color,shadow,title,text,img,btn,rating,price}) => {
    console.log(id)
  return (
    <>
        <div className=''>
            <div className=''>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className=''>
                    <div className=''><h1>{price}</h1></div>
                    <div className=''><StarIcon className='icon-style text-slate-900' /><h1>{rating}</h1></div>
                </div>
                <div className=''>
                <button type='button' className='icon-style text-slate-900'><ShoppingBagIcon /></button>
                <button type='button' className=''>{btn}</button>
            </div>
            </div>
            <div className=''>
                <img src={img} alt="img/item-img" className='' />
            </div>
            
        </div>
    </>
  )
}

export default Items