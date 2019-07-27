import React from 'react'
import { graphql, Link } from 'gatsby'
import _, {kebabCase} from 'lodash'
import PostListing from '../components/PostListing'
import Layout from '../layout'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

export default class Articles extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tags: props.data.tags.group,
            activeTags: new Set(),
            posts: props.data.all.edges,
            filteredPosts: props.data.all.edges,
            searchTerm: ''
        }
        this.filterPosts();
    }
    tagClick = (ev)=>{
      let elem = ev.target;
        if(elem.classList.contains("active")){
          //turn it off
          elem.classList.remove("active")
          const newTags = this.state.activeTags;
          newTags.delete(elem.innerText.split("-").join(" "));
          this.setState({activeTags: newTags})
        }else{
          //turn it on
          elem.classList.add("active")
          const newTags = this.state.activeTags;
          newTags.add(elem.innerText.split("-").join(" "));
          this.setState({activeTags: newTags})
        }
        this.filterPosts();
    }
    handleChange = (ev) => {
      let {value} = ev.target;
      this.setState({searchTerm: value})
      this.filterPosts()
    }
    filterPosts = () => {
      const filtered = this.state.posts.filter(post=>{
        if(_.intersection(Array.from(this.state.activeTags), post.node.frontmatter.tags) == false ||
        !post.node.frontmatter.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          return false;
        return true;
      })
      this.setState({filteredPosts: filtered})
    }
    render(){
        let {filteredPosts} = this.state;
        const tagList = this.state.tags.map(i=>{
            return <span onClick={(ev)=> this.tagClick(ev)} className="tag small">{kebabCase(i.fieldValue)}</span>
        });
        return (
        <Layout>
          <Helmet title={`Articles - ${config.siteTitle}`} />
        <h2>Tags</h2>
        <div className="tags">{ tagList }</div>
        <br />
        <input onChange={async (ev)=> await this.handleChange(ev)} class="search" value={this.state.searchTerm} type="text" placeholder="Search for article" />
        <h3>{this.state.filteredPosts.length} Posts available</h3>
        <PostListing postEdges={filteredPosts} />
        </Layout>
        )
    }
}

export const query = graphql`
    query articlesQuery {
        all: allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                  date
                }
                excerpt
                timeToRead
                frontmatter {
                  title
                  tags
                  date
                }
              }
            }
        }
        tags:allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
    }
`;