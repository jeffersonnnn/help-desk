import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 120px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 120px;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "accept.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <LogoWrap>

    </LogoWrap>
  )
}

export default Image
