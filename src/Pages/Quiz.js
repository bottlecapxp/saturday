import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not. 
// we're nor going to call and random search function on the old array for another question. 

const Quiz = (props) => {
    var completed = []
    var points = 0
    const question = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const questionaire_limit = 5
    const list_of_questions = ['Saturday 7G Sweet & Sour Ready-to-Roll:', 'Saturday 7G Sweet & Sour Ready-to-Roll is coming in what THC%?', "When speaking about the 1G Blood Orange roduct, Id start with:", "I’d Recommend Saturday Blood Orange to a shopper in a situation where", '5. I’d Recommend Saturday 7G Sweet & Sour Ready To Roll to a shopper in a situation where:']
    const history = useHistory()



    useEffect(() => {
        randList()
    }, [])
    
    const randList = () => {
        gsap.to('.green_bg', {backgroundColor: '#535938', duration: 0})
        var newList = list_of_questions

        if (completed.length >= questionaire_limit) {
            localStorage.setItem('points', points)
            setTimeout(()=>{
                history.push('/')
            }, 500)
           
        } else {

            let random = Math.round(Math.random() * 4)
            const check_completed = completed.find(element => element == random)

            // For some reason zero is being ignored. That why it's in the conditional statement below. 
            if (check_completed || check_completed === 0) {
                randList()
            }
            else {
                completed.push(random)
                question.current.textContent = list_of_questions[random]
                console.log(completed)
                switch (random) {
                    case 0:
                        a.current.textContent = 'Is a Sativa Offering'
                        b.current.textContent = 'Is an Indica Offering'
                        c.current.textContent = 'Is a Hybrid Offering'
                        d.current.textContent = ''

                        break;
                    case 1:
                        a.current.textContent = '11%-15%'
                        b.current.textContent = '16%-20%'
                        c.current.textContent = '20%+'
                        d.current.textContent = ''

                        break;
                    case 2:
                        a.current.textContent = 'The Flavour'
                        b.current.textContent = 'The Value'
                        c.current.textContent = 'The Brand'
                        d.current.textContent = 'The Convenience of 510 Carts'

                        break;
                    case 3:
                        a.current.textContent = 'An experienced or occasional cannabis shopper who is seeking a smooth, high-THC joint-smoking experience and values the dollars in their pocket.'
                        b.current.textContent = 'A shopper who is new to cannabis or is re-entering the category after many years, and is looking for a balanced offering.'
                        c.current.textContent = 'An experienced or occasional smoker who is looking for a tasty, high-THC experience while they’re on-the-go that won’t break the bank'
                        d.current.textContent = 'An occasional smoker who is looking for edibles.'

                        break;
                    case 4:
                        a.current.textContent = 'An experienced or occasional cannabis shopper who is seeking a smooth, high-THC joint-smoking experience and values the dollars in their pocket.'
                        b.current.textContent = 'A shopper who is new to cannabis or is re-entering the category after many years, and is looking for a balanced offering.'
                        c.current.textContent = 'An experienced or occasional smoker who is looking for a tasty, high-THC experience while they’re on-the-go that won’t break the bank'
                        d.current.textContent = 'An occasional smoker who is looking for edibles.'
                        break;
                }
            }
        }
    }

    const selectved_answer = (selected_data) => { 
    gsap.to(`.${selected_data}`, {backgroundColor: 'black', duration: 0.5})
    console.log(`selected data: ${selected_data} Last_item in completed list: ${completed[completed.length -1]})`)
    
        switch(completed[completed.length -1]){
            case 0: 
            if(selected_data === 'a'){ a.current.textContent = 'Correct'; points++; console.log(`updated points: ${points}`)}
            else{ eval(selected_data).current.textContent = 'Correct'}
            break;

            case 1:
                if(selected_data === 'b'){ b.current.textContent = 'Correct'; points++; console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}

                break;
            case 2:
                if(selected_data === 'c'){ c.current.textContent = 'Correct'; points++; console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}

                break;
            case 3:
                if(selected_data === 'd'){ d.current.textContent = 'Correct'; points++; console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}

                break;
            case 4:
                if(selected_data === 'c'){ c.current.textContent = 'Correct'; points++; console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}
                break;
        }


    setTimeout(()=>{
        randList()
    }, 1500)
        

    }

    return (
        <div className='Prizing'>


            <div id='quiz_holder'>
                <div id='title_holder'>
                    <h2 ref={question}></h2>
                </div>
                <div id='answer_list'>
                    <div className='green_bg a' onClick={() => selectved_answer('a')}><p className='ans' ref={a}></p></div>
                    <div className='green_bg b' onClick={() => selectved_answer('b')}><p className='ans' ref={b}></p></div>
                    <div className='green_bg c' onClick={() => selectved_answer('c')}><p className='ans' ref={c}></p></div>
                    <div className='green_bg d' onClick={() => selectved_answer('d')}><p className='ans' ref={d}></p></div>
                </div>
            </div>
        </div>
    )

}

export default Quiz