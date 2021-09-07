import clearDom from '../helpers/clearDom';

const showCards = (array) => {
  clearDom();
  array.forEach(() => {
    document.querySelector('#view').innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-danger">Delete</button>
    <button type="button" class="btn btn-info">Update</button>
  </div>
</div>
    `;
  });
};

export default showCards;
