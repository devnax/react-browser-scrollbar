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
      onScroll={(even, options) => {
        const {
          scrollTop,
          scrollLeft,
          scrollHeight,
          clientHeight,
          isScrollDown,
        } = optins
      }}
    >
      Children...
    </Scrollbar>
  )
}

```