const selectLanguage = () => {
  let domString = `<label for="language">Select a Language</label>
      <select class="form-control" id="languageSelection" required>
      <option value="">Select a Language</option>
        <option>Javascript</option>        
        <option>CSS</option>
        <option>Python</option>
        <option>HTML</option>
        <option>CSS</option>
        `;
  domString += '</select>';

  document.querySelector('#select-language').innerHTML = domString;
};

export default selectLanguage;
