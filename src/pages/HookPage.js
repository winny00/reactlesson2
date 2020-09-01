import React,{useState,useEffect} from 'react'
import FruitList from '../components/FruitList';
import FruitAdd from '../components/FruitAdd'

export default function HookPage() {
    //写法（定义） 变量(date)  设置变量(setDate) 约定以set开头
    const [counter,setCounter] = useState(0) // 设置初始值为0
    const [fruits,setFruits] = useState(['apple','banana'])
    const handleCounter = ()=>{
        setCounter(counter + 1)
    }
    return (
        <div>
            HookPage
            <p>{useClock().toLocaleTimeString()}</p>
            <div onClick={handleCounter}>{counter}</div>
            <FruitAdd addFruit={name=>setFruits([...fruits,name])}/>
            <FruitList fruits={fruits} setFruits={setFruits}/>
        </div>
    )
}

// 自定义Hook 必需 useXXX开头
function useClock() { 
    const [date,setDate] = useState(new Date()); // 设置初始值 new Date()
    useEffect(() => {
        // effect
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return () => {
            // cleanup 清除函数 ，当前组件销毁时执行的
            clearInterval(timer)
        }
    }, []) // 后面加[]表示不依赖全部参数，执行一次就完事

    return date
}
