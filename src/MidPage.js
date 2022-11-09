import React from 'react'
import img1 from './image/Screenshot_2022-11-09_12-29-08 (1).png'
import img2 from './image/Screenshot_2022-11-09_12-29-08 (2).png'
import img3 from './image/Screenshot_2022-11-09_12-29-08 (3).png'
import img4 from './image/Screenshot_2022-11-09_12-29-08.png'
export const MidPage = () => {
  return (
    <div className='main'>
    <div className='flexDiv'>
        <div className='card'>
        <img className='img' src={img1} alt="" />
            <h2>Video Courses</h2>
            <hr />
            <p>Inside AdEspresso University, you’ll find a whole section dedicated to video courses</p>
        </div>
        <div className='card'>
        <img className='img' src={img2} alt="" />
            <h2>Ad Gallery</h2>
            <hr />
            <p>The power of AdEspresso’s software is finally yours for the testing!</p>
        </div>
        <div className='card'>
        <img className='img' src={img3} alt="" />
            <h2>Live Webinar</h2>
            <hr />
            <p>Join the CEO of AdEspresso alongside the best social media marketers </p>
        </div>
        <div className='card'>
        <img className='img' src={img4} alt="" />
            <h2>Experince</h2>
            <hr />
            <p>Every month we'll spend $1,000 to run tests and find answers.</p>
        </div>
    </div>
    </div>
  )
}
