import React from 'react'

export default function FruitList({fruits,setFruits}) {
    const delFruit = (delIndex)=>{
        const tem = [...fruits]
        tem.splice(delIndex,1)
        setFruits(tem)
    }
    return (
        <ul>
            {
                fruits.map((item,index)=>{
                    return <li key={index} onClick={()=>delFruit(index)}>{item}</li>
                }) 
            }
        </ul>
    )
}