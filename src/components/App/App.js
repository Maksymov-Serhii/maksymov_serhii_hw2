import ShowChildren from '../showChildren/ShowChildren';
import SomeStrings from '../someStrings/SomeStrings';
import './App.css';

function App() {
  return (
    <div className="App">
        <ShowChildren>
          <SomeStrings itSchool='CyberBionic systematics'
            studentFirstName='Serhii'
            studentLastName = 'Maksymov'
            course1 = 'React'
            course2 = 'Angular'
            isChosenReact = {true}
          />
        </ShowChildren>
    </div>
  );
}

export default App;
