import React from 'react'

const FoodCat = ({items}) => {
  return (
    <>
    <div className="menu-items container-fluid mt-5">
        <div className="row">
            <div className="col-11 mx-auto">
                <div className="row my-5">
                 { 
                  items.map((val)=>{
                    const {id,imgsrc,price,title,category,description}= val
                      return (
                                <div className="item1 col-12 col-md-6 col-lg-6 col-x1-4" key={id}>
                                    <img src={imgsrc} alt="Not found"/>
                                    <h3>{title}</h3>
                                    <h4>{category}</h4>
                                    <h6>{price}</h6>
                                    <p>{description}</p>
                                </div>
                      );
                  })
                 }
                        
                </div>
            </div>
        </div>
    </div> </>
  )
}

export default FoodCat