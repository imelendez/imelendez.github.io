import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import Layout from "../layouts/layout"

const Blog = () => {
    const data  = useStaticQuery(graphql`
    query{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
      }`)
      console.log(data);
    return(
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>
                          <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date }</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog