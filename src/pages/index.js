import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"

const IndexPage = () =>{
    return (
    <Layout>
      <Head title="Home" />
      <h1>Hi! I'm building a fake Gatsby site!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
    )
  }

export default IndexPage