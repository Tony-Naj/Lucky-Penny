import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './DatePage.css'

function DatePage() {
    const [events, setEvents] = useState([])
    const [births, setBirths] = useState([])
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
   
    useEffect(() => {
    axios
    .get(`https://history.muffinlabs.com/date/${month}/${day}`)
    .then ((res) => {
       console.log('Events:', res)
       const entries = Object.entries(res.data)
       console.log(entries)
       console.log('newdata:', entries[2][1].Events)
       console.log('births:', entries[2][1].Births )
        setMonth(setDay(setEvents(entries[2][1].Events)))
        setBirths(entries[2][1].Births)
   })
   .catch(err => {
       console.log(err)
   })
    
   }, [])
   

    
    return (
        <div className='date-div'>
            <div className='events'>
                <h3>Events:</h3>
                {events.map((item, index) => (
                    <div key={index}>
                            <p>{item.year}: {item.text}</p>
            </div>   
                ))}
                <div className='births'>
                    <h3>Births:</h3>
                    {births.map((item1, index1) => (
                        <div key={index1}>
                            <p>{item1.year}: {item1.text}</p>
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
    )
}

export default DatePage
