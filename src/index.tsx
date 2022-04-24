import React, { forwardRef, ReactChild, ReactNode, HTMLAttributes, SyntheticEvent} from 'react';
import './loadcss.js'

interface ScrollProps{
  scrollTop: number;
  scrollLeft: number;
  scrollHeight: number;
  clientHeight: number;
  isScrollDown: boolean;
}

interface Props{
  children: ReactChild | ReactNode;
  darkMode?: boolean;
  autoHide?: boolean;
  onScroll?: (e?: any, options?: ScrollProps) => {};
}


const Scrollbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & Props>(({children, darkMode, autoHide, onScroll, className, ...rest}, ref) => {
  let cls = `rbs ${className ? className : ''}`
  cls += darkMode ? ' rbs-dark' : ''
  cls += autoHide ? ' rbs-autohide' : ''

  return <div 
    {...rest}
    ref={ref}
    className={cls} 
    onScroll={(e: SyntheticEvent) => {
      const ele: any = e.target
      
      const scrollTop     = ele.scrollTop
      const scrollLeft    = ele.scrollLeft
      const scrollHeight  = ele.scrollHeight
      const clientHeight  = ele.clientHeight
      const isScrollDown  = scrollHeight - scrollTop === clientHeight
      const options = {
        scrollTop,
        scrollLeft,
        scrollHeight,
        clientHeight,
        isScrollDown,
      }
      onScroll && onScroll(e, options)
    }}
  >
    {children}
  </div>
})

export default Scrollbar