import React,{useState} from 'react'

const Tour = ({id,image,name,info,price,removeTour}) => {
    const [readMore,setReadMore] = useState(false)
  return (
    <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <p className='tour-price'>$ {price}</p>
            </div>

            <p>{readMore ? info : `${info.substring(0,200)}`} ...
            <button onClick={()=> setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
            </button>
            </p>
            <button onClick={() =>{removeTour(id)}}>Remove</button>
        </footer>
    </article>
  )
}

export default Tour