import React, {useState} from 'react'

const initialFormValues = {
    day: '',
    month: '',
    year: ''
}



function DateForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = (e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
    // props.history.push('/DatePage')
  }
  
  return (
      <div>
        <h3>Enter your Date of Birth</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="number" 
              name="day" 
              placeholder='Day'
              value={formValues.day} 
              onChange={handleChange}
            />
            <label type='text'>Choose a Month:</label>
              <input type='text' name='month' list="daysofmonth" value={formValues.id} onChange={handleChange} id='month'/>
                  <datalist id='daysofmonth' >
                <option value='January'></option>
                <option value='February'></option>
                <option value='March'></option>
                <option value='April'></option>
                <option value='May'></option>
                <option value='June'></option> 
                <option value='July'></option>
                <option value='August'></option> 
                <option value='September'></option>
                <option value='October'></option> 
                <option value='November'></option>
                <option value='December'></option>
                </datalist> 
    
            <input 
              type="number" 
              name="year" 
              placeholder="Year" 
              value={formValues.year} 
              onChange={handleChange}
            />
            <button>ENTER</button>
          </form >
      </div>
    )
}

export default DateForm
