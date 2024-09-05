import React from 'react'

const LoadedData = ({ isDataLoaded }) => {
  return (
    <>
      <div className={`loading h-[10rem] w-full flex items-center justify-center bg-white ${isDataLoaded}`}>
        <p className="w-[6rem] text-center">Please wait...</p>
        <div className="spinner"></div>
      </div>
    
    </>
  )
}

export default LoadedData