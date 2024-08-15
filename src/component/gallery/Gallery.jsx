import React from 'react'
import './Gallery.css'
import food1 from '../../assest/food.jpg';
import food2 from '../../assest/food2.jpg';
import food3 from '../../assest/food3.jpg';
import food4 from '../../assest/food4.jpg';
import food5 from '../../assest/food5.jpg';
import food6 from '../../assest/food6.jpg';
import food7 from '../../assest/food7.jpg';
import food8 from '../../assest/food8.jpg';
import food9 from '../../assest/food2.webp';
import food10 from '../../assest/food.jpg';

const Gallery = () => {
    const data = [
      {
        _id: 1,
        name: 'Salad',
        image: food1,
        category: 'Intercontinental',
      },
      {
        _id: 2,
        name: 'Hamburger',
        image: food2,
        category: 'Intercontinental',
      },
      {
        _id: 3,
        name: 'Semo and egusi',
        image: food3,
        category: 'Local food',
      },
      {
        _id: 4,
        name: 'Jollof rice and chicken',
        image: food4,
        category: 'African food',
      },
      {
        _id: 5,
        name: 'Moimoi',
        image: food5,
        category: 'Local food',
      },
      {
        _id: 6,
        name: 'Efo riro',
        image: food6,
        category: 'Local food',
      },
      {
        _id: 7,
        name: 'Ofada rice',
        image: food7,
        category: 'Local food',
      },
      {
        _id: 8,
        name: 'Ewa igonyi',
        image: food8,
        category: 'Local food',
      },
      {
        _id: 9,
        name: 'Jollof rice and chicken',
        image: food9,
        category: 'African food',
      },
      {
        _id: 10,
        name: 'Semo and egusi',
        image: food10,
        category: 'Local food',
      },
    ];
  return (
    <div className="gallery">
        {data.map((item,index)=>(
            <div key={index} className='cover'>
                <div className="gallery-image-container">
                  <img src={item.image} alt={item.name} className="gallery-image" />
                </div>
                <p>{item.name}</p>
                <p className='category'>{item.category}</p>
            </div>
        ))}
    </div>
  );
}

export default Gallery