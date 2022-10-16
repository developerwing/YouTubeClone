import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '../comment/Comment'
import './_comments.scss'
const Comments = ({ videoId, totalComments }) => {

   return (
      <div className='comments'>
         <p>{totalComments} Comments</p>
         <div className='my-2 comments__form d-flex w-100'>
            <img src={''} alt='avatar' className='mr-3 rounded-circle' />
            <form onSubmit={null} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
                  value={null}
                  onChange={e => null}
               />
               <button className='p-2 border-0'>Comment</button>
            </form>
         </div>
         <div className='comments__list'>
            tEST
         </div>
      </div>
   )
}

export default Comments