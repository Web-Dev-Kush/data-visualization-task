import "./App.css";
import { getClasswiseFlavanoids, getClasswiseGamma } from "./utils/common";
import data from "./data/wine-data.json";
import { DataTable } from "./components/DataTable";

function App() {
  const alcoholClassFlavanoidsData = getClasswiseFlavanoids(data);
  console.log("alcoholClassFlavanoidsData", alcoholClassFlavanoidsData);
  const alcoholClassGammaData = getClasswiseGamma(data);
  console.log("alcoholClassGammaData", alcoholClassGammaData);
  return (
    <div className="App">
      <DataTable
        dataObj={alcoholClassFlavanoidsData}
        mesaureName="Flavanoids"
      />
      <br />
      <DataTable dataObj={alcoholClassGammaData} mesaureName="Gamma" />
    </div>
  );
}

export default App;
