import { Sticker } from "./Sticker"

export const StickerList = ({stickers, onGetLabel}) => {
    return (
       <ul>
          {stickers.map(({img, label}) => {
          return <li><Sticker
          img = {img}
          label = {label}
          onGetLabel = {onGetLabel}/></li>
        })}
        </ul>
    )
}