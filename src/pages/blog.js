import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import Layout from "../layouts/layout"
import blogStyles from './blog.module.scss'
import Head from "../components/head"

const Blog = () => {
    const data  = useStaticQuery(graphql`
    query{
      allContentfulPost (sort:{fields: publishedDate, order:  DESC}){
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
      }`)
      console.log(data);
    return(
        <Layout>
          <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulPost.edges.map((edge)=>{
                    return(
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate }</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog