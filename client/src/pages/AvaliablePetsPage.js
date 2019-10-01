import React, { Component } from 'react'
import { CardColumns, Container, Row } from 'react-bootstrap'

import PetCard from '../components/PetCard'
import MainAdvert from '../components//MainAdvertisment'
import LatestNewsCluster from '../components/latestNews'

/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class AvaliablePetsPage extends Component {
  state = {
    pets: []
  }
  /**
   * gettingData()
   */
  gettingData = () => {
    fetch('/api/findAll')
      .then(response => response.json())
      .then(data => this.setState({ pets: data }))
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    this.gettingData()
  }
  /**
   *
   * Render
   *
   */
  renderPets = petsArray => {
    let _petsElements = petsArray.map(petInfo => {
      // Each Pet available in the JSON will be
      // Added as <PetCard> element in _booksElements array
      return (
        <PetCard
   //       key={petInfo.petId}
    //      id={petInfo.petId}
          petName={petInfo.title}
          description={petInfo.description}
          urlToImage={petInfo.urlToImage}
          
          
        />
      )
    })
    // Return Array of <PetCard> elements
    return _petsElements
  }
  render () {
    return (
      <>
        <h1 className='text-center my-5'>Top headlines</h1>
       <div  className='text-center my-5'><MainAdvert/>
       </div> 
        <Row className='mb-5'>
          <Container className='container-fluid mb-5'>
            <CardColumns>{this.renderPets(this.state.pets)}</CardColumns>
          </Container>
        </Row>

        <hr className='container'></hr>
                <LatestNewsCluster/>
      </>
    )
  }
}

export default AvaliablePetsPage
