import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Sidebar from '../'
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`
const Chrome = ({ children }) => (
  <Container>
    {children}
  </Container>
)
Chrome.propTypes = {
  children: PropTypes.node,
}
export default Chrome