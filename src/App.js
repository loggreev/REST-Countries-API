import { useEffect, useState } from 'react';
import './App.css';
import DetailView from './components/DetailView';
import Header from './components/Header';
import Home from './components/Home';

// store theme in local storage (does not expire)
if (!localStorage.getItem('darkMode')) {
  localStorage.setItem('darkMode', 1);
  console.log("Set initial Local Storage for darkMode!")
}

function App() {
  // state
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === '1');
  const [view, setView] = useState('home');
  const [country, setCountry] = useState(undefined);
  const [countriesData, setCountriesData] = useState(undefined);

  // componentDidMount
  useEffect(() => {
    callApi('https://restcountries.com/v2/all');
  }, []);

  // componentDidMount + componentDidUpdate for darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
      document.body.classList.remove('lightMode');
      localStorage.setItem('darkMode', 1);
    }
    else {
      document.body.classList.add('lightMode')
      document.body.classList.remove('darkMode');
      localStorage.setItem('darkMode', 0);
    }

    // only run if darkMode is updated (when theme button is clicked)
  }, [darkMode]);

  function callApi(api_url) {
    // store api results in session storage (expires when tab is closed)
    if (!sessionStorage.getItem('apiCall')) {
      fetch(new Request(api_url))
        .then(response => response.json())
        .then(parsedJSON => {
          const data = parsedJSON.map((country) => {
            return {
              countryname: country.name,
              bordercountries: country.borders,
              flag: country.flag,
              stats: {
                "Native Name": country.nativeName,
                "Population": country.population,
                "Region": country.region,
                "Sub Region": country.subregion,
                "Capital": country.capital,
                "Top Level Domain": country.topLevelDomain,
                "Currencies": country.currencies,
                "Languages": country.languages
              }
            };
          })
          setCountriesData(data);
          sessionStorage.setItem('apiCall', JSON.stringify(data));
          console.log("Set initial Session Storage for apiCall!");
        });
    }
    else {
      if (!countriesData)
        setCountriesData(JSON.parse(sessionStorage.getItem('apiCall')));
      console.log("API data already exists!");
    }
  }

  function viewCountryDetails(data) {
    setView('details');
    setCountry(data);
  }
  function callRegion(data) {
    sessionStorage.clear();
    if (data === "All")
      callApi(`https://restcountries.com/v2/all`);
    else
      callApi(`https://restcountries.com/v2/region/${data}`);
  }
  function callName(data) {
    sessionStorage.clear();
    callApi(`https://restcountries.com/v2/name/${data}`);
  }
  function callbackDetailView() {
    setView('home');
    setCountry(undefined);
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} callback={() => { setDarkMode(!darkMode) }} />
      {view === 'home' && <Home countriesData={countriesData} viewCountryDetails={viewCountryDetails} callRegion={callRegion} callName={callName} />}
      {view === 'details' && <DetailView countryData={country} callback={callbackDetailView} />}
    </div>
  );

}

export default App;
