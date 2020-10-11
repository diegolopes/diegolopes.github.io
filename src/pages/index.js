import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Header from "../components/header";
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {

  const postlist = data.allMarkdownRemark.edges;
  console.log(postlist)

  return (
    <>
      <Layout >
        <Header />

        <div className="post-list container">
          <h2>Artigos, projetos e etc</h2>
          <hr/>
          <ul class="post-list">
            <div class="row">
              {
                postlist.map(post => (
                  <div class="col-md-6 mb-4">
                    <div class="card">
                      <Img
                        className="card-img-top img-post"
                        fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
                      />
                      <div class="card-img-overlay post-img-overlay">
                        <strong class="d-inline-block mb-2 text-success">#{post.node.frontmatter.tag}</strong>
                        <h5 class="mb-0 post-card-title">{post.node.frontmatter.title}</h5>
                        <small class="mb-1 text-muted">{post.date}</small>
                        <div class="post-text"> {post.node.excerpt}... </div>
                        <Link className="stretched-link" to={post.node.frontmatter.slug}>Continue lendo...</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </ul>
        </div>

      </Layout>
    </>
  )
}
export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tag
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`