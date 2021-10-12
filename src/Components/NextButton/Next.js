import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Next.scss'

/**
* @author
* @function Next
**/

const Next = (props) => {
    const history = useHistory()
    // Take two props - image and link
    const [background] = useState({
        style: { 
            backgroundColor: '#5E643E',
            border: 'none', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            // background: `url(${props.image}) no-repeat center center`,
            // backgroundSize: 'contain',
           
        },
        link: ''
    })

  return(
    <button onClick={()=>{history.push(props.link)}} style={background.style} className={`next_btn ${props.class}`}>NEXT <img id='next_image' src={props.image} alt='' /></button>
   )

 }

export default Next