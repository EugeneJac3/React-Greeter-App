import './App.css';
import Greeter from './components/Greeter';
import Logo from './components/Logo';
import Text from './components/Text';
import nameArray from './data'


// name === prop

function App() {
  return (
    <div className="App">
    <h1 className="greeting">Hello React!</h1>
    {
     nameArray.map(thing => <Greeter name={thing.name}
      age={thing.age} />)
    }
    </div>
  );
}

export default App;



    //  {/* <header className="App-header">
    //     <Logo />
    //     <Text />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}