import React from 'react'
import Card from './Card'
import './index.css'
import Sdata from "./container"
import Header from './Header'


const App = ()=>(
  <>
    <Header/>
    {Sdata.map((val)=> (
    <Card 
      key={val.id}
      sname= {val.name}
      imgsrc={val.image}
      title= {val.title}
      link=  {val.link}
   />
  ))}
  </>
)

export default App

