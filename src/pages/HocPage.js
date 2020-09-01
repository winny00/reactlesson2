import React, { Component } from 'react'
/*
function Child(props) {
    return <div className="borderClass">Child---</div>
}
*/
// 写法1
// const foo = Cmp =>{
//     return props=>{
//         return <Cmp {...props}/>
//     }
// }
// 写法2
const foo = Cmp =>  props => {
    return <div className="borderClass"><Cmp {...props} /></div>
}
// 写法3 装饰器
// @foo
/*
class Child extends Component {
    render() {
        return <div className="borderClass">Child--装饰器-</div>
    }
}
*/
@foo
@foo
class Child extends Component {
  render() {
    return <div className="borderClass">CHild____good</div>;
  }
}
export default class HocPage extends Component {
    render() {
        // const Foo = foo(foo(Child));
        return (
            <div>
                <h1>HocPage</h1>
                {/* <Foo /> */}
                <Child />
            </div>
        )
    }
}
