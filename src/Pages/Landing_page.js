import React from 'react'
import Next from '../Components/NextButton/Next'
import ButtonImage from './../Assets/next.png'
import './Pages.scss'

/**
* @author
* @function LandingPage
**/

const LandingPage = (props) => {
  return (
    <div className='home_bg'>
      <div id='next_btn_holder'>
        <Next image={ButtonImage} class='orange-btn' link='/educational-video' />
      </div>
      <div id='landing_wrapping'>
        <div>
          <h1 className='intro_txt'>LEAVE THE WEEK BEHIND</h1>
          <div id='finally_wrapper'>
            <h1 id='its_friday' className='intro_txt'>IT'S FINALLY</h1>
            <div id='orange_placeholder'></div>
            <h1 id='saturday'>SATURDAY</h1>
          </div>
        </div>
      </div>


    </div>

  )

}

export default LandingPage