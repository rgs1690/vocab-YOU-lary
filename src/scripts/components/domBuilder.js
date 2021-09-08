const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="main-container">
        <div id="navigation"></div>
        <div id= "add-buttons"></div>
        <div id="form-container"></div>
        <div id="view"</div>  
      </div> 
    `;
};
export default domBuilder;
