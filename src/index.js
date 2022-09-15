import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



// import Card from './Card'
// import Sdata from "./container"
// console.log(Sdata[0].name);
// using probs to set own attrinbutes

// method-1
// ReactDOM.render(
//  <>
//     <h1>Best Netflix Web Series</h1>
//    <Card 
//   sname={Sdata[0].name}
//   imgsrc={Sdata[0].image}
//   title={Sdata[0].title}
//   link={Sdata[0].link}
//    />,
//     <Card 
//   sname={Sdata[1].name}
//   imgsrc={Sdata[1].image}
//   title={Sdata[1].title}
//   link={Sdata[1].link}
//    />,
//     <Card 
//   sname={Sdata[2].name}
//   imgsrc={Sdata[2].image}
//   title={Sdata[2].title}
//   link={Sdata[2].link}
//    />,
//     <Card 
//   sname={Sdata[3].name}
//   imgsrc={Sdata[3].image}
//   title={Sdata[3].title}
//   link={Sdata[3].link}
//    />,
//     <Card 
//   sname={Sdata[4].name}
//   imgsrc={Sdata[4].image}
//   title={Sdata[4].title}
//   link={Sdata[4].link}
//    />
//  </>,
//   document.getElementById('root')
// )

//======================================================
//Method-2

// import Card from './Card'
// import Sdata from "./container"

// by using map method
// function ncards(val){
//   return(
//     <Card 
//       sname= {val.name}
//       imgsrc={val.image}
//       title= {val.title}
//       link=  {val.link}
//    />
//   );
// }


// const ncards = (val)=>(
//   <Card 
//       key={val.id}
//       sname= {val.name}
//       imgsrc={val.image}
//       title= {val.title}
//       link=  {val.link}
//    />
// )


// ReactDOM.render(
//   <>
//    <h1 className='header'>Best Netflix Web Series</h1>, 
//       {Sdata.map(ncards)}
//   </>,
//   document.getElementById('root')
// )



//=========================================================
import App from "./App"


ReactDOM.render(
  <>
    <App/>
  </>,
document.getElementById('root'))
