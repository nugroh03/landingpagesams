import Link from 'next/link';
export default function SuccessPage() {
  return (
    <>
      <div>
        <div className='container mx-auto pt-20 px-5 text-monts'>
          <div className='container mx-auto flex items-center justify-center flex-col'>
            <img
              className='sm:w-1/4 w-5/6 sm:mb-16 mb-12 object-cover object-center'
              src='/cecklistok.png'
              alt=''
            />
            <div className='text-center w-full'>
              <h1 className='text-green-900 text-3xl mb-5 font-semibold'>
                Selamat <br />
                Anda Telah Terdaftar!
              </h1>
              <p className='text-gray-600 mb-16 tracking-wide leading-7'>
                Silahkan masuk ke halaman demo, dan login menggunakan email dan
                password yang telah di daftarkan!
                <br className='sm:block hidden' /> Happy Enjoy
              </p>
              <div className='flex justify-center'>
                <Link href='http://abcdprojects.com/sams/login/'>
                  <button
                    className='
                  inline-flex bg-blue-600
                  font-semibold
                  text-white text-lg
                  leading-7
                  py-2
                  px-6
                  rounded-xl
                  focus:outline-none
                  hover:shadow-lg
                '
                  >
                    Halaman Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
