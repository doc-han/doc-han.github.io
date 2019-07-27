import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'

export default class Header extends React.Component {
    render(){
        const links =  config.headLinks.map(i=>{
            return i.url.match('http') ? <a href={i.url}>{i.label}</a> : <Link to={i.url} key={i.label}>{i.label}</Link>
        })
        return (
            <div id="header">
                <div className="container">
                <Link className="site-nameLink" to="/">
                    <div className="site-name">
                        <img width="48" height="48" src={config.siteLogo} alt=""/> <div>{ config.siteTitle }</div>
                    </div>
                </Link>
                    <div>
                        { links }
                    </div>
                </div>
            </div>
        )
    }
}