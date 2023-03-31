import SomeStrings from '../someStrings/SomeStrings';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SomeStrings itSchool='CyberBionic systematics'
        studentFirstName='Serhii'
        studentLastName = 'Maksymov'
        course1 = 'React'
        course2 = 'Angular'
        isChosenReact = {true}
        />
      </header>
    </div>
  );
}

export default App;
