import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'


const ShareButtonsContainer = styled.div`
  margin: 0 auto 1rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const ShareButtonContainer = styled.span`
  margin: 0 1rem 0 0;
`


const ShareButtons = (props) => {
  const { shop, path } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )

  const url = `${site.siteMetadata.siteUrl}/${path}`;
  const title = `${site.siteMetadata.title} - ${shop}`;
  const iconSize = 40

  return (
    <ShareButtonsContainer>
      <ShareButtonContainer>
        <FacebookShareButton url={url}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
      </ShareButtonContainer>
      <ShareButtonContainer>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
      </ShareButtonContainer>
    </ShareButtonsContainer>
  );
}

export default ShareButtons