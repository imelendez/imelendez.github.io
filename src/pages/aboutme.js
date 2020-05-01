import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/layout"
import Head from "../components/head"

const AboutMe = () => {
    return(
        <Layout>
            <Head title="About Me" />
            <h1>About Me</h1>
            <p><Link to="/" >Take me home</Link></p>
        </Layout>   
    )
}

export default AboutMe