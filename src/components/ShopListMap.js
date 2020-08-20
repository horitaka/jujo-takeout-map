import React from 'react'
import styled from '@emotion/styled'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

import MapMarker from './MapMarker'
import MapMapker from './MapMarker';

// 2. mapのサイズを決める
const MapContainer = styled.div`
  width: 100%;
  height: 600px;
`


const ShopListMap = props => {
  const { posts, basePath } = props

  const position = [35.760255, 139.7222794]

  return (
    <MapContainer>
      <Map center={position} zoom={16}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          posts.map(post => {
            const location = post.node.location
            const shop = post.node.title
            const slug = post.node.slug
            const img = post.node.heroImage.mapThumbnail.src
            return (
              post.node.location &&
              <MapMapker key={post.node.id} position={[location.lat, location.lon]} shop={shop} img={img} link={`${basePath}/${slug}/`} />
            )
          })
        }
      </Map>

    </MapContainer>
  )
}

export default ShopListMap
