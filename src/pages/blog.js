import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import Layout from "../layouts/layout"

const Blog = () => {
    const data  = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                date
                title
              }
              html
              excerpt
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
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date }</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog