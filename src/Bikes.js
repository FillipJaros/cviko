import React from 'react'
import {useState} from "react" 
import TotalPrice from './TotalPrice'

function Bikes({ bikes }) {

    const [price, setPrice] = useState(500)
    const [days, setDays] = useState(5)
    const [extra, setExtra] = useState(0)

    let total = price * days
    console.log({total});
    return (
        <div>
            <select onChange={(e) => setPrice(e.target.value)}>
                {bikes.map((bike) => (
                    <option value={bike.price}>{bike.name}</option>
                ))}
            </select>
            <select onChange={(e) => setDays(e.target.value)}>
                <option value="5" defaultChecked>5 dnu</option>
                <option value="7">7 dni</option>
                <option value="14">14 dni</option>
                <option value="30">30 dni</option>
            </select>
            <hr />
            <div>
                cyklonosic stresni <input type="radio" value="5" name="extra" onChange={(e) => setExtra(e.target.value)}/><br />
                cyklonosič na tažné zařízení <input type="radio" value="10" name="extra" onChange={(e) => setExtra(e.target.value)}/><br />
                není třeba cyklonosič <input type="radio" value="0" name="extra" defaultChecked="true" onChange={(e) => setExtra(e.target.value)}/>
            </div>
            <hr />

            <TotalPrice total={total} extra={extra}/>
        </div>
    )
}

export default Bikes
