import React,{useReducer,useEffect} from 'react'
import FruitList from '../components/FruitList';
import FruitAdd from '../components/FruitAdd';

function fruitReducer(state=[],action) {
    switch (action.type) {
        case 'replace':

        case 'init':
            return [...action.payload]
            break;
        case 'add':
            return [...state,action.payload]
            break;
        default:
            return state
            break;
    }
}
export default function UseReducer() {
    const [fruits,dispatch] = useReducer(fruitReducer,[]);
    useEffect(() => {
        // effect
        setTimeout(()=>{
            dispatch({
                type:'init',
                payload:['apple','banana','ios','android']
            })
        },2000)
        return () => {
            // cleanup
        }
    }, [])
    return (
        <div>
            <h1>UseReducerPage</h1>
            <FruitAdd addFruit={name=>dispatch({type:'add',payload:name})}/>

            <FruitList 
            fruits={fruits} 
            setFruits={newList=>dispatch({type:'replace',payload:newList})}/>
        </div>
    )
}
