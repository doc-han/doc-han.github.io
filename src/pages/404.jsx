import React from 'react'
import Layout from '../layout'
import errorImg from '../../static/logos/error.png'

class FOF extends React.Component {
    render(){
        const style = {
            textAlign: 'center'
        }
        return (
            <Layout>
                <div style={style}>
                    <img src={errorImg} alt=""/>
                    <p>I don't remember writing this page!</p>
                </div>
            </Layout>
        )
    }
}

export default FOF;

