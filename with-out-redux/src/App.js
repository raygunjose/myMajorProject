import FirstComponent from './components/comp1';

function App() {
  return(
    <div style={{background: 'gray', padding:'20px'}}>
      <h1>React Prop Drilling Example</h1>
      <FirstComponent/>
    </div>
  );
};

export default App;