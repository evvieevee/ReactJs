import { useEffect, useState } from "react";
import { DeleteArtist } from "./delete.artist";
import { AddArtist } from "./add.artist";



export const ArtistList = () => {

const [artistList, setArtistList] = useState([]);

useEffect(() => {
  fetchAll()
}, []);

const fetchAll = () => {
  fetch('http://localhost:3002/api/getall', {
    headers: {
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    setArtistList(data);
  }).catch(() => {
    setArtistList([]);
  })
}

  
  return (<>
  <AddArtist action={fetchAll}/>
  {artistList && artistList.map((x, index) => 
    <div key={x._id + index}>
      <p >{x.name} : {x._id}</p>
      <DeleteArtist key={x._id + index} action={fetchAll} id={x._id} />
    </div>)
  }
  </>);
}