import "./App.css";

const u = [3, 5, 8, 4];
const v = [6, 9, 5, 7];
var sum = 0;

for (let i = 0; i < u.length; i++) {
  for (let i = 0; i < v.length; i++) {}

  sum += u[i] * v[i] + sum;
}

function App() {
  return (
    <div className="App">
      <h1>sum is {sum}</h1>
    </div>
  );
}

export default App;
