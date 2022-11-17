import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NbreArticle } from "../redux"
import { NbreArticleMoins } from "../redux"
import { useState } from 'react'
import './Articles.css'
export default function ArticleItem(props) {
  const { list } = props
  const dispatch = useDispatch();
  const figobject = {
    textDecoration: "none",
    borderRadius: "7px",
    marginLeft: "10%",
    padding: "10px",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontSize: "2vw",
    textAlign: "left",
    color: "rgb(53, 32, 9)",
  }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {setIsActive(current => !current); };
  const CoeurList = list.Coeur


  return (
    <div>
      <img src={list.img} alt={list.titreRouter} width="100%" height="100%" style={{ borderRadius: "7px" }} />
      <div>
        <figcaption style={figobject}>
          {CoeurList.map((e, index) => {
            return (<button className={(isActive) ? 'rouge' : 'gris'} key={e.id} onClick={()=>handleClick()}>&#9829;</button>)
          })}



          <br/>
          <a>{list.titreDetail}</a>
          <a > à </a>
          <a><b>{list.prix}</b></a>
          <a >
            dt</a><br />
          <div style={{paddingLeft:'2vw', paddingBottom:'5px', fontSize:'1.4vw'}}>
            <button onClick={() => { dispatch(NbreArticleMoins(list.id)) }} style={{backgroundColor:'rgb(64, 116, 12)', color:'white', borderColor:'rgb(64, 116, 12)'}}>-</button>
            <button >quantité:{list.quantite}</button>
            <button onClick={() => { dispatch(NbreArticle(list.id)) }} style={{backgroundColor:'rgb(176, 8, 47)', color:'white', borderColor:'rgb(176, 8, 47)'}}>+</button>
          </div>
        </figcaption>


      </div>

    </div>
  )
}
