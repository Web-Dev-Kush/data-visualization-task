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
  const length = numArray.length;
  if (length % 2 === 1) {
    return numArray[length / 2 - 0.5];
  } else {
    return (numArray[length / 2] + numArray[length / 2 - 1]) / 2;
  }
};

export const calculateMode = (numArray) => {
  const countsObj = {};
  let maxCountKey = undefined;
  let maxCount = 0;
  numArray.forEach((numValue) => {
    let count = 1;
    if (numValue in countsObj) {
      count += countsObj[numValue];
    }
    countsObj[numValue] = count;

    if (count > maxCount) {
      maxCount = count;
      maxCountKey = numValue;
    }
  });
  console.log('countsObj', countsObj);
  console.log(`maxCountKey => ${maxCountKey}, maxCount => ${maxCount}`);
  return maxCountKey;
};
