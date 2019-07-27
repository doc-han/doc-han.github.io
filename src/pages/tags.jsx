import React from 'react'
import {graphql, Link} from 'gatsby'
import {kebabCase} from 'lodash'
import Layout from '../layout'

class Tags extends React.Component {
    render(){
        const tags = this.props.data.tags.group;
        const tagList = tags.map(tag=>{
            return <li><Link to={`/tags/${kebabCase(tag.fieldValue)}`}>{tag.fieldValue}</Link></li>
        })
        return (
            <Layout>
                <h2>All Tags</h2>
                <ul>
                    {tagList}
                </ul>
            </Layout>
        )
    }
}

export default Tags;

export const query = graphql`
    query tagQuery {
        tags:allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
        }
    }
`;