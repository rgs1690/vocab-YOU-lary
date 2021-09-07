const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div> 
    <div id="main-container"></div> 
    <div id="form-container"></div> 
    `;
};
export default domBuilder;
