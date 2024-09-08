import React, { useEffect, useState } from 'react'
import SimpleHeader from '../components/SimpleHeader'
import userImg from "../assets/user.png";
import { LoadLogInState } from "../utils/HTTPRequest";
import { sendComment } from '../utils/HTTPRequest';
import { getComments } from '../utils/HTTPRequest';
import { useLocation, useNavigate } from 'react-router-dom';

function Service() {

  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem('email'));
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const cardData = JSON.parse(localStorage.getItem('card_data'))[0];
  const [loginState, setLogingState] = useState(false);
  const handleCommentChange = (event) => setComment(event.target.value);
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append('comment', comment);
  formData.append('user_name', userName);
  formData.append('uid', localStorage.getItem('card_uid'));
  const handleCommentClick = async () => {
    // to display click on the button
    setIsLoading(true);
    const result = await sendComment(formData)
    console.log("send commane : ", result);
    if (result === true) {
      // after comment posed release button
      setIsLoading(false);
      setComment("");
    } else {
      console.log("comment failed");
    }
  };

  useEffect(() => {
    // this function if for check if the user is log in by checking for a session is exist in the server 
    // we call LoadLogInStatet function that will send a request to the server with user_id to check if the user has a session on the server to 
    // keep him logged
    const LoadDataFromDb = async() => {
      if (localStorage.getItem('user_id')) {
        const data = {
          user_id: localStorage.getItem('user_id')
        };
        const result = await LoadLogInState(data);
        if (result) {
          setLogingState(true);
          console.log('is logged', loginState);
        } else {
          navigate('/');
        }

      } else {
        console.log('your not loged yet');
        navigate('/');
      }
    };
    // when the page is loaded we call this function to check if the user is log in 
    LoadDataFromDb();
  }, []); 

  useEffect(()=>{

    const serviceUid = cardData.uid; 
    const loadComments = async () => {
      const loadedcomment = await getComments({
        uid: serviceUid,
      });
      if (loadComments) {
        setComments(loadedcomment);
        console.log('servce ',cardData.service, cardData )
      }
    }
    loadComments();
  }, []);

  return (
    <>

        <SimpleHeader />
        <div className='flex flex-col mb-[4rem] justify-center items-center'>
          <div className='mt-8 shadow-lg'>
            <img src={cardData.thumbnail_img} alt='service thumbnail' className='w-[25rem] md:w-[35rem] object-cover'/> 
          </div>

          <div className='flex border-y-2 border-slate-500 p-4 mt-4 gap-8 w-[25rem] md:w-[35rem] shadow-lg'>
            <img src={cardData.profile_img} alt='profileimg' className='rounded-[50%] h-[6rem] w-[6rem] object-contain'/>
            <div className='flex flex-col space-y-1'>
              <p className='text-lg my-2 font-semibold'>{cardData.first_name+' '+cardData.last_name}</p>
              <p><span className='font-semibold'>Country/City:</span> {cardData.country+' / '+cardData.city}</p>
              <p><span className='font-semibold'>email:</span> { cardData.email }</p>
              <p><span className='font-semibold'>phone:</span> { cardData.phone_number }</p>
              <p><span className='font-semibold'>Adress:</span> { cardData.address }</p>
            </div>
          </div>
          <div className='w-[25rem] md:w-[35rem] p-2 mt-4 border-b border-slate-600 shadow-lg'>
            <p className='text-lg font-semibold'>Working Days:</p>
            <ul>
              { 
                cardData.working_days.split(',').map((day, index) => (
                  <li className='inline-block mx-1' key={day}>{day},</li>
                ))
              }
            </ul>
          </div>
          <div className='w-[25rem] md:w-[35rem] p-2 mt-4 border-b border-slate-600 shadow-lg'>
            <p className='text-lg font-semibold'>Services:</p>
              <ul className="list-none ml-[4rem]">
                <li className="font-semibold">
                  { cardData.service || cardData.services }
                  <ul className="ml-[3rem] list-disc">
                    { cardData.sub_service?
                      typeof cardData.sub_service === 'string'?
                        cardData.sub_service.split(',').map((svs, index) => (
                          <li key={svs} className="font-medium">{svs}</li>
                        ))
                        :
                        cardData.sub_service.map((svs, index) => (
                          <li key={svs} className="font-medium">{svs}</li>
                        ))
                      :
                      null
                    }
                  </ul>
                </li>
              </ul>
          </div>
          <div className='w-[25rem] md:w-[35rem] p-2 mt-4 border-b border-slate-600 shadow-lg'>
            <p className='text-lg font-semibold'>description:</p>
            <p>{ cardData.description }</p>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <p className='text-lg font-semibold'>Comments</p>
            { comments?
              comments.map((commentInfo, index) => (
                <div className='flex justify-between w-[24rem] sm:w-[35rem] bg-[#f3f1f1] p-2 shadow-lg' key={`comments${index}`}>
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
            <button className='bg-slate-200 py-2 px-12 rounded-lg h-[3rem] hover:bg-slate-300' onClick={handleCommentClick} disabled={isLoading}>Post comment</button>
          </div>
        </div>
    </>
  )
}

export default Service