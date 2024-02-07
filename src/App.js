import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [weight,setWeight] = useState()
  const [height,setHeight] = useState()
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')

  let calcBmi=(e)=>{

    e.preventDefault()

    if(weight===0 || height===0){
      alert("Enter a valid number")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You Are Underweight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You Are Healthy!")
      }
      else{
        setMessage("You Are Overweight")
      }
    }
  }

  let reload =()=>{
    window.location.reload()
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
      </div>

      <form onSubmit={calcBmi}>

        <div>
          <label>Weight(lbs)</label>
          <input type="text"
           placeholder='Enter Your Weight'
           value={weight}
           onChange={(e)=>setWeight(e.target.value)}
           />-
        </div>

        <div>
          <label>Height(inch)</label>
          <input type="text"
           placeholder='Enter Your Height'
           value={height}
           onChange={(e)=>setHeight(e.target.value)}
           />
        </div>

        <div>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
          <button className='ReloadBtn' type='reset' onClick={reload}>
            Reload
          </button>
        </div>

        <div className='output'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>

      </form>

    </div>
  )
}

export default App

