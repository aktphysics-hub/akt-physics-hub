:root {
  --card-bg: #fff;
  --card-border: #ddd;
  --card-shadow: rgba(0,0,0,0.1);
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}
header {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
  gap: 1rem;
  padding: 1rem;
}
/* Card styling */
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px var(--card-shadow);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}
.card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card li + li {
  margin-top: 0.3rem;
}
.card a {
  text-decoration: none;
  color: #2c3e50;
}
