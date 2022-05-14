
// export const uid = () => Math.random().toString(36).substring(2)

export const customizeStyle = ({ id, thumbSize, hide }: any): string => {
   const selector = `[data-rbs=${id}]`;
   let css = ''

   if (thumbSize !== undefined) {
      if(hide){
         css += `
            ${selector}::-webkit-scrollbar{width: 0px; height: 0px}
            ${selector}{scrollbar-width: none}
         `
      }else{

      }
      
   }

   return css
}