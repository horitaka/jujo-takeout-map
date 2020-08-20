import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Marker, Popup } from 'react-leaflet'

const PopupContainer = styled.div`
  width: 300px;
  height: 200px;
`

const MapMapker = props => {
  const { position, shop, link, img } = props

  return (
    <Marker position={position}>
      <Popup>
        <PopupContainer>
          <Link to={link}>
            {shop} <br /> <img src={img} />
          </Link>
        </PopupContainer>
      </Popup>
    </Marker>
  )
}

export default MapMapker