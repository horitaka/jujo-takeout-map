import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')


const MapContainer = styled.div`
  margin: 0 auto 1rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  height: 400px;
`

const PageShopMap = props => {
  const { location } = props

  const mapStyle = {
    width: '100%',
    height: '100%',
    frameBorder: '100%',
    border: 0,
  }

  const mapUrl = `https://maps.google.com/maps?output=embed&q=${location.lat},${location.lon}&t=m&hl=ja&z=16`
  return (
    <MapContainer>
      <iframe src={mapUrl} style={mapStyle} allowFullScreen=""></iframe>
    </MapContainer>
  )
}

export default PageShopMap