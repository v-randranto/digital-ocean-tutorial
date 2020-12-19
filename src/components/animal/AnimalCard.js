import React from 'react';
import {createUseStyles} from 'react-jss'
import AnimalDetails from './AnimalDetails'
import PropTypes from 'prop-types'
import Card from '../card/Card'

const useStyles = createUseStyles({
  
button: {
    fontSize: "1em",
    border: "solid black 1px",
    padding: "10",
    color: "white",
    backgroundColor: "black",
    cursor: "pointer",
    margin: "10px 0"
}
})

export default function AnimalCard({
    additional,        
    showAdditionalInfo,
    name,
    size,
    ...props
  }) {

    const classes = useStyles()
    return (
      <Card title="Animal">
        <h3>{name}</h3>
        <div>{size}kg</div>
        <AnimalDetails
        {...props}
      />
       {additional && <button className={classes.button} onClick={() => showAdditionalInfo(additional)}>More info</button>
       }
       </Card>
    );
  }

  AnimalCard.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  }

  AnimalCard.defaultProps = {
    additional: {
      notes: 'No Additional Information'
    }
  }