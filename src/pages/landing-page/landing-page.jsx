import React from 'react'
import './landing-page.css'
import Banner from '../../assets/mobile-banner.jpg'
import { Categories } from '../../components/categories/categories'
import {Card} from '../../components/card/card'

const LandingPage = () => {
  return (
    <>
    <div class="poster-container">
      <img class="poster display-flex-center responsive" src={Banner}/>
      <a href="#" class="links primary-link banner-button">Shop now</a>
    </div>
    <div>
      <h2 className='category-head'>Categories</h2>
      <div className='four-grid-container'>
        <div className='grid-item'>
         <Categories/>
        </div>
      </div>
    </div>
    <div class="flex-center flex-row">
      <h1>Top products</h1>
      <div className='grid-container'>
        <div className='grid-item'>
             <Card/>
        </div>
        </div>
    </div>
    </>
  )
}

export  {LandingPage}