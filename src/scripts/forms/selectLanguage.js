const selectLanguage = () => {
  const domString = `<label for="language">Select a Language</label>
      <select name="languages"class="form-control" id="languageSelection" required>
        <option value="">Select a Language</option>
        <option value="Javascript">Javascript</option>        
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
        <option value="HTML">HTML</option>
        <option value="Tech">Tech</option>
        </select>`;

  document.querySelector('#select-language').innerHTML = domString;
};

export default selectLanguage;
