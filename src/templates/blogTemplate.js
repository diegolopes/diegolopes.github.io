import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import CustomNavbar from "../components/navbar"
import Layout from "../components/layout"
import '../components/darkmode.css'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div>
      <Layout>
      <div className="container blog-post mt-3">
      <header>
      <div className="row">
          <div className="col-md-7">
              <small>{ frontmatter.date }</small>
              <h1> { frontmatter.title }</h1>
              <p className="view">autor: Diego Lopes</p> 
              <small>tags: <em>{ frontmatter.tag }</em></small>
          </div>
          <div className="col-md-5">
          <Img fluid={ featuredImgFluid } /> 

          </div>

      </div>
      </header>
      <hr/>
        <div
          className="blog-post-content" 
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
        tag
        featuredImage {
          childImageSharp {
            fluid( quality: 100 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        
      }
    }
  }
`