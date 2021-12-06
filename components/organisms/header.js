import Script from 'next/script';
export default function Header() {
  return (
    <section className='h-auto font-monts '>
      <Script
        id='header'
        src='https://code.jquery.com/jquery-3.6.0.min.js'
        integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
        onLoad={() => {
          $(document).ready(function () {
            $('.mobile-menu-button').each(function (_, navToggler) {
              var target = $(navToggler).data('target');
              $(navToggler).on('click', function () {
                $(target).animate({
                  height: 'toggle',
                });
              });
            });
          });
        }}
      />
      <nav className='px-4 pt-5 mx-auto max-w-screen-2xl lg:px-24 lg:pt-7'>
        <div
          className='
            flex flex-col
            justify-center
            w-full
            lg:flex-row lg:items-center
          '
        >
          <div className='flex items-center justify-between'>
            {/* <!-- LOGO --> */}
            <div
              className='
                flex
                  inline-flex
                  w-full
                  px-3
                  mt-4
                  gap-7
                  lg:mt-0 lg:w-max lg:px-0
                '
            >
              <a href='#' className='block relative'>
                <img
                  alt='profil'
                  src='/logoSAMS-nobg.png'
                  className=' h-12 w-12 '
                />
              </a>
            </div>
            {/* <!-- RESPONSIVE NAVBAR BUTTON TOGGLER --> */}
            <div>
              <button
                className='
                  block
                  p-1
                  focus:outline-none
                  lg:hidden
                  mobile-menu-button
                '
                data-target='#navigation'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-blue-500 w-7 h-7'
                  x-show='!showMenu'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#E5D4FF'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 8h16M4 16h16'
                  ></path>
                  <path
                    strokeLinecap='round'
                    className='hidden w-7 h-7'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='hidden w-full mobile-menu lg:block' id='navigation'>
            <div
              className='
                flex flex-col
                items-baseline
                flex-grow
                w-full
                mt-6
                lg:flex-row lg:items-center lg:mt-0
              '
            >
              <div
                className='
                  flex flex-col
                  gap-4
                  text-base
                  font-medium
                  text-green-800
                  lg:flex-row
                  w-max
                  lg:mx-auto lg:text-center lg:gap-9
                '
              >
                <a href='#' className='py-1 mx-2 lg:mx-auto lg:pl-0'>
                  Pricing
                </a>
                <a href='#' className='py-1 mx-2 lg:mx-auto lg:pl-0'>
                  Features
                </a>
                <a href='#' className='py-1 mx-2 lg:mx-auto lg:pl-0'>
                  Showcase
                </a>
                <a href='#' className='py-1 mx-2 lg:mx-auto lg:pl-0'>
                  Media
                </a>
              </div>
              <div
                className='
                flex
                  inline-flex
                  w-full
                  px-3
                  mt-4
                  gap-7
                  lg:mt-0 lg:w-max lg:px-0
                '
              >
                <a
                  href='#'
                  className='
                    flex
                    px-5
                    py-3
                    text-center
                    transition
                    duration-200
                    ease-out
                    bg-transparent
                    rounded-lg
                    lg:mx-auto
                    bg-green-500 hover:bg-opacity-30
                  '
                >
                  <span className='w-full text-base font-normal text-green-600'>
                    Sign In
                  </span>
                </a>
                <a
                  href='#'
                  className='
                    flex
                    px-5
                    py-3
                    text-center
                    transition
                    duration-200
                    ease-out
                    bg-white
                    rounded-lg
                    lg:mx-auto
                    hover:bg-white hover:bg-opacity-90
                  '
                >
                  <span className='w-full text-base font-semibold text-blue-800'>
                    Sign Up
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className='px-4 py-20 mx-auto max-w-screen-2xl lg:px-24'>
        <div className='grid items-center gap-10 md:grid-cols-12 lg:gap-0'>
          <div className='md:col-span-12 lg:col-span-6'>
            <div
              className='
                text-5xl
                font-bold
                leading-normal
                text-green-600
                headline
                lg:leading-snug
              '
            >
              Get Your Journey Pretty Quick
            </div>
            <div className='mt-5 mb-12'>
              <p className='text-sm font-medium leading-7 text-nogrey lg:text-base'>
                Secure the expenses and spend more money on
                <br className='hidden lg:block' />
                investment with our trading robot
              </p>
            </div>
            <div>
              <a
                href='#'
                className='
                  px-6
                  py-4
                  transition
                  duration-300
                  ease-out
                  rounded-lg
                  bg-champ-yellow
                  bg-green-600
                  text-white
                '
              >
                <span className='text-base font-monts font-semibold text-center  '>
                  Lest Go Demo
                </span>
              </a>
            </div>
            <div
              className='
                inline-flex
                flex-row flex-wrap
                items-center
                justify-center
                mt-16
                gap-14
                lg:gap-8 lg:justify-start
                text-nogrey
              '
            >
              <div className='adobe-svg'>
                <svg
                  width='101'
                  height='24'
                  viewBox='0 0 101 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M39.1039 17.3484L37.7325 23.7246H34.5781L39.7897 0.616587H43.5263L48.4293 23.7246H45.2407L43.9035 17.3484H39.1039ZM43.5263 14.7769L42.4635 9.25622C42.1549 7.67904 41.8463 5.62299 41.6069 3.97667H41.4691C41.2297 5.65671 40.8857 7.7819 40.5783 9.25622L39.4811 14.7769H43.5263ZM60.4696 0V19.4393C60.4696 20.7085 60.5382 22.56 60.6062 23.7251H57.8295L57.6238 21.7028H57.521C56.9724 22.868 55.7038 24 54.0243 24C50.9385 24 49.0528 20.6394 49.0528 15.4632C49.0528 9.56595 51.5551 6.78874 54.1957 6.78874C55.5323 6.78874 56.5952 7.40646 57.1781 8.67449H57.2467V0H60.4696V0ZM57.2461 13.4055C57.2461 13.0975 57.2461 12.7203 57.2118 12.3763C57.0404 10.8683 56.1832 9.56537 55.018 9.56537C52.9946 9.56537 52.3094 12.3763 52.3094 15.4627C52.3094 18.8913 53.2009 21.2908 54.9152 21.2908C55.6352 21.2908 56.5946 20.9136 57.1432 18.9256C57.2118 18.6513 57.2461 18.2393 57.2461 17.8633V13.4055V13.4055ZM68.1464 23.9994C64.8211 23.9994 62.4205 21.1536 62.4205 15.4289C62.4205 9.35965 65.2657 6.78816 68.3172 6.78816C71.6087 6.78816 73.9739 9.73681 73.9739 15.3598C73.9739 21.9771 70.7167 23.9994 68.1801 23.9994H68.1464ZM68.2486 21.4628C70.2367 21.4628 70.683 17.9313 70.683 15.3947C70.683 12.8912 70.2373 9.32594 68.1806 9.32594C66.0543 9.32594 65.6434 12.8912 65.6434 15.3947C65.6434 18.1713 66.1234 21.4628 68.2149 21.4628H68.2486ZM75.9168 0H79.1392V8.94822H79.2078C80.0649 7.44018 81.2307 6.78816 82.705 6.78816C85.5502 6.78816 87.3337 10.0111 87.3337 15.1198C87.3337 21.0851 84.8993 23.9994 82.1564 23.9994C80.5106 23.9994 79.5849 23.1074 78.8643 21.6331H78.7283L78.5563 23.7246H75.7797C75.8483 22.5937 75.9168 20.7079 75.9168 19.4388V0V0ZM79.1392 17.8273C79.1392 18.2056 79.1735 18.5827 79.2763 18.8564C79.7901 20.8799 80.7849 21.2908 81.4358 21.2908C83.3559 21.2908 84.0759 18.7542 84.0759 15.3255C84.0759 12.1369 83.3221 9.56537 81.4015 9.56537C80.3386 9.56537 79.4815 10.834 79.2415 12.034C79.1729 12.3769 79.1386 12.8232 79.1386 13.1655V17.8273H79.1392V17.8273ZM92.0892 16.045C92.1235 20.3308 93.9744 21.3931 95.9287 21.3931C97.0945 21.3931 98.0888 21.1194 98.8088 20.7759L99.2888 23.1074C98.2945 23.6217 96.7859 23.8966 95.3116 23.8966C91.1292 23.8966 88.9348 20.7422 88.9348 15.5992C88.9348 10.1477 91.4372 6.78759 94.9001 6.78759C98.3631 6.78759 99.9745 10.1134 99.9745 14.2969C99.9745 15.1192 99.9397 15.6341 99.906 16.0792L92.0892 16.045V16.045ZM96.923 13.7483C96.9573 10.7997 95.9287 9.22308 94.6607 9.22308C92.9801 9.22308 92.2258 11.6574 92.1235 13.7483H96.923Z'
                    fill='#ACABB9'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.4158 0.678284H26.0429V23.7245L16.4158 0.678284ZM9.63394 0.678284H0V23.7245L9.63394 0.678284ZM13.0255 9.17163L19.1593 23.7245H15.1398L13.3055 19.0896H8.81564L13.0255 9.17163Z'
                    fill='#ACABB9'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M99.7012 6.74528C99.7978 6.74573 99.8933 6.7653 99.9823 6.80287C100.071 6.84043 100.152 6.89525 100.22 6.96416C100.287 7.03307 100.341 7.1147 100.377 7.20434C100.413 7.29398 100.43 7.38987 100.429 7.48645C100.429 7.90474 100.106 8.23103 99.6978 8.23103C99.2926 8.23103 98.9629 7.90531 98.9629 7.48645C98.9624 7.3895 98.981 7.2934 99.0176 7.20365C99.0543 7.1139 99.1083 7.03226 99.1766 6.96342C99.2448 6.89457 99.326 6.83987 99.4154 6.80244C99.5049 6.76501 99.6008 6.74558 99.6978 6.74528H99.7012ZM99.6978 6.86015C99.372 6.86015 99.1046 7.14072 99.1046 7.48645C99.1046 7.83903 99.372 8.1156 99.7012 8.1156C100.03 8.11903 100.294 7.83903 100.294 7.48987C100.294 7.14072 100.03 6.86015 99.7012 6.86015H99.6978ZM99.5595 7.91846H99.428V7.09101C99.4972 7.08129 99.5635 7.07101 99.6623 7.07101C99.7875 7.07101 99.8692 7.09786 99.9189 7.13387C99.9686 7.16987 99.9949 7.22587 99.9949 7.3053C99.9949 7.41387 99.9223 7.48016 99.8332 7.50645V7.51273C99.9058 7.52588 99.9555 7.59216 99.9715 7.71388C99.9915 7.84245 100.011 7.8916 100.025 7.91846H99.8863C99.8663 7.8916 99.8469 7.81617 99.8303 7.70759C99.8103 7.60188 99.7578 7.56245 99.6521 7.56245H99.5601V7.91846H99.5595V7.91846ZM99.5595 7.46016H99.6549C99.7635 7.46016 99.8566 7.42073 99.8566 7.31844C99.8566 7.24587 99.8035 7.17329 99.6549 7.17329C99.6126 7.17329 99.5823 7.17672 99.5595 7.18015V7.46016V7.46016ZM27.312 0.678284C27.4086 0.678728 27.5042 0.698296 27.5932 0.735863C27.6821 0.77343 27.7628 0.828249 27.8305 0.897157C27.8982 0.966064 27.9516 1.0477 27.9875 1.13734C28.0235 1.22698 28.0413 1.32286 28.0401 1.41944C28.0401 1.83774 27.7172 2.16403 27.3086 2.16403C26.9035 2.16403 26.5737 1.83831 26.5737 1.41944C26.5732 1.32249 26.5918 1.22639 26.6285 1.13664C26.6652 1.04689 26.7192 0.965257 26.7874 0.896411C26.8557 0.827565 26.9369 0.772862 27.0263 0.735431C27.1157 0.698001 27.2117 0.678583 27.3086 0.678284H27.312ZM27.3086 0.793142C26.9823 0.793142 26.7155 1.07372 26.7155 1.41944C26.7155 1.77202 26.9823 2.0486 27.312 2.0486C27.6412 2.05203 27.9052 1.77202 27.9052 1.42287C27.9052 1.07372 27.6412 0.793142 27.312 0.793142H27.3086ZM27.1703 1.85146H27.0383V1.024C27.1158 1.01115 27.1941 1.00466 27.2726 1.00458C27.3978 1.00458 27.48 1.03029 27.5292 1.06686C27.5789 1.10287 27.6052 1.15944 27.6052 1.23829C27.6052 1.34687 27.5326 1.41316 27.4435 1.43945V1.44573C27.5161 1.45887 27.5658 1.52516 27.5823 1.64745C27.6018 1.77602 27.6218 1.82517 27.6349 1.85203H27.4966C27.4766 1.82517 27.4566 1.74974 27.4406 1.64116C27.4206 1.53545 27.368 1.49602 27.2623 1.49602H27.1703V1.85146V1.85146ZM27.1703 1.39316H27.2658C27.3743 1.39316 27.4669 1.35373 27.4669 1.25144C27.4669 1.17887 27.4143 1.10629 27.2658 1.10629C27.2229 1.10629 27.1932 1.10972 27.1703 1.11315V1.39316V1.39316Z'
                    fill='#ACABB9'
                  />
                </svg>
              </div>
              <div className='facebook-svg'>
                <svg
                  width='125'
                  height='24'
                  viewBox='0 0 125 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.1641 3.77724C8.71129 3.77724 8.27545 4.41647 8.27545 5.84019V8.19371H12.1689L11.7912 12.0291H8.27545V23.6223H3.59749V12.0291H0.459473V8.22276H3.59749V5.92736C3.59749 2.0339 5.16649 0 9.49579 0C10.3965 0 11.3263 0.0581114 12.227 0.174334V3.77724'
                    fill='#ACABB9'
                  />
                  <path
                    d='M12.4885 15.4286C12.4885 11.1284 14.5224 7.87411 18.8227 7.87411C21.1471 7.87411 22.5709 9.0654 23.2682 10.5763V8.22278H27.7428V23.6514H23.2391V21.3269C22.5999 22.8087 21.1181 23.971 18.7936 23.971C14.5224 23.971 12.4595 20.7458 12.4595 16.4165L12.4885 15.4286ZM17.1665 16.4746C17.1665 18.77 18.0091 20.31 20.1883 20.31C22.106 20.31 23.0648 18.9153 23.0648 16.707V15.138C23.0648 12.9298 22.0769 11.5351 20.1883 11.5351C18.0091 11.5351 17.1665 13.046 17.1665 15.3705V16.4746V16.4746Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M37.4476 7.87411C39.249 7.87411 40.9924 8.25184 41.9222 8.92012L40.8762 12.2325C39.9173 11.7676 38.8423 11.5351 37.7672 11.5351C35.2394 11.5351 34.1352 12.9879 34.1352 15.4867V16.3874C34.1352 18.8862 35.2394 20.339 37.7672 20.339C38.8423 20.339 39.9173 20.0775 40.8762 19.6126L41.9222 22.925C40.9924 23.5642 39.2781 23.971 37.4476 23.971C31.9561 23.971 29.4863 21.0363 29.4863 16.3003V15.5739C29.4863 10.8378 31.9561 7.87411 37.4476 7.87411'
                    fill='#ACABB9'
                  />
                  <path
                    d='M42.5322 16.5037V15.138C42.5322 10.7506 45.031 7.87411 50.1158 7.87411C54.9099 7.87411 57.031 10.7797 57.031 15.0799V17.5497H47.2102C47.2974 19.6707 48.2562 20.6005 50.8422 20.6005C52.5274 20.6005 54.2126 20.2809 55.8107 19.6707L56.6533 22.8669C55.433 23.5061 52.9051 24 50.6678 24C44.7405 23.971 42.5322 21.0363 42.5322 16.5037V16.5037ZM47.2102 14.4698H52.847V14.092C52.847 12.4068 52.1787 11.0702 50.1158 11.0702C48.0237 11.0702 47.2102 12.4068 47.2102 14.4698Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M74.348 16.4165C74.348 20.7167 72.285 23.9709 67.9848 23.9709C65.6603 23.9709 64.0332 22.8087 63.394 21.3269V23.6513H58.9775V0.464885L63.6555 0.0581055V10.3729C64.3238 9.00726 65.8347 7.90314 68.0139 7.90314C72.285 7.90314 74.3771 11.1283 74.3771 15.4576L74.348 16.4165ZM69.67 15.3414C69.67 13.1622 68.8274 11.5351 66.5901 11.5351C64.6725 11.5351 63.6555 12.9007 63.6555 15.109V16.7361C63.6555 18.9443 64.7015 20.3099 66.5901 20.3099C68.8274 20.3099 69.67 18.6828 69.67 16.5036V15.3414Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M75.8882 16.3003V15.5158C75.8882 11.0702 78.416 7.87411 83.5589 7.87411C88.7017 7.87411 91.2296 11.0702 91.2296 15.5158V16.3003C91.2296 20.7458 88.7017 23.9419 83.5589 23.9419C78.416 23.9419 75.8882 20.7748 75.8882 16.3003V16.3003ZM86.5807 15.1961C86.5807 13.1623 85.7381 11.5351 83.5589 11.5351C81.3797 11.5351 80.5371 13.1623 80.5371 15.1961V16.6489C80.5371 18.6828 81.3797 20.31 83.5589 20.31C85.7381 20.31 86.5807 18.6828 86.5807 16.6489V15.1961V15.1961Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M92.8276 16.3003V15.5158C92.8276 11.0702 95.3555 7.87411 100.498 7.87411C105.641 7.87411 108.169 11.0702 108.169 15.5158V16.3003C108.169 20.7458 105.641 23.9419 100.498 23.9419C95.3555 23.9419 92.8276 20.7748 92.8276 16.3003V16.3003ZM103.52 15.1961C103.52 13.1623 102.678 11.5351 100.498 11.5351C98.3192 11.5351 97.4765 13.1623 97.4765 15.1961V16.6489C97.4765 18.6828 98.3192 20.31 100.498 20.31C102.678 20.31 103.52 18.6828 103.52 16.6489V15.1961V15.1961Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M114.59 15.5738L119.21 8.1937H124.15L119.326 15.8353L124.353 23.6513H119.385L114.59 16.0969V23.6513H109.941V0.464888L114.59 0.0290527'
                    fill='#ACABB9'
                  />
                </svg>
              </div>
              <div className='tesla-svg'>
                <svg
                  width='185'
                  height='24'
                  viewBox='0 0 185 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M157.559 9.52066V24H162.187V14.3471H179.113V24H183.741V9.52066H157.559ZM161.658 4.82645H179.509C182.022 4.36364 183.807 2.1157 184.336 0H156.832C157.36 2.1157 159.212 4.29752 161.658 4.82645ZM143.476 24C145.79 23.0083 147.046 21.2893 147.575 19.3058H126.749V0.0661157H122.055V24H143.476V24ZM87.3439 4.76033H103.873C106.385 4.03306 108.435 2.1157 108.964 0.0661157H82.782V14.2149H104.203V19.1735H87.4101C84.7654 19.9008 82.5175 21.6859 81.3935 24H108.832V9.52066H87.4101L87.3439 4.76033ZM46.6167 4.82645H64.4679C66.9803 4.36364 68.8315 2.1157 69.2944 0H41.7241C42.253 2.1157 44.1043 4.29752 46.6167 4.82645ZM46.6167 14.281H64.4679C66.9803 13.8182 68.8315 11.5702 69.2944 9.45454H41.7241C42.253 11.5702 44.1043 13.7521 46.6167 14.281ZM46.6167 24H64.4679C66.9803 23.5372 68.8315 21.2893 69.2944 19.1735H41.7241C42.253 21.2893 44.1043 23.5372 46.6167 24Z'
                    fill='#ACABB9'
                  />
                  <path
                    d='M0.137207 0.0661157C0.666133 2.18182 2.51737 4.29752 4.96365 4.82644H12.5008L12.8975 4.95868V23.9339H17.5917V4.95868L17.9884 4.82644H25.5256C28.038 4.16529 29.8231 2.18182 30.3521 0.0661157V0L0.137207 0.0661157Z'
                    fill='#ACABB9'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='md:col-span-12 lg:col-span-6'>
            <div className='flex w-full lg:justify-end'>
              <img src='/img_header.png' alt='GetShayna' className='w-11/12' />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
