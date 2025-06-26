import React from 'react'

export const SideBar = () => {
  return (


    <div className='sticky flex flex-col z-5 '>
      
      Filters

        <div className='flex flex-col gap-2 mt-2 p-2 sticky '>
          Category

      <label htmlFor="All">All</label>
      <input id='All' type="radio" />

      <label htmlFor="Phone">Phone</label>
      <input id='Phone' type="radio" />         
      
      <label htmlFor="Tablet">Tablet</label>
      <input id='Tablet' type="radio" />

      <label htmlFor="headphone">headphone</label>
      <input id='headphone' type="radio" />
      
      <label htmlFor="laptop">laptop</label>
      <input id='laptop' type="radio" />

      <label htmlFor="camera">camera</label>
      <input id='camera' type="radio" />


        </div>
      

      <label htmlFor="range"> 
         price <input id='range' type="range" min={1} max={1000}   />


      </label>
      
      
      </div>
  )
}


