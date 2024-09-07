import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const params = useParams();
  return (
    <div>Details ID: {params.id}</div>
  )
}

export default Details