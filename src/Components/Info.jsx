import React from 'react'
import building from '../Assets/building2.png'

const Info = () => {
  return (
    <div id="info" className='relative w-full min-h-screen bg-[#1f3622] text-white flex flex-col items-center justify-center text-center px-[20px]'>
        <h1 className='text-5xl md:text-6xl font-bold mb-2'>
            Witaj w firmie
            <br />
            Bińko-Bud
        </h1>
        <h2 className='text-2xl md:text-4xl font-semibold mb-2'>Remont Idealny</h2>
        <p className='md:text-xl max-w-3xl'>
            Jako Firma budowlano-remontowa z utalentowanym zespołem profesjonalistów, Bińko-Bud pracuje tylko z najlepszymi materiałami. Nasi pracownicy zapewniają spójne rezultaty i oferują rzetelną etykę pracy przy każdym podejmowanym projekcie. Wszystko, nad czym pracujemy, zbudowane jest na solidnym fundamencie, co oznacza, że jest zbudowane, by przetrwać lata.
        </p>
        <img src={building} className='absolute top-0 left-0 opacity-10' alt="building visual" />
    </div>
  )
}

export default Info