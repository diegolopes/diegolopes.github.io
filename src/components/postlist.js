import React from "react"
import { Link } from "gatsby"

const PostList = ({ post }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
 return (
  <div>
      <Link to={post.frontmatter.slug}> 
        {post.frontmatter.title} ({post.frontmatter.date}))
      </Link>



    </div>


 )
}
export default PostList;

