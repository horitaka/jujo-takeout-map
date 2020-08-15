import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

const Divider = styled.hr`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 1.5rem auto;
`

export default Divider