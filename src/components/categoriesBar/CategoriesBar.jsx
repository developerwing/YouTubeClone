import React, { useState } from 'react'
import './_categoriesBar.scss'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../store/videos';

const keywords = [
   'All',
   'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All');
  const dispatch = useDispatch();

  const handleClick = value => {
    setActiveElement(value);
    if (value === 'All') {
      dispatch(getPopularVideos())
   } else {
      console.log(value);
      dispatch(getVideosByCategory(value))
   }
  }

   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar