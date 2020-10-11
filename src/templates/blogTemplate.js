import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import CustomNavbar from "../components/navbar"
import Layout from "../components/layout"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div>
      <Layout>
      <div className="container blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content" 
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Img fluid={featuredImgFluid} />
      </div>
      </Layout>
    </div>
  )  
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
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
`