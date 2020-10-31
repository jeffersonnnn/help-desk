import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "remitalogo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
)
}

export default Logo
