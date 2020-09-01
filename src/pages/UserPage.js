import React, { Component } from 'react'
import Layout from './Layout'

export default class UserPage extends Component {
    render() {
        return (
            <Layout showTopBar={true} title="用户中心">
                <div>
                    <h1>UserPage米赚</h1>
                </div>
                {/* <!--具名插槽--> */}
                {/* {
                    {
                        btn: <button>click me</button>,
                        txt: '文案'
                    }
                } */}
            </Layout>
        )
    }
}
