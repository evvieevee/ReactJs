import { useEffect, useState } from "react";



export const ArtistList = () => {

const [artistList, setArtistList] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api' + '/getall', {
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
}, []);

const mapArtist = () => artistList.map(x => <p>{x.name}</p>)
  
  return (<>
  <h1>Blog Articles</h1>
  {artistList && mapArtist()}
  </>);
}