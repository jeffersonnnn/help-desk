import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Sidebar from '../sidebar'
const Container = styled.div`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
display: flex;
flex-direction: column;
height: 100vh;
overflow: auto;
`
const Content = styled.div`
  display: flex;
`
const Main = styled.div`
`

const Chrome = ({ children, header, footer }) => (
  <Container>
      {header}
      <Content>
      <Sidebar />
      <Main>
        {children}
      </Main>
      </Content>
  </Container>
)
Chrome.propTypes = {
  children: PropTypes.node,
}
export default Chrome