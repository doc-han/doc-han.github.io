import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { kebabCase } from 'lodash'
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    const style = {
      display: 'inline-block'
    }
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    const postTags = post.tags.map((tag)=>{
      return <Link className="tag" to={`/tags/${kebabCase(tag)}`} key={tag}>{tag}</Link>
    })
    const share = {
      whatsapp: `https://wa.me/?text=${config.siteUrl}${slug}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${config.siteUrl}${slug}`,
      twitter: `https://twitter.com/intent/tweet?text=${config.siteUrl}${slug}`
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} - ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="poster">
            <div class="small">title: <b><i>{post.title}</i></b></div>
            <div class="small">tags: <i className="tags" style={style}>{postTags}</i></div>
            <div class="small">date: <i>{post.date}</i></div>
            <div class="small">share: <i> <a href={share.twitter} target="_blank">Twitter</a>, <a href={share.facebook} target="_blank">FaceBook</a>, <a href={share.whatsapp} target="_blank">WhatsApp</a> </i></div>
            <br/><br/>
            <div className="cover_img">
              <img src={post.cover} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
