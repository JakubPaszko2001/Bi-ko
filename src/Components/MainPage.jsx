import React from 'react'
import bg from '../Assets/bg-main.png'

const MainPage = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-1/3 w-full px-[20px] text-white flex justify-center">
        <div className="w-full max-w-[1280px] text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            Remont Idealny.
            <br />
            Z dbałością o detale.
          </h1>
          <h2 className="text-lg md:text-2xl mt-2">
            Kompleksowe wykańczanie wnętrz.
            <br />
            Dla tych, którzy cenią jakość i styl.
          </h2>
          <button className="bg-[#B68646] text-white mt-2 px-4 py-2 md:px-8 md:py-3 rounded-[10px] font-semibold text-sm md:text-lg hover:bg-[#a8753e] transition">
            Zobacz ofertę
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
