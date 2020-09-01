import React,{useContext} from 'react'
import { Context } from "../AppContext";
export default function UseContext() {
    const ctx = useContext(Context);
    console.log(ctx)
    return (
        <div>
            <h1>UseContext</h1>
            <p>{ctx.user.name}</p>
        </div>
    )
}
