import React from 'react'
import img2 from './image/Screenshot_2022-11-09_12-06-15.png'
import img3 from './image/Screenshot_2022-11-09_12-22-19.png'
export const Toppage = () => {
  return (
    <div className='TopPage'>
        {/* navbar */}
     <div className='flex'>
        <div className='imageDiv'>
        <img src={img2} alt="" />
        </div>
        <div className='buttonDiv'>
            <div><button className='button1'> <b>Login</b> </button> </div>{"  "}
            <div><button className='button2'> <b>Subscribe</b> </button></div>
        </div>
     </div>
     {/* containt */}
     <div className='containt'>
        <div className='headingDiv'><h2>Want to make  Fackbook advertisemkenty easy again?</h2>
        <p>welcome to AdEspresso univercity</p></div>
        <div>
            <img src={img3} alt=""  />
        </div>
     </div>
    </div>
  )
}