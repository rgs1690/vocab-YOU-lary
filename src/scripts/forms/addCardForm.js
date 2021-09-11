import clearDom from '../helpers/clearDom';

const addCardForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submitCardForm" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Entry Title:</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Vocabulary Title" value="${obj.title || ''}" required />
      </div>
      <div class="form-group">
        <label for="definition">Definition:</label>
        <textarea class="form-control" placeholder="Enter definition of vocab entry " id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
      <label for="language">Select a Language</label>
      <select name="languages"class="form-control" id="select-language"value= "${obj.language || ''}" required />
        <option value="">Select a Language</option>
        <option value="Javascript">Javascript</option>        
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
        <option value="HTML">HTML</option>
        <option value="Tech">Tech</option>
        </select>
      </div>
        <button type="submit"
        id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'cardSubmit'}" class="btn btn-primary">Submit Vocab Card
        </button>
    </form>
  
  `;
};

export default addCardForm;
