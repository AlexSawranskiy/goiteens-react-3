import { Component } from "react";
// import stickers from "../stickers.json"
// import { StickerList } from "./Stickers/StickerList";

export class App extends Component {
  state = {
    stickerLable: null,
    formData: null
  }

  handelInput = (e) => {
    const {name, value} = e.currentTarget
     this.setState({
      [name]: value
     })
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  labelHandler = label => {
    this.setState({stickerLable: label})
  }
  
render(){
  // const {stickerLable} = this.state;
  return (
    <>
     <form onSubmit = {this.handelSubmit}>
     <label htmlFor="name">
      Name
      <input id = 'name' type="text" value= {this.state.name} onChange = {this.handelInput}/>
     </label>
     <label htmlFor="name">
      Tag
      <input id = 'name' type="text" value= {this.state.tag} onChange = {this.handelInput}/>
     </label>
     <button type = 'submit'>Submit</button>
     </form>
     
      {/* {stickerLable && <h1>{stickerLable}</h1>}
      <StickerList 
      stickers = {stickers}
      onGetLabel = {this.labelHandler}/> */}
    </>
  );
};
}
