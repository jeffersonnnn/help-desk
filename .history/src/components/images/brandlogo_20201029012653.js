import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 120px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 120px;
  }
`

// const LogoWrap = styled.div`
//   margin: auto 0;
//   flex: 0 1 36px;

//   @media (max-width: 768px) and (orientation: landscape) {
//     flex: 0 1 25px;
//   }
// `

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "remitalogo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>  
)
}

export default Logo
