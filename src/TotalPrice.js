import React from 'react'
import {useState} from "react" 

function TotalPrice({total, extra}) {

    const [bInput, setBInput] = useState(0)
    let nosicExtra = (total * extra) /100
    const [budgetOutput, setBI] = useState("")

    const onClick = () =>{

        if (parseInt(bInput) > (total + nosicExtra)) {

            setBI("Rozpocet je vyssi nez cena")
        }
        else{
            setBI("Rozpocet je nizsi nez cena")
        }
    } 

    

    return (
        <div>
            <h3>Celkova cena: {total + nosicExtra},-</h3>
            Zadej rozpocet: <input type="text" className="budgetInput" onChange={(e) => setBInput(e.target.value)}/>
            <button onClick={onClick}>send</button>
            <hr />
            <h4>{budgetOutput}</h4>
        </div>
    )
}

export default TotalPrice
