import React from 'react';

import data from './data';
import AnimalCard from '../animal/AnimalCard';
import Alert from '../alert/Alert'
import CartSuccess from '../alert/CartSuccess'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px",
  },
  header: {   
      textAlign: "center",
      width: "100%"
  }
});

function App() {
  const classes = useStyles()
  
  function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };
  return (
    <>
    
    <div className={classes.wrapper}>  
    <h1 className={classes.header}>Animals</h1>    
      {data.map(animal => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size} 
          petName={animal.petName}                   
          showAdditionalInfo={showAdditional}
        />
      ))}
      </div>
      <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
    </>
  );
}

export default App;
