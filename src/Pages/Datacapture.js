import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

/**
* @author
* @function Datacapture
**/

const Datacapture = (props) => {
  let points = localStorage.getItem('points')
  const history = useHistory()

  // Push the contents of the the form to localstorage. 

  const on_submit = (e) => {
    e.preventDefault()
    history.push('/blood-orange')
  
    // console.log(`Fullname: ${e.target.fullname.value} | Email: ${e.target.email.value} | Company: ${e.target.store.value}`)

    // fetch("https://bottlecapdev.pythonanywhere.com/saturday", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //   'fullname': `${e.target.fullname.value}`,
    //   'email': `${e.target.email.value}`,
    //   'company': `${e.target.store.value}`,
    //   'points': points,
    //   })
    // }).then((resp) => resp.json())
    // .then((respr) =>{
    //   const status = respr.status
    //   if(parseInt(status) === 200){
    //     // history.push('/ThanksForEntry')
    //   }
      
    // })
  }

  return (
    <div className='Prizing'>

      {/* <div id='quiz_holder'>
        <div id='title_holder_contact'>
          <h2>{`CONGRATULATIONS! YOU GOT ${points}/5 ANSWERS CORRECT!`}</h2>
          <h4>Enter your contact info for a chance to win your Dirty-Laundry Collection!</h4>
        </div>
      </div> */}

      <form className='form_collection' onSubmit={on_submit}>
        <div className='labels'>
          <label htmlFor='fullname'>Full Name</label>
        </div>
        <input className='inputs' type='text' id='fullname' name='fullname' placeholder='Fullname'></input>
        <div className='labels'>
          <label htmlFor='email'>Email</label>
        </div>
        <input className='inputs' type='email' id='email' name='email'  placeholder='email'></input>
        <div className='labels'>
          <label htmlFor='store'>Store #</label>
        </div>
        <input className='inputs' type='text' id='store' name='store' placeholder='store'></input>
        <input type='submit' id='submit_btn' value='SUBMIT'></input>
      </form>
 
    </div>
  )

}

export default Datacapture