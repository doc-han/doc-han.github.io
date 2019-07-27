import React from 'react'
import config from '../../data/SiteConfig'

export default class About extends React.Component {
    render(){
        return (
            <div class="author">
                <div className="deep bigger">Hi, I'm {config.userName}</div>
                {config.userDescription}
            </div>
        )
    }
}