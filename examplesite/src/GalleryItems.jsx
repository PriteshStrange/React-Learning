import React from 'react'

const GalleryItems = (props) => {
  return (
    <>
     <div className="menu-items container-fluid mt-5">
        <div className="row">
            <div className="col-11 mx-auto">
                <div className="row my-5">
                    {
                        props.items.map((val)=>{
                            const {id,imgsrc,title,category,price,description} = val;
                            return (
                                <div className="item1 col-12 col-md-6 col-lg-6 col-x1-4" key={id}>
                                    <img src= {imgsrc} alt="Not Found"/>
                                    <p>{title}</p>
                                    <h4>{category}</h4>
                                    <h6>{price}</h6>
                                    <p>{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default GalleryItems
