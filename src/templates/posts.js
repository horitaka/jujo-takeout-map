import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import CardServiceLogo from '../components/CardServiceLogo'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import ShopListMap from '../components/ShopListMap'
import SEO from '../components/SEO'
import { startCase } from 'lodash'

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { humanPageNumber, basePath } = pageContext
  const isFirstPage = humanPageNumber === 1
  let featuredPost
  let ogImage
  const title = data.site.siteMetadata.title

  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
  try {
    ogImage = posts[0].node.heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO title={title} image={ogImage} />
      <Container>
        {isFirstPage ? (
          <>
            <CardList>
              <CardServiceLogo {...featuredPost} featured basePath={basePath} />
              {posts.slice(1).map(({ node: post }) => (
                <Card key={post.id} {...post} basePath={basePath} />
              ))}
            </CardList>
            {
              (typeof window !== 'undefined') && <ShopListMap posts={posts} basePath={basePath} />
            }
          </>
        ) : (
            <CardList>
              {posts.map(({ node: post }) => (
                <Card key={post.id} {...post} basePath={basePath} />
              ))}
            </CardList>
          )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          location {
            lat
            lon
          }
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
            mapThumbnail: resize(width: 300) {
              src
            }
          }
          metaDescription {
            metaDescription
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Posts
