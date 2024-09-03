import React, { useEffect, useState } from 'react'
import SimpleHeader from '../components/SimpleHeader'
import thumbnail from "../assets/thumbnail.png";
import ProfileImg from "../assets/profileImg.jpg";
import userImg from "../assets/user.png";

import { sendComment } from '../utils/HTTPRequest';
import { getComments } from '../utils/HTTPRequest';
import { useLocation } from 'react-router-dom';

function Service() {

  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem('email'));
  const [uid, setUid] = useState('');
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const { cardData } = location.state || {};

  const handleCommentChange = (event) => setComment(event.target.value);

  const formData = new FormData();
  formData.append('comment', comment);
  formData.append('user_name', userName);
  formData.append('uid', uid);
  const handleCommentClick = async () => {
    // setUid(cardData.uid);
    const result = await sendComment(formData)
    console.log("send commane : ", result);
    if (result === true) {
      setComment("");
    } else {
      console.log("comment failed");
    }
  };

  useEffect(()=>{

    setUid(cardData.uid);
    console.log('uid', uid);
    const loadComments = async () => {
      console.log('inside')
      const loadedcomment = await getComments({
        uid
      });
      if (loadComments) {
        setComments(loadedcomment);
        console.log('loadedcomment', loadedcomment);
      }
    }
    loadComments();
  }, []);

  return (
    <>
      <SimpleHeader />
      <div className='flex flex-col mb-[4rem] justify-center items-center'>
        <div className='mt-8'>
          <img src={cardData.thumbnail_img} alt='service thumbnail' className='w-[25rem] md:w-[35rem] object-cover'/> 
        </div>

        <div className='flex border-y-2 border-slate-500 p-4 mt-4 gap-8'>
          <img src={cardData.profile_img} alt='profileimg' className='rounded-[50%] h-[6rem] w-[6rem] object-contain'/>
          <div className='flex flex-col space-y-1'>
            <p className='text-lg my-2 font-semibold'>{cardData.first_name+' '+cardData.last_name}</p>
            <p><span className='font-semibold'>Country/City:</span> {cardData.country+' / '+cardData.city}</p>
            <p><span className='font-semibold'>email:</span> { cardData.email }</p>
            <p><span className='font-semibold'>phone:</span> { cardData.phone_number }</p>
            <p><span className='font-semibold'>Adress:</span> { cardData.address }</p>
          </div>
        </div>
        <div className='w-[25rem] md:w-[35rem] p-2 mt-4 border-b border-slate-600'>
          <p className='text-lg font-semibold'>description:</p>
          <p>{ cardData.description }</p>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          { comments?
            comments.map((commentInfo, index) => (
              <div className='flex justify-between w-[24rem] sm:w-[35rem] bg-[#f3f1f1] p-2' key={`comments${index}`}>
                <div className='shrink-0' key={commentInfo}>
                  <img src={userImg} className='rounded-[50%] h-[2rem]'/>
                  <p key={`user_name${index}`} className='text-lg'>{commentInfo.user_name}</p>
                  <p className='ml-[3rem] text-slate-600 text-sm'>{commentInfo.date}</p>
                </div>
                <p key={`comment${index}`} className='text-right p-2 mr-4 flex-1'>{commentInfo.comment}</p>
            </div>
            ))
            :
            null
          }
        </div>

        <div className='flex flex-col md:flex-row w-[35rem] mt-4 justify-center items-center gap-4'>
          <textarea placeholder='comment' className=' border  border-slate-600 w-[20rem] h-[8rem] text p-2' onChange={handleCommentChange} value={comment}/>
          <button className='bg-slate-200 py-2 px-12 rounded-lg h-[3rem] hover:bg-slate-300' onClick={handleCommentClick}>Post comment</button>
        </div>
      </div>
    
    </>
  )
}

export default Service