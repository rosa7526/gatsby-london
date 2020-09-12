import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hi,I'm Lin Hsing Jung.A designer work in Osaka,Japan.
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Always think 'outside the box'.</figcaption>
          </figure>
          <h3 id="dynamic-styles">About me</h3>
          <p>
          Born in Taiwan ,Tainan in 1994.
Lin attended the international student exchange program of
 Kyoto Institute Of Technology from 2017 to 2018 . 
 In the same year she complete the Master's degree in 
 industrial design from Tatung University in Taipei Taiwan.
          </p>
          <p>
          With a degree in industrial design, 
          she has been work at a design studio in Taiwan for 1 year. 
          Since then , she moved to Osaka, Japan in 2019.
           After worked as a salesgirl at a clothing store for several 
           months ,with a resounding passion for design,
           she made her mind to keep going on her career as a designer.
          </p>
          <p>
          She enjoys all that the city life in Osaka , 
          and loves to be challenged to think 'outside the box', 
          and use creative and strategic ideas to explore, 
          learn and adapt.Outside of work, 
          her main passions are making healthy food with seasonal ingredient.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
