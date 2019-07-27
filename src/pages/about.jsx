import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About - ${config.siteTitle}`} />
          <About />
          <h2>Things I know</h2>
          <ol>
            <li>
              HTML, CSS, JavaScript, PHP & C++
            </li>
            <li>
              Using Sass
            </li>
            <li>
              Git, NPM & Github
            </li>
            <li>
              Grunt: Task Runner & WebPack: Module Bundler
            </li>
            <li>
              Vue, React & Gatsby
            </li>
            <li>
              ElectronJS
            </li>
            <li>
              NodeJS & Express
            </li>
            <li>
              Sort & Search Algorithms
            </li>
            <li>
              Data Structures
            </li>
            <li>
              MySql & Mongo
            </li>
          </ol>
          <h2>Things I want to know</h2>
          <ol>
            <li>
              Docker
            </li>
            <li>
              AWS
            </li>
            <li>
              React Native
            </li>
            <li>
              Networking
            </li>
            <li>
              MobX/Redux
            </li>
            <li>
              Sockets
            </li>
            <li>
              GraphQL
            </li>
            <li>
              Data Analysis
            </li>
            <li>
              Building Wordpress themes & plugins
            </li>
          </ol>
        </div>
        
      </Layout>
    );
  }
}

export default AboutPage;
