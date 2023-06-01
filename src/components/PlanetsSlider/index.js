/* eslint-disable import/no-extraneous-dependencies */
import Slider from 'react-slick'
import {Component} from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'
import PlaneItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    const renderTimelineCard = item => (
      <PlaneItem key={item.id} projectDetails={item} />
    )

    console.log(planetsList)
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container">
        <div data-testid="planets" className="pla">
          <h1 className="h1">PLANETS</h1>
        </div>
        <div>
          <Slider {...settings} slidesToScroll={2}>
            {planetsList.map(eachItem => (
              <div>{renderTimelineCard(eachItem)}</div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
