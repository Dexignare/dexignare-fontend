import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
// import Button from "../Button/index";

const ModalButton = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className='mt-5 sm:mt-8 sm:flex justify-center '>
        <div className='transition ease-in-out delay-150 hover:scale-110 duration-300 p-0.5 bg-gradient-to-l from-magenta-500 via-fuchsia-500 to-violet-500 rounded-tl-xl rounded-br-xl '>
          <div className='rounded-tl-xl rounded-br-xl shadow'>
            <button
              type='button'
              onClick={openModal}
              className='w-full bg-black flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-tl-xl rounded-br-xl text-white border-2 md:py-4 md:text-lg md:px-10 font-montserrat'
            >
              {text}
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block text-center w-full max-w-lg p-8 lg:px-16 py-4 my-8 overflow-hidden align-middle transition-all transform bg-white/80 shadow-xl rounded-3xl backdrop-blur-sm'>
                <Dialog.Title
                  as='h3'
                  className='text-4xl md:text-5xl lg:text-6xl py-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 font-montserrat'
                >
                  Coming Soon!
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-md text-black font-montserrat'>
                    We will be opening the registrations soon. We can not wait
                    to have you guys with us, can you?
                  </p>
                </div>

                <div className='mb-2 mt-6 justify-evenly'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='w-full py-3 bg-gradient-to-l from-magenta-500 via-fuchsia-500 to-violet-500 my-3 text-base font-medium rounded-tl-xl rounded-br-xl text-white md:py-4 md:text-lg md:px-10 font-montserrat transition ease-in-out delay-50 drop-shadow-lg hover:drop-shadow-sm duration-100'
                  >
                    Yes, I can not wait to register!
                  </button>

                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalButton
