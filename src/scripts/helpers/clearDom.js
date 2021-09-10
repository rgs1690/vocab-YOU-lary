const clearDom = () => {
  document.querySelector('#add-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#sort-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
