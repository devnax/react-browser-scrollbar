lightweight Scrollbar for ReactJs. It just customize the browser scrollbar with CSS and added some react flavor

## Use

```js
import Scrollbar from 'react-browser-scrollbar'

const App = () => {

  const ref = useRef()

  // included methods in ref
  // ref.scrollTo(number)
  // ref.scrollToTop()
  // ref.scrollToBottom()

  return (
    <Scrollbar
      ref={ref}
      autoHide
      darkMode
      hide={false}
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