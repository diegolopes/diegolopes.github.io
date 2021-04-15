import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  const postlist = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout >
        <Header />

        <div className="project-list container text-center">
          <h2>Projetos open source</h2>
          <hr />
          <div className="row mb-3">
          <div className="col-md-6">
            <a href="https://github.com/diegolopes/gitcord" className="card border-dark mb-3">
                <div className="card-header d-none">Projeto</div>
                <div className="card-body text-dark">
                  <strong className="d-inline-block mb-2 text-success">#open-source</strong>
                  <h5 className="card-title">gitcord</h5>
                  <p className="card-text">Um bot que pesquisa por nomes de usuário do Github, que pode ser usado em servidores do discord.</p>
                </div>
              </a>
            </div> 
            <div className="col-md-6">
              <a href="https://github.com/diegolopes/pergunte-me" className="card border-dark mb-3">
                <div className="card-header d-none">Projeto</div>
                <div className="card-body text-dark">
                  <strong className="d-inline-block mb-2 text-success">#open-source</strong>
                  <h5 className="card-title">Pergunte-me</h5>
                  <p className="card-text">Um simples app que responde perguntas com verdadeiro ou falso, feito com Ionic 3.</p>
                </div>
              </a>
            </div>
          </div>
          <a className="mx-auto mt-5" href="https://github.com/diegolopes">Ver todos os projetos</a> 
        </div>
        <div className="post-list container mt-5">
          <h2>Artigos e etc</h2>
          <hr />
          <ul className="post-list">
            <div className="row">
              {
                postlist.map(post => (
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <Img
                        className="card-img-top img-post"
                        fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
                      />
                      <div className="card-img-overlay post-img-overlay">
                        <strong className="d-inline-block mb-2 text-success">#{post.node.frontmatter.tag}</strong>
                        <h5 className="mb-0 post-card-title">{post.node.frontmatter.title}</h5>
                        <small className="mb-1 text-muted">{post.date}</small>
                        <div className="post-text"> {post.node.excerpt}... </div>
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