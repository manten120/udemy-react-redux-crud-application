function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={() => {console.log('Hi')}}/>
    </>
  );
}

// function App() {
//   return <input type="text" onChange={() => {console.log('Hi')}}/>
// }

// function App() {
//   return <input type="text" onClick={() => {console.log('Hi')}}/>
// }

// function App() {
//   const greeting = 'Hi!';
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }

export default App;
