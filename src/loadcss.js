;(() => {
   const is = document.getElementById('rbs')
   if(!is){
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
      width: 8px;
      height: 8px;
   }
   ::-webkit-scrollbar-track {
      background: rgba(0,0,0,.05);
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-clip: content-box;
      background-color: #ccc;
      
   }
   ::-webkit-scrollbar-thumb:hover {
      background: #bbb; 
   }
   .rbs-dark::-webkit-scrollbar-thumb{
      background: #36393f
   }
   .rbs-dark::-webkit-scrollbar-thumb:hover{
      background: #202225
   }
   .rbs-autohide:not(:active)::-webkit-scrollbar-thumb, .rbs-autohide:not(:active)::-webkit-scrollbar-track{
      background-color: transparent
   }
   .rbs-autohide:hover::-webkit-scrollbar-thumb{
      background-color: #ccc;
   }
   .rbs-autohide:hover::-webkit-scrollbar-track{
      background: rgba(0,0,0,.05)
   }
   .rbs-autohide.rbs-dark:hover::-webkit-scrollbar-thumb{
      background: #36393f
   }

   * {
      scrollbar-color: #ccc rgba(0,0,0,.05);
      scrollbar-width: thin
   }

   .rbs-dark{
      scrollbar-color: #36393f rgba(0,0,0,.05);
   }

   .rbs-autohide:not(:active){
      scrollbar-color: transparent transparent;
   }

   .rbs-autohide:hover{
      scrollbar-color: #ccc rgba(0,0,0,.05);
   }

   .rbs-autohide.rbs-dark:hover{
      scrollbar-color: #36393f rgba(0,0,0,.05);
   }
   
`
   }
})()