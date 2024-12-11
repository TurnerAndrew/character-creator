import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace, addModifiers } from '../../redux/reducers/characterReducer'
import axios from 'axios'

const ClassDetails = (props) => {
  let { className } = useParams()
  const { details, setDetails } = useState()

  console.log(className)

  // useEffect(() => {
  //   axios.get(`https://www.dnd5eapi.co/api/classes/${className.toLowerCase()}`)
  //   .then(res => setDetails(res.data))
  // })

  return (
    <div>ClassDetails</div>
  )
}

export default ClassDetails