import React, {useId, useEffect, forwardRef, ReactChild, ReactNode, HTMLAttributes, UIEvent } from 'react';
import { customizeStyle} from './helpers'
import loadStyle from './loadStyle'

interface Props {
  children: ReactChild | ReactNode;
  darkMode?: boolean;
  autoHide?: boolean;
  hide?: boolean;
  thumbSize?: number;
  onScrollEnd?: (e: UIEvent<HTMLDivElement>) => void;
  onScrollStop?: (e: UIEvent<HTMLDivElement>) => void;
  onScrollStart?: (e: UIEvent<HTMLDivElement>) => void;
}


let isScrolling: any = null
let isStarted: boolean = false

const Scrollbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & Props>(({ children, darkMode, autoHide, hide, thumbSize, onScroll, onScrollEnd, onScrollStop, onScrollStart,  className, ...rest }, ref: any) => {
  useEffect(() => {
    if(ref){
      ref.scrollTo = (pos: number) => {
        ref.current.scrollTo({ top: pos, behavior: 'smooth' })
      }
      ref.scrollToBottom = () => {
        ref.scrollTo(ref.current.scrollHeight)
      }
      ref.scrollToTop = () => {
        ref.scrollTo(0)
      }
    }
    loadStyle()
  }, [])
  const _uid = useId().replace(/:/gi, '')

  let cls = `rbs ${className ? className : ''}`
  cls += darkMode ? ' rbs-dark' : ''
  cls += autoHide && !hide ? ' rbs-autohide' : ''

  const props: any = {}

  if (onScroll || onScrollEnd || onScrollStop || onScrollStart) {
    props.onScroll = (e: UIEvent<HTMLDivElement>) => {
      if (onScrollEnd) {
        const ele: any = e.target
        const scrollTop = ele.scrollTop
        const scrollHeight = ele.scrollHeight
        const clientHeight = ele.clientHeight
        const isScrollDown = scrollHeight - scrollTop === clientHeight
        isScrollDown && onScrollEnd(e)
      }

      if(onScrollStop){
        clearTimeout( isScrolling )
        isScrolling = setTimeout(() => onScrollStop(e), 150)
      }

      if(onScrollStart && !isStarted){
        onScrollStart(e)
        isStarted = true
        setTimeout(() => isStarted = false, 500)
      }
      onScroll && onScroll(e)
    }
  }

  return <>
    <style>{customizeStyle({id: _uid, thumbSize, autoHide, hide})}</style>
    <div
      {...rest}
      ref={ref}
      className={cls}
      {...props}
      data-rbs={_uid}
    >
      {children}
    </div>
  </>
})

export default Scrollbar