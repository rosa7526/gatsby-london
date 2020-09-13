import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Design skills"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />


<article className="post-content page-template no-image">
        <div className="post-content-body">
    

          <h2 id="buttons">Graphic Design</h2>

          <ul className="actions fit">
            <li>
              <a href="https://rosaportfoliodemo-1.netlify.app/get-fruity/" className="button primary fit">
                Adobe Illustrator
              </a>
            </li>
            <li>
            
              <a href="#https://rosaportfoliodemo-1.netlify.app/all-spikes/" className="button fit">
              Adobe Photoshop
              </a>
            </li>
            <li>
              <a href="https://rosaportfoliodemo-1.netlify.app/all-spikes/" className="button primary fit">
              Adobe Lightroom
              </a>
            </li>
          </ul>
          <h2 id="buttons">Motion Design</h2>
          <ul className="actions fit">
          <li>
              <a href="https://rosaportfoliodemo-1.netlify.app/hello-world/" className="button primary fit">
              Adobe After Effect
              </a>
            </li>
          </ul> 
          <h2 id="buttons">Industrial Design</h2>

          <ul className="actions fit">
          
          <li>
              <a href="https://rosaportfoliodemo-1.netlify.app/clean-lines/" className="button primary fit">
              Rhinoceros
              </a>
            </li>
            <li>
              <a href="#https://rosaportfoliodemo-1.netlify.app/green/" className="button fit">
                Alias
              </a>
            </li>
          </ul>
          <h2 id="buttons">Web Design</h2>

<ul className="actions fit">
  <li>
    <a href="https://rosaportfoliodemo-1.netlify.app/its-all-blue/#" className="button primary fit">
      Wordpress
    </a>
  </li>
  <li>
  
    <a href="#" className="button fit">
    GitHub
    </a>
  </li>
  <li>
    <a href="#" className="button primary fit">
    Netlify
    </a>
  </li>

<li>
  <a href="https://rosaportfoliodemo-1.netlify.app/hello-world/#" className="button fit">
  Adobe XD
  </a>
</li>
</ul>
<h2 id="buttons">And More++</h2> 
<ul className="actions fit">
<li>
    <a href="#" className="button primary fit">
    Stay Curious
    </a>
  </li>
</ul>
          <hr />
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
