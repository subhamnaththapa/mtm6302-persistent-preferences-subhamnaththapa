// ----- Data & Refs -----
const ITEMS = ['Red', 'Blue', 'Green', 'Orange', 'Purple'];
const listEl = document.getElementById('item-list');
const themeSelect = document.getElementById('theme-select');
const styleSelect = document.getElementById('list-style-select');

// ----- Load or Default Preferences -----
const prefs = {
  theme: localStorage.getItem('theme') || 'light',
  listStyle: localStorage.getItem('listStyle') || 'bulleted'
};

// ----- Apply Preferences to UI -----
function applyPrefs() {
  // Body theme
  document.body.className = `theme-${prefs.theme}`;
  // List style
  listEl.className = `list-group list-group-flush list-style-${prefs.listStyle}`;
  // Select values
  themeSelect.value = prefs.theme;
  styleSelect.value = prefs.listStyle;
}

// ----- Build List Items -----
function buildList() {
  listEl.innerHTML = '';
  ITEMS.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    listEl.append(li);
  });
}

// ----- Event Listeners -----
themeSelect.addEventListener('change', e => {
  prefs.theme = e.target.value;
  localStorage.setItem('theme', prefs.theme);
  applyPrefs();
});
styleSelect.addEventListener('change', e => {
  prefs.listStyle = e.target.value;
  localStorage.setItem('listStyle', prefs.listStyle);
  applyPrefs();
});

// ----- Initialize -----
buildList();
applyPrefs();
