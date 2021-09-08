import clearDom from '../helpers/clearDom';

const showCards = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
    <p class="card-text">${item.definition}</p>
    <button type="button" id="deleteCard" class="btn btn-danger">Delete</button>
    <button type="button" id="updateCard" class="btn btn-info">Update</button>
  </div>
</div>
    `;
  });
};

export default showCards;
