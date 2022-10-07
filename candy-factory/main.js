const buyChocolate = () => {
  const chocolateBar = {
    property: "Milk chocolate"
  }
  return chocolateBar
}

const addFlavoring = (chocObject) => {
  chocObject.flavor = "Mint";
  return chocObject;
}

const makeBarkMixture = (chocObject) => {
  if (chocObject.flavor === "Mint") {
    chocObject.mixed = true;  
  }
  else {
    chocObject.mixed = false;
  }
}

const bakeCandy = (chocObject) => {
  if(chocObject.mixed === true) {
    chocObject.baked = true;
  }
  else {
    chocObject.baked = false;
  }
}

const breakBark = (chocObject) => {
  if(chocObject.baked === true) {
    const pieces = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    return pieces;
  }
}