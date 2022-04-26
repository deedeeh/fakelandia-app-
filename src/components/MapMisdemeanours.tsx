import { useContext } from 'react';
import { MisdemeanoursContext } from '../App';

const MapMisdemeanours = () => {
  const misdemeanours = useContext(MisdemeanoursContext);

  let sentence: string = '';
  return misdemeanours.map(misdemeanour => {
    switch(misdemeanour.misdemeanour) {
      case 'lift':
        sentence = 'Speaking in a Lift = 🗣';
        break;
      case 'vegetables':
        sentence = 'Not Eating Your Vegetables = 🥗';
        break;
      case 'rudeness':
        sentence = 'Mild Public Rudeness = 🤪';
        break;
      case 'united':
        sentence = 'Supporting Manchester United = 😈';
        break
    }
    return <div className='cell' key={misdemeanour.citizenId}>{sentence}</div>
  })
}

export default MapMisdemeanours;