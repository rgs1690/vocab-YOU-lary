import clearDom from '../helpers/clearDom';

const showCards = (array) => {
  clearDom();
  document.querySelector('#add-buttons').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="Javascript">Javascript</button>';
  document.querySelector('#add-buttons').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="CSS">CSS</button>';
  document.querySelector('#add-buttons').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="HTML">HTML</button>';
  document.querySelector('#add-buttons').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="Python">Python</button>';
  document.querySelector('#add-buttons').innerHTML += '<button class="btn btn-success btn-lg mb-4" id="Tech">Tech</button>';
  document.querySelector('#sort-container').innerHTML += ` 
  <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Sort Vocabulary Cards
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a id="sortTitle" class="dropdown-item" href="#">Alphabetically</a></li>
    <li><a id="sortNew" class="dropdown-item" href="#">Newest</a></li>
    <li><a id="sortOld" class="dropdown-item" href="#">Oldest</a></li>
  </ul>
</div>`;
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
    <p class="card-text">${item.definition}</p>
    <button type="button" id="deleteCard--${item.firebaseKey}" class="btn btn-danger">Delete</button>
    <button type="button" id="updateCard--${item.firebaseKey}" class="btn btn-info">Update</button>
  </div>
</div>
    `;
  });
};

export default showCards;
