import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

const chechNumber = (number) => {
  if (number > people.length - 1){
    return 0
  }
  if (number < 0){
    return people.length - 1;
  }
  return number;
}

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      return chechNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return chechNumber(newIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index){
      randomPerson();
      return;
    }
    setIndex(randomNumber);
  }
  
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
      <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container" >
      <div className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </div>
      <div className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </div>
    </div>
      <div className="prev-btn" onClick={randomPerson}>
        surprise me
      </div>
  </article>;
};

export default Review;
