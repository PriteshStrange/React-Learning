import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
        {
            items.map((val)=>{
                const {id,title,price,img,desc} = val;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} className='photo'/>
                        <div className='item-info'>
                            <haeder>

                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </haeder>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Menu