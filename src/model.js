import { TitleBlock,TextBlock, ColumnsBlock,ImageBlock } from "./classes/blocks.js"
import image from "./assets/ort.jpg"

const tempText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea amet doloribus animi eum, sit eligendi consequuntur cumque. Nam, dolor tempora rerum sit, vel accusantium magni accusamus fuga eveniet totam quia."

export const model = [
    new TitleBlock('Hello, Alex!'),
    new TextBlock(tempText),
    new ColumnsBlock([tempText,tempText,tempText,tempText,tempText,tempText]),
    new ImageBlock(image)
]