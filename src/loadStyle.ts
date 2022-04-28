export default () => {
   const is = document.getElementById('rbs')
   if (!is) {
      const style = document.createElement('style')
      style.id = 'rbs'
      document.head.append(style)
      style.innerHTML = `
   .rbs{
      width: 100%;
      height: 100%;
      overflow: auto;
   }
   
   ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
   }

   ::-webkit-scrollbar-track {
      background: transparent
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      -webkit-border-radius: 8px;
      background-clip: content-box;
      background: rgba(11,20,26,.2);
      
   }
   ::-webkit-scrollbar-thumb:hover{
      background: rgba(11,20,26,.3)
   }
   .rbs-autohide:not(:hover, :active)::-webkit-scrollbar-thumb, .rbs-autohide:not(:hover, :active)::-webkit-scrollbar-track{
      background-color: transparent
   }

   * {
      scrollbar-color: rgba(11,20,26,.2) rgba(0,0,0,.05);
      scrollbar-width: thin
   }

   .rbs-autohide:not(:hover, :active){
      scrollbar-color: transparent transparent;
   }

   .rbs-dark::-webkit-scrollbar-thumb{
      background: rgba(255,255,255,.16);
   }

   .rbs-dark::-webkit-scrollbar-thumb:hover{
      background: rgba(255,255,255,.26);
   }

   .rbs-dark{
      scrollbar-color: rgba(255,255,255,.26) tranparent;
   }

`
   }
}