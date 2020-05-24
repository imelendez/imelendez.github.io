import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"
import Head from "../components/head"
import linkUpStyles from './linkup.module.scss'
// import Img from "gatsby-image"

// const query = graphql`
//   query {
//     file(relativePath: { eq: "images/ms-icon-310x310.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Linkup = () =>{
    return (
    <Layout>
      <Head title="Home" />
      <div className={linkUpStyles.gridContainer}>
      <div className={linkUpStyles.gridItem}>Image
      {/* <Img
        fluid={data.file.childImageSharp.fluid}
        alt="IsmaelTechNow logo"
      /> */}
      </div>
  <div className={linkUpStyles.gridItem}><a href="mailto:hello@ismaeltechnow.com">email</a>
</div>
  <div className={linkUpStyles.gridItem}>facebook twitter instagram linkedin</div>
  <div className={linkUpStyles.gridItem}>
      <a href="http://www.registertexas.com/" rel="noreferrer" target="_blank" >
      Texas: Check If You're Registerd To Vote or Register Online</a></div>
  <div className={linkUpStyles.gridItem}>
  <Link to="/blog">Blog</Link>
  </div>
  
  <div className={linkUpStyles.gridItem}>6</div>
  <div className={linkUpStyles.gridItem}>7</div>
  <div className={linkUpStyles.gridItem}>8</div>
  <div className={linkUpStyles.gridItem}>9</div>
</div>
    </Layout>
    )
  }

export default Linkup