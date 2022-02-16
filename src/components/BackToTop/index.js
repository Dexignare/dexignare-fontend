import React from 'react'
import TopArrow from "../../assets/toparrow.svg";

const BackToTop = () => {
  return (
    <div>
      <button class='fixed bottom-6 right-6 inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-full group bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'>
        <span class='relative p-6 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>

          <img src={TopArrow} alt="" />
        </span>
      </button>
    </div>
  )
}

export default BackToTop
