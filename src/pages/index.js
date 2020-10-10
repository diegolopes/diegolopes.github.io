import React from "react"
import { Link } from "gatsby"
import PostList from '../components/postlist'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostList key={edge.node.id} post={edge.node} />)
  return (
    <>
     <Layout >
       <Header />
       <div>{Posts}</div>
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
            
          }
        }
      }
    }
  }
`