import React, { Component } from 'react'
import TopBar from '../components/TopBar'

export default class Layout extends Component {
    componentDidMount() {
        const {title='商城'} = this.props;
        document.title = title
    }
    render() {
        const {children,showTopBar} = this.props;
        const arr = [];
        if(children.$$typeof) {
            arr.push(children)
        } else {
            // 具名
            for (const item in children) {
                arr.push(children[item])
            }
        }
        // console.log(this.props)
        return (
            <div>
                {
                    showTopBar && <TopBar />
                }
                {/* {children.btn}
                {children.txt} */}
                {
                    arr.map((item,index)=>{
                    return <React.Fragment key={index}>{item}</React.Fragment>
                    })
                }
            </div>
        )
    }
}
