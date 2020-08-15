import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

const PageShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 1rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  // a {
  //   transition: 0.2s;
  //   color: ${props => props.theme.colors.text};
  //   &:hover {
  //     color: ${props => props.theme.colors.highlight};
  //   }
  // }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 0 1rem 0;
`

const Label = styled.div`
  flex: 1 0 0;
  line-height: 1.5rem;
`

const ItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3 0 0;
`

const ItemContent = styled.div`
  flex: 1 0 0;
  line-height: 1.5rem;
`

const Link = styled.a`
  flex: 1 0 0;
  line-height: 1.5rem;
  cursor: pointer;
  transition: 0.2s;
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  text-decoration: none;
`

// const Item = props => {
//   const { label, itemBody, link } = props

//   if (!itemBody) {
//     return null
//   }

//   const itemBodyElement = Array.isArray(itemBody)
//     ? itemBody.map((item, index) => <div key={index}>{item}<br /></div>)
//     : itemBody

//   return (
//     <ItemWrapper>
//       <Label> {label}</Label>
//       {link
//         ? <ItemLink href={itemBody} target="_blank" rel="noopener noreferrer">{itemBody}</ItemLink>
//         : <ItemBody>{itemBodyElement}</ItemBody>
//       }
//     </ItemWrapper>
//   )
// }

const Item = props => {
  const { label, itemContent, link } = props

  if (!itemContent) {
    return null
  }

  return (
    <ItemWrapper>
      <Label>{label}</Label>
      <ItemContentContainer>
        {
          Array.isArray(itemContent)
            ? itemContent.map((item, index) => <ItemContent key={index}>{item}</ItemContent>)
            : <ItemContent>{itemContent}</ItemContent>
        }
      </ItemContentContainer>
    </ItemWrapper>
  )
}

const ItemLink = props => {
  const { label, links } = props

  if (!links || links.length === 0) {
    return null
  }

  return (
    <ItemWrapper>
      <Label>{label}</Label>
      <ItemContentContainer>
        {
          links.map((link) => <Link href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">{link.text}</Link>)
        }
      </ItemContentContainer>
    </ItemWrapper >
  )
}


const PageShopInfo = props => {
  const { address, phoneNumber, openingHours, homepage, tabelog } = props

  const links = []
  if (homepage) {
    links.push({ text: 'ホームページ', url: homepage })
  }
  if (tabelog) {
    links.push({ text: '食べログ', url: tabelog })
  }

  return (
    <PageShopInfoContainer>
      <Item label='住所' itemContent={address} />
      <Item label='電話番号' itemContent={phoneNumber} />
      <Item label='営業時間' itemContent={openingHours} />
      <ItemLink label='リンク' links={links} />
    </PageShopInfoContainer>
  )
}

export default PageShopInfo
