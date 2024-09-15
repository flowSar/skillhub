import React, { useState } from 'react'
import ThumbnailImg from "../assets/upload.png"
import ProfileImg from "../assets/add-photo.png"

function TestPage() {
    const [thumbnailImageName, setThumbnailImageName] = useState("");
    const [profileImgName, setProfileImgName] = useState("");
    const SelectThumbnailImg = (event) => {
        const filePath = event.target.value.split('\\');
        const name = filePath[filePath.length - 1]
        setThumbnailImageName(name)
    };

    const SelectProfileImg = (event) => {
        const filePath1 = event.target.value.split('\\');
        const name1 = filePath1[filePath1.length - 1]
        setProfileImgName(name1)
    };

  return (
    <>
        <div className='flex flex-col md:flex-row bg-red-200 justify-center'>
            <div className='bg-[#dfdfdf] flex flex-col items-center m-2 p-2 w-[16rem]'>
                <p className='text-[0.8rem]'>Upload Thumbail</p>
                <input type="file" id="thumbnail" className='hidden' onChange={SelectThumbnailImg} accept="image/*"/>
                <label for="thumbnail">
                    <img src={ThumbnailImg} className='h-[3rem]'/>
                </label>
                <p className='text-center w-[16rem] text-[0.9rem]'>{thumbnailImageName === ''? "no file selected": thumbnailImageName}</p>
                
            </div>
            <div className='bg-[#fff6f6] flex flex-col items-center m-2 p-2 w-[16rem]'>
                <p className='text-[0.8rem]'>Upload Profile</p>
                <input type="file" id="profile" className='hidden' accept="image/*" onChange={SelectProfileImg}/>
                <label for="profile">
                    <img src={ThumbnailImg} className='h-[3rem]'/>
                </label>
                <p className='text-center w-[16rem] text-[0.9rem]'>{profileImgName === ''? "no file selected": profileImgName}</p>
            </div>
        </div>
    </>
  )
}

export default TestPage