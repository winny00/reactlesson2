import React, { Component } from 'react'
import { handleComsumer } from '../AppContext'


// const handleComsumer = Cmp => (props) => {
//     return <Consumer> 
//         {ctx => <Cmp {...ctx} {...props} />} 
//     </Consumer>
// }

export default class TopBar extends Component {
    render() {
        const Top = handleComsumer(TopBarHandle);
        return <Top />
            
        // <Consumer>
        //     {
        //         ctx => <TopBarHandle {...ctx}/>
        //     }
        // </Consumer>
    }
}


function TopBarHandle(props) {
    return <div className="borderClass">{props.user.name}+ ___winny00</div>
}
