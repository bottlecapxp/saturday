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
            background: `url(${props.image}) no-repeat center center`,
            backgroundSize: 'contain',
            border: 'none'
        },
        link: ''
    })

  return(
    <button onClick={()=>{history.push(props.link)}} style={background.style} className='next_btn'></button>
   )

 }

export default Next