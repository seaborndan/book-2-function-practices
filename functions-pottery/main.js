const buyClay = () => {
  const clayObject = {

  }
  return clayObject;
}

const makePottery = (clayObject) => {
  clayObject.shape = "Bowl"
  return clayObject
}

const bisqueFire = (clayObject) => {
  clayObject.readyForGlazing = true;
  return clayObject;
}

const glazePottery = (clayObject) => {
  if(clayObject.readyForGlazing === false) {
    console.log("Make sure you bisque fire the pottery before you glaze it.")
  }
  else {
    clayObject.glazing = "Midnight Blue"
  }
  return clayObject;
}

const finalFiring = (clayObject, temperature) => {
  if(temperature > 1200) {
    clayObject.cracked = true;
  }
  else {
    clayObject.cracked = false;
  }
  return clayObject;
}

initialClay = buyClay();
shapeClay = makePottery(initialClay);
bisqueClay = bisqueFire(shapeClay);
glazeClay = glazePottery(bisqueClay);
firedClay = finalFiring(glazeClay, 1200);

console.log(firedClay);