import React, { useState } from "react";
import { FaQuoteRight,FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Sdata from "../Birth-day Reminder/Data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const {  name, image, age, desc } = Sdata[index];

  const checkNumber = (number) =>{
    if(number > Sdata.length -1){
        return 0
    }
    if(number < 0){
        return Sdata.length - 1
    }
    return number;
  }

  const prevData = () =>{
    setIndex((ind)=>{
        let newData = ind - 1;
        return checkNumber(newData);
    })
  }
  const nextData = () =>{
    setIndex((ind)=>{
        let newData = ind + 1;
        return checkNumber(newData);
    })
  }

  const reandomNumber = () =>{
      let random =  Math.floor(Math.random() * Sdata.length);
      if(random === index){
          random = index + 1
      }
      setIndex(checkNumber(random));
    }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
          <article className="review">
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{age}</p>
            <p className="info">{desc}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevData}>
                    <FaChevronLeft/>
                </button>
                 <button className="prev-btn" onClick={nextData}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={reandomNumber}>Random</button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Review;
