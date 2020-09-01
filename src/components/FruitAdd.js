import React,{useState} from 'react'

export default function FruitAdd({addFruit}) {
    const [name,setName] = useState('')
    return (
        <div>
            <input  value={name} onChange={event=>setName(event.target.value)}/>
            <button onClick={()=>addFruit(name)}>add</button>
        </div>
    )
}