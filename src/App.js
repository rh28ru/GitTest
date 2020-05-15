import React from 'react';
import Clock from './components/Clock'
// import CustomButton from './components/buttonClick';
// import FlavorForm from './components/flavourForm';
// import NameForm from './components/NameForm';
import FilterableProductsTable from './components/FilterProducts';
import Exam from './Hook/exam'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        THis is a App for testing...
      </header>
      <Clock/>
      {/* <CustomButton/>
      <FlavorForm/>
      <NameForm/> */}
      {/* <FilterableProductsTable/> */}
      <Exam/>
    </div>
  );
}

export default App;
