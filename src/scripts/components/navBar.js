const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
    <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Vocab-YOU-lary
    </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="allCards">
                All Cards <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="createEntry">Create Entry</a>
            </li>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
