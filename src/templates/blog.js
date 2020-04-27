import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query($slug: String!){
  contentfulPost(slug: {eq:$slug}){
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body{
      json
    }
  }
}`

const Blog = (props) => {
    return(
        <Layout>
            <h1>{props.data.contentfulPost.title}</h1>
            <p>{props.data.contentfulPost.publishedDate}</p>
             {documentToReactComponents(props.data.contentfulPost.body.json)}
        </Layout>
    )
}

export default Blog