

import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Style.css'

function Hero() {
  return (
    <section className='hero'>
        <Carousel>
            <Carousel.Item className='carousel-item1'>
               {/* <img src="https://img.freepik.com/free-photo/bunch-fashion-designer-working-atelier-with-color-palette_23-2148846701.jpg?ga=GA1.1.1879916801.1720642259&semt=ais_user" alt="" className="w-100 h-100" /> */}
               <Carousel.Caption>
                <h3 className='display-2 fw-bold'>First slide label</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit necessitatibus praesentium assumenda reiciendis excepturi esse saepe possimus harum, ullam magni eius dolorem, aperiam velit facere atque rerum ipsum nam?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2'>
                {/* <img src="https://img.freepik.com/free-photo/women-shopping-clothes_23-2148915546.jpg?ga=GA1.1.1879916801.1720642259&semt=ais_user" alt="" className="w-100" /> */}
                <Carousel.Caption>
                <h3 className='display-2 fw-bold'>First slide label</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit necessitatibus praesentium assumenda reiciendis excepturi esse saepe possimus harum, ullam magni eius dolorem, aperiam velit facere atque rerum ipsum nam?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3'>
                {/* <img src="https://img.freepik.com/free-photo/women-shopping-clothes_23-2148915546.jpg?ga=GA1.1.1879916801.1720642259&semt=ais_user" alt="" className="w-100" /> */}
                <Carousel.Caption>
                <h3 className='display-2 fw-bold'>First slide label</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit necessitatibus praesentium assumenda reiciendis excepturi esse saepe possimus harum, ullam magni eius dolorem, aperiam velit facere atque rerum ipsum nam?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item4'>
                <img src="https://img.freepik.com/free-photo/women-shopping-clothes_23-2148915546.jpg?ga=GA1.1.1879916801.1720642259&semt=ais_user" alt="" className="w-100" />
                <Carousel.Caption>
                <h3 className='display-2 fw-bold'>First slide label</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit necessitatibus praesentium assumenda reiciendis excepturi esse saepe possimus harum, ullam magni eius dolorem, aperiam velit facere atque rerum ipsum nam?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default Hero
