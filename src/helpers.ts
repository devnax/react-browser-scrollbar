
export const uid = () => Math.random().toString(36).substring(2)

export const customizeStyle = ({ id, thumbSize }: any): string => {
   const selector = `[data-rbs=${id}]`;
   let css = ''

   if (thumbSize) {
      css += `
         ${selector}::-webkit-scrollbar{width: ${thumbSize}px; height: ${thumbSize}px}
      `
   }

   return css
}