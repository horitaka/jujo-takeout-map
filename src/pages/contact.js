import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactDescription from '../components/ContactDescription'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <PageTitle>お問い合わせ</PageTitle>
        <ContactDescription>掲載店舗の追加や訂正がございましたら、こちらよりお問い合わせください。</ContactDescription>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
