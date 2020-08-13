import React from 'react'
import styled from '@emotion/styled'

const Title = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 2em auto;
  font-size: 1em;
  text-transform: capitalize;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-align: left;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageTitle = props => {
  return <Title>{props.children}</Title>
}

export default PageTitle
