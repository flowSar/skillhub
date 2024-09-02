import React from 'react'

const UserCard = () => {
  return (
    <>
        <div className=''>
            <div
            className="bg-gray-200 mx-4 sm:mx-0 p-2 mt-2 mb-2 cursor-pointer border border-slate-900 rounded-lg"
        >
            <img src="" className="lg:max-h-[13rem]"/>
            <div className=" flex items-center space-x-2 mt-1">
            <img
                src=""
                className="bg-black rounded-[50%] h-[2.5rem] w-[2.5rem]"
            />
            <div className="text-md font-medium">brahim sar</div>
            </div>
            <div className="text-center mt-2">
            <a className="">{description}</a>
            <div className="font-bold text-lg"> 0 &#9733; </div>
            </div>
      </div>
            
        </div>
    </>
  )
}

export default UserCard