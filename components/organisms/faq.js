import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Faq() {
  return (
    <div className=' bg-white py-10 mt-10 lg:mt-10'>
      <h3 className='text-center font-montserrat font-medium text-4xl text-green-500'>
        <span className='font-bold'>FAQ </span>
      </h3>
      <div className='w-full max-w-xl p-2  pt-5 mx-auto bg-white rounded-2xl'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-4  text-base font-medium text-left text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-4 text-base font-medium text-left text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
