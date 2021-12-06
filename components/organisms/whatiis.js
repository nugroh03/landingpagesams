import ReactPlayer from 'react-player/lazy';

export default function WhatIsSAMS() {
  return (
    <>
      <div
        className='text-monts text-center text-green-600 underline font-bold text-3xl
                leading-normal
     
                headline'
      >
        What is SAMS
      </div>
      <div
        className='sm:p-4 px-10 py-4 flex justify-center mt-5'
        data-aos='fade-up'
        data-aos-duration='3000'
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=GZVpUt0M5S4`}
          width='680px'
          height='420px'
          controls={true}
          playing={true}
        />
      </div>
    </>
  );
}
