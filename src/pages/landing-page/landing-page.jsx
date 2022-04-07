import React, {useState,useEffect} from 'react'
import './landing-page.css'
import Banner from '../../assets/mobile-banner.jpg'
import { Categories } from '../../components/categories/categories'
import {Card} from '../../components/card/card'
import { useProduct } from '../../contexts/product-data-context'
import axios from "axios";
import { Link } from 'react-router-dom'



const LandingPage = () => {

  const {data}=useProduct();
  const topProducts= data.filter((item)=>item.topProduct)

  const[category,setCategory]=useState([])

    useEffect(()=>{
    const fetch=async()=>{
    const categoryData= await axios("/api/categories");
    console.log("categoryData",categoryData)
    setCategory(categoryData.data.categories)

     }
    fetch()},[])
  return (
    <>
    <div class="poster-container">
      <img class="poster display-flex-center responsive" src={Banner}/>
      <Link to="/product-listing" class="links primary-link banner-button">Shop now</Link>
    </div>
    <div>
      <h2 className='category-head'>Categories</h2>
      <div className='four-grid-container'>
        {category.map(item=>{
         return <div className='grid-item'>
                <Categories item={item} key={item._id}/>
                </div>
        })}
      </div>
    </div>
    <div class="flex-center flex-row">
      <h1>Top products</h1>
      <div className='grid-container'>
      
        
        {
        topProducts.map(product=>{
         return (<div className='grid-item'>
          <Card product={product} key={product._id}/>
          </div>)})
       }
        </div>
    </div>
    </>
  )
}

export  {LandingPage}