import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({ hostel:{ id, hostelName, hostelImage, hostelNo, hostelMaster }}) {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hostelImage}
              text='Explore Jungle'
              label={hostelName}
              path={`/hostel/${id}`}
              key = {id}
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;