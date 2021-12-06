import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { render } from 'react-dom';
import Image from 'next/image';

export default function Testimoni() {
  return (
    <div className='mt-24'>
      <div
        className='text-monts text-center text-green-600 underline font-bold text-3xl
              leading-normal
                
              headline'
      >
        Straight from Our Customers
      </div>
      <div className='w-full'>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
          showArrows={true}
        >
          <div className='bg-white dark:bg-gray-800 w-full  p-8 py-10'>
            <p className='text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-2xl'>
              <span className='font-monts text-indigo-500'>“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className='font-monts text-indigo-500'>”</span>
            </p>
            <div className='flex items-center justify-center mt-8'>
              <a href='#' className='block relative'>
                <Image
                  alt='profil'
                  src='/profile.jpg'
                  className=' object-cover rounded-full h-10 w-10 '
                />
              </a>
              <div className='flex ml-2 items-center justify-center'>
                <span className='font-semibold font-monts text-indigo-500 mr-2 text-lg'>
                  Jean Miguel
                </span>
                <span className='text-gray-400 text-xl font-light'>/</span>
                <span className='text-gray-400 text-md ml-2'>
                  User of Tail-Kit
                </span>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 w-full  p-8 py-10'>
            <p className='text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-2xl'>
              <span className='font-monts text-indigo-500'>“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className='font-monts text-indigo-500'>”</span>
            </p>
            <div className='flex items-center justify-center mt-8'>
              <a href='#' className='block relative'>
                <Image
                  alt='profil'
                  src='/profile.jpg'
                  className=' object-cover rounded-full h-10 w-10 '
                />
              </a>
              <div className='flex ml-2 items-center justify-center'>
                <span className='font-semibold font-monts text-indigo-500 mr-2 text-lg'>
                  Pupu
                </span>
                <span className='text-gray-400 text-xl font-light'>/</span>
                <span className='text-gray-400 text-md ml-2'>
                  User of Tail-Kit
                </span>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 w-full  p-8 py-10'>
            <p className='text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-2xl'>
              <span className='font-monts text-indigo-500'>“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span className='font-monts text-indigo-500'>”</span>
            </p>
            <div className='flex items-center justify-center mt-8'>
              <a href='#' className='block relative'>
                <Image
                  alt='profil'
                  src='/profile.jpg'
                  className=' object-cover rounded-full h-10 w-10 '
                />
              </a>
              <div className='flex ml-2 items-center justify-center'>
                <span className='font-semibold font-monts text-indigo-500 mr-2 text-lg'>
                  Lili
                </span>
                <span className='text-gray-400 text-xl font-light'>/</span>
                <span className='text-gray-400 text-md ml-2'>
                  User of Tail-Kit
                </span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
