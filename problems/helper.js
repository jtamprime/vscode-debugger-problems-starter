const saladContainer = {
  plastic: true,
  color: 'black',
  aluminum: false,
  paper: false
};

function shouldRecycle(item) {
  if (item.plastic && !item.color === 'black') {
    return 'Recycle Me!'
  } else if (item.color === 'black' && item.plastic) {
    return 'Currently, cannot be recycled.'
  } else if (item.aluminum) {
    return 'Recycle Me!'
  } else if (item.paper) {
    return 'Recycle Me!'
  }
  return 'Cannot be recycled'
}


console.log(saladContainer.plastic);
console.log(shouldRecycle(saladContainer)); 