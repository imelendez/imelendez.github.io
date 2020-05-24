import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import indexStyles from './index.module.scss'

const IndexPage = () =>{
    return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.gridContainer}>
  <div className={indexStyles.gridItem}><h1>Hello world!</h1>
      <p>
        Passionate web application developer. 
      </p>

      <p> Languages and Technologies: C++, Python, Javascript, SQL<br/> React, Django, Axios, Git, LAMP, Jamstack</p></div>
  <div className={indexStyles.gridItem}>Photo</div>
  
</div>
    </Layout>
    )
  }

export default IndexPage