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
          <p>
        Hi,I'm Lin Hsing Jung.</p><p>A designer work in Osaka,Japan.</p>
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Always think 'outside the box'.</figcaption>
          </figure>
          <h3 id="dynamic-styles">About me</h3>
          <p>1994年　台湾台南市生まれ。</p>
          <p>2017年日本京都工芸繊維大学デザイン経営学部で留学プログラム修了。 2018年台湾大同大学大学院インダストリアルデザイン学専攻修士課程修了。</p>
          <p>台湾のデザイン会社事務所に1年勤めた後、自分に新たな環境を挑戦したいと思い、2019年に日本へ。
アパレル業界を経て、大阪梅田でデザイナーとして働いています。</p>
<p>趣味は、日常中の非日常を発見、色々な出会いを楽しむこと。 最近の楽しみは季節ごとの食材での料理作り。</p>
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
