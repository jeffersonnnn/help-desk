import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Image = () => {
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

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
}

export default Image
