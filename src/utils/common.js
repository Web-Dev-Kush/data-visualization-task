export const getClasswiseFlavanoids = (dataArray) => {
  const classwiseFlavanoids = {};
  dataArray.forEach((element) => {
    const alcoholClass = element.Alcohol;
    const flavanoidsValue = element.Flavanoids;
    // check if Alcohol class is present in classwiseFlavanoids object
    if (alcoholClass in classwiseFlavanoids) {
      // pushing Flavanoids value in array of Alcohol class in classwiseFlavanoids object
      classwiseFlavanoids[alcoholClass].push(Number(flavanoidsValue));
    } else {
      // add Alcohol class in classwiseFlavanoids object with Flavanoids value in array
      classwiseFlavanoids[alcoholClass] = [Number(flavanoidsValue)];
    }
  });
  return classwiseFlavanoids;
};

export const getClasswiseGamma = (dataArray) => {
  const classwiseGamma = {};
  dataArray.forEach((element) => {
    const alcoholClass = element.Alcohol;
    const gammaValue = (element.Ash * element.Hue) / element.Magnesium;
    // check if Alcohol class is present in classwiseGamma object
    if (alcoholClass in classwiseGamma) {
      // pushing Gamma value in array of Alcohol class in classwiseGamma object
      classwiseGamma[alcoholClass].push(gammaValue);
    } else {
      // add Alcohol class in classwiseGamma object with Gamma value in array
      classwiseGamma[alcoholClass] = [gammaValue];
    }
  });
  return classwiseGamma;
};

export const calculateMean = (numArray) => {
  return (
    numArray.reduce((partialSum, numValue) => partialSum + numValue, 0) /
    numArray.length
  );
};

export const calculateMedian = (numArray) => {
  numArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numArray);
  const length = numArray.length;
  if (length % 2 === 1) {
    return numArray[length / 2 - 0.5];
  } else {
    return (numArray[length / 2] + numArray[length / 2 - 1]) / 2;
  }
};

export const calculateMode = (numArray) => {
  const countsObj = {};
  numArray.forEach(function (e) {
    if (countsObj[e] === undefined) {
      countsObj[e] = 0;
    }
    countsObj[e] += 1;
  });
  console.log('countsObj', countsObj);
  const valuesArr = Object.values(countsObj);
  return Math.max(...valuesArr);
};
