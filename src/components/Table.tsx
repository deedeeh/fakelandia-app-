import { useContext } from 'react';
import '../styles/misdemeanours.css';
import { MisdemeanoursContext, SelectedItemContext, SelectedMisdemeanoursContext } from './ReactContext';
import MapMisdemeanours from './MapMisdemeanours';


const Table = () => {
  const misdemeanours = useContext(MisdemeanoursContext);
  const selectedMisdemeanours = useContext(SelectedMisdemeanoursContext);
  const selectedItem = useContext(SelectedItemContext);

  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        {selectedItem === 'filter' && (
        <tbody>
          {misdemeanours.map((misdemeanour, index) => (
            <tr key={misdemeanour.citizenId}>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>{MapMisdemeanours(misdemeanour.misdemeanour)}</td>
              <td><img src={`https://picsum.photos/id/${index}/100`} alt='random' /></td>
            </tr>
          ))}
        </tbody>
        )}
        {selectedItem !== 'filter' && selectedMisdemeanours.length >= 1 && (
        <tbody>
          {selectedMisdemeanours.map((misdemeanour, index) => (
            <tr key={misdemeanour.citizenId}>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>{MapMisdemeanours(misdemeanour.misdemeanour)}</td>
              <td><img src={`https://picsum.photos/id/${index}/100`} alt='random' /></td>
            </tr>
          ))}
        </tbody>
        )}
      </table>
      {selectedItem !== 'filter' && selectedMisdemeanours.length === 0 && (
        <p>Sorry we don't have records of {selectedItem.toUpperCase()}.</p>
      )}
    </div>
  )
}


export default Table;