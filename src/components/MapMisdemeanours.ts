const MapMisdemeanours = (data: string) => {
  let sentence: string = '';
    switch(data) {
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
    return sentence
}

export default MapMisdemeanours;