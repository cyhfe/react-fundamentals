// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>

function Box({children, size ,className='', style, ...otherProps}){
  const sizeClassName = size? `box--${size}`: ''
  return <div className={`box ${sizeClassName} ${className}`} {...otherProps} style={{fontStyle: 'italic', ...style}}>{children}</div>
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'red'}}>small lightblue box</Box>
      <Box size="medium" style={{backgroundColor: 'blue'}}>medium pink box</Box>
      <Box size="large" style={{backgroundColor: 'green'}}>large orange box</Box>
    </div>
  )
}

export default App
