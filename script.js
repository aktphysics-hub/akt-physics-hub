const user = 'aktphysics-hub';
const repo = 'akt-physics-hub';

const sections = [
  { title: 'Unit 1: Nature of Physical World',     folder: 'units/unit1' },
  { title: 'Unit 2: Physical Measurements',         folder: 'units/unit2' },
  { title: 'Unit 3: Motion in One Dimension',      folder: 'units/unit3' },
  { title: 'Unit 4: Motion in Two Dimensions',     folder: 'units/unit4' },
  { title: 'Unit 5: Laws of Motion',               folder: 'units/unit5' },
  { title: 'Unit 6: Work, Energy & Power',         folder: 'units/unit6' },
  { title: 'Unit 7: Systems of Particles',         folder: 'units/unit7' },
  { title: 'Unit 8: Gravitation',                  folder: 'units/unit8' },
  { title: 'Unit 9: Mechanical Properties',        folder: 'units/unit9' },
  { title: 'Unit 10: Oscillations',                folder: 'units/unit10' },
  { title: 'Unit 11: Waves',                       folder: 'units/unit11' },
  { title: 'NDA Preparation',                      folder: 'nda-prep'    },
  { title: 'SSB Interview Tips',                   folder: 'ssb-interview'},
  { title: 'Recommended Books & Tips',             folder: 'books'       }
];

const cardsContainer = document.getElementById('cards');
sections.forEach(sec => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${sec.title}</h2><ul id="${sec.folder}"><li>Loading…</li></ul>`;
  cardsContainer.appendChild(card);

  fetch(`https://api.github.com/repos/${user}/${repo}/contents/${sec.folder}`)
    .then(res => res.ok ? res.json() : [])
    .then(files => {
      const ul = card.querySelector('ul');
      ul.innerHTML = '';
      if (files.length) {
        files.forEach(f => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${f.download_url}" target="_blank">${f.name}</a>`;
          ul.appendChild(li);
        });
      } else {
        ul.innerHTML = '<li>No files uploaded yet.</li>';
      }
    })
    .catch(console.error);
});
