import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/layout"

const AboutMe = () => {
    return(
        <Layout>
            <h1>About Me</h1>
            <p><Link to="/" >Take me home</Link></p>
        </Layout>   
    )
}

export default AboutMe