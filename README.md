lightweight Scrollbar for ReactJs. It just customize the browser scrollbar with CSS and added some react flavor

## Use

```js
import Scrollbar from 'react-browser-scrollbar'

const App = () => {
  return (
    <Scrollbar
      ref={ref}
      autoHide
      darkMode
      thumbSize={6}
      onScroll={(event) =>{

      }}
      onScrollEnd={(event) => {
        
      }}
      onScrollStart={(event) => {
        
      }}
      onScrollStop={(event) => {
        
      }}
    >
      Children...
    </Scrollbar>
  )
}

```