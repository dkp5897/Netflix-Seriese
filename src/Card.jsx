import Images from "./Images";

function Cards(probs) {
  return (
    <>
      <div className="cards">
        <div className="card">
         <Images imgsrc={probs.imgsrc}/>
          <div className="card__info">
            <span className="card__category">{probs.title}</span>
            <h3 className="card__title">{probs.sname}</h3>
            <a href={probs.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export  default Cards





//========================================================




// function Cards(probs) {
//   return (
//     <>
//       <div className="cards">
//         <div className="card">
//           <img
//             src={probs.imgsrc}
//             alt="mypic"
//             className="card_img"
//           />
//           <div className="card__info">
//             <span className="card__category">{probs.title}</span>
//             <h3 className="card__title">{probs.sname}</h3>
//             <a href={probs.link} target="_blank">
//               <button>Watch Now</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export  default Cards