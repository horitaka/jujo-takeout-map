import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Marker, Popup } from 'react-leaflet'

// const Link = styled.a`
// `

const MapMapker = props => {
  const { position, shop, link, img } = props

  return (
    <Marker position={position}>
      <Popup>
        <Link to={link}>
          {shop} <br /> Easily customizable.
        </Link>
      </Popup>
    </Marker>
  )
}

export default MapMapker