import clearDom from '../helpers/clearDom';
import selectLanguage from './selectLanguage';

const addCardForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submitCardForm" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Entry Title:</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Vocabulary Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition:</label>
        <textarea class="form-control" placeholder="Enter definition of vocab entry " id="definition" style="height: 100px" value= "${obj.definition || ''}"></textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit"
       id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="btn btn-primary">Submit Vocab Card
       </button>
    </form>
  
  `;
  selectLanguage(`${obj.language || ''}`);
};

export default addCardForm;
