import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CiPizza, CiBurger, CiFries, CiCoffeeCup } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";

const FirstSectionSignup = ()=>{
    const [name, setName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const handleNext = ()=>{
        localStorage.setItem('signupInfo', JSON.stringify({name, email, phoneNumber}))
        navigate('../../signup/2')
    }
    return (
        <>
        <div className="signup-right">
        <CiPizza
          size={50}
          color="#fc8a06"
          style={{ position: "absolute", right: "50px", top: "100px" }}
        />
        <CiBurger
          size={50}
          color="#fc8a06"
          style={{ position: "absolute", left: "50px", top: "150px" }}
        />
        <CiFries
          size={50}
          color="#fc8a06"
          style={{ position: "absolute", left: "70px", bottom: "150px" }}
        />
        <CiCoffeeCup
          size={50}
          color="#fc8a06"
          style={{
            position: "absolute",
            right: "40px",
            bottom: "80px",
            transform: "rotate(30deg)",
          }}
        />
        <IoFastFoodOutline
          size={50}
          color="#fc8a06"
          style={{ position: "absolute", left: "230px", top: "80px" }}
        />
        <h1>Welcome, create your account</h1>
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e)=>e.preventDefault()}>
            <br/>
            <br/>
                <p>
                    It is our great pleasure to have<br/> you on board
                </p>
            <br/>
                <input type="text" placeholder="Enter your fullname" required onChange={(e)=>setName(e.target.value)}/>
            <br/>
                <input type="email" placeholder="Enter your Email" required onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
                <input type="tel" placeholder="Enter your phone number" required onChange={(e)=>setPhoneNumber(e.target.value)}/>
            <br/>
            <br/>
                <button onClick={handleNext}>Next</button>
                <br/>
                <p><small>Already have an account?</small> <b style={{color: '#2d88d4', cursor: 'pointer'}} onClick={()=>navigate('../../login')}>Login</b></p>
            <br/>
            <br/>
        </form>
        <br/>
        </div>
        <div className="signup-left">

        </div>
        </>
    )
}

export default FirstSectionSignup