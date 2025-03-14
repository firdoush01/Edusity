import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERISTY</h3>
        <h2>Nurturing Tomorrw's Leaders Today</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nisi enim eligendi quasi ut voluptatem fugit quia, molestiae quidem doloribus. Iure libero cumque at nam, quidem illum culpa quasi? Neque, nisi mollitia! Magnam inventore delectus distinctio fugit officia excepturi quis?
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nisi enim eligendi quasi ut voluptatem fugit quia, molestiae quidem doloribus. Iure libero cumque at nam, quidem illum culpa quasi? Neque, nisi mollitia! Magnam inventore delectus distinctio fugit officia excepturi quis?
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nisi enim eligendi quasi ut voluptatem fugit quia, molestiae quidem doloribus. Iure libero cumque at nam, quidem illum culpa quasi? Neque, nisi mollitia! Magnam inventore delectus distinctio fugit officia excepturi quis?
        </p>
      </div>

    </div>
  )
}

export default About
