import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PageShopMap from '../components/PageShopMap'
import PageShopInfo from '../components/PageShopInfo'
import ShareButtons from '../components/ShareButtons'
import Divider from '../components/Divider'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    slug,
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags,
    address,
    location,
    phoneNumber,
    openingHours,
    homepage,
    tabelog,
    googleMapUrl,
  } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
      <Hero title={title} image={heroImage} height={'50vh'} />
      <Container>
        {tags && <TagList tags={tags} basePath={basePath} />}
        <PostDetails
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />
        <PageShopMap location={location} googleMapUrl={googleMapUrl.googleMapUrl} />
        <Divider />
        <PageShopInfo shop={title} address={address} location={location} phoneNumber={phoneNumber} openingHours={openingHours} homepage={homepage} tabelog={tabelog} />
        <ShareButtons shop={title} path={slug} />
      </Container>
      <PostLinks previous={previous} next={next} basePath={basePath} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
      address
      location {
        lat
        lon
      }
      phoneNumber
      openingHours
      homepage
      tabelog
      googleMapUrl {
        googleMapUrl
      }
    }
  }
`

export default PostTemplate
