import { Button } from "@mui/material";


export const DeleteArtist = (props) => {


const fetchArtist = () => {
  fetch('http://localhost:3002/api/delete/' + props.id, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    console.log("onnistui")
    props.action()
  }).catch(() => {
    console.log("ei onnistu")
  })
};
  
  return (<>
<br></br>
  <Button onClick={fetchArtist} className="AppButton" variant="outlined">Poista</Button> 
  </>);
}
