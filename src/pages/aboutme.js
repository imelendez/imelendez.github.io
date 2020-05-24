import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/layout"
import Head from "../components/head"


const AboutMe = () => {
    return(
        <Layout>
            <Head title="About Me" />
            <h2>Ismael Melendez</h2>
            <br/>
            <p>I am a software and web developer building technology to connect and inform people, so they are more engaged in democracy. 
                Let's create. <a href="mailto:hello@ismaeltechnow.com">Send email.</a> </p>
           <p> Languages and Technologies: C++, Python, Javascript, SQL<br/> React, Django, Axios, Git, LAMP, Jamstack</p>

            <p>Skills: Web Development | Social Media Marketing | Writing | Editing | Nonprofit Organizations | Public Speaking | Event Planning | Lobbying | Content creator and curator </p>
        </Layout>   
    )
}

export default AboutMe