import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SiteHeader from "../components/Header"
import About from "../components/About"
import "../styles/styles.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteHeader />
        <div id="body">
          <div className="container">
            { children }
          </div>
        </div>
      </div>
    );
  }
}
