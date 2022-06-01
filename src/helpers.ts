
// export const uid = () => Math.random().toString(36).substring(2)

export const customizeStyle = ({ id, thumbSize }: any): string => {
   const selector = `[data-rbs=${id}]`;
   let css = ''

   if (thumbSize !== undefined) {
      if(thumbSize === 0){
         css += `
            ${selector}::-webkit-scrollbar{width: 0px; height: 0px}
            ${selector}{scrollbar-width: none}
         `
      }else{
         css += `
            ${selector}::-webkit-scrollbar{width: ${thumbSize}px; height: ${thumbSize}px}
            ${selector}{scrollbar-width: thin}
         `
      }
   }
   

   return css
}