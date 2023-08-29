import { Component } from "react";
import stickers from "../stickers.json"
import { StickerList } from "./Stickers/StickerList";

export class App extends Component {
  state = {
    stickerLable: null
  }

  labelHandler = label => {
    this.setState({stickerLable: label})
  }
  
render(){
  const {stickerLable} = this.state;
  return (
    <>
      {stickerLable && <h1>{stickerLable}</h1>}
      <StickerList 
      stickers = {stickers}
      onGetLabel = {this.labelHandler}/>
    </>
  );
};
}
