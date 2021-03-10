/* 
Site does not work on first load, but works on reload.
This is because session storage is set and data loads properly on reload.
I don't know how to fix it.
*/

import { useEffect, useRef, useState } from 'react';
import './App.css';
import DetailView from './components/DetailView';
import Header from './components/Header';
import Home from './components/Home';

// store theme in local storage (does not expire)
if (!localStorage.getItem('darkMode')) {
  localStorage.setItem('darkMode', 1);
  console.log("Set initial Local Storage for darkMode!")
}

// this ONLY works if outside of the function
// I assume the asynchronous stuff and rerendering causes this
// let countriesData;

function App() {
  // state
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === '1');
  const [view, setView] = useState('home');
  const [country, setCountry] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const countriesData = useRef(undefined);
  console.log('');
  console.log("RUNNING APP")

  // componentDidMount + componentDidUpdate for loading
  useEffect(() => {
    // I'd like to call this only once
    callApi('https://restcountries.eu/rest/v2/all');

    if (!countriesData.current)
      countriesData.current = JSON.parse(sessionStorage.getItem('apiCall'));
    console.log("IN USEEFFECT FOR LOADING");
    console.log(countriesData);

    // setting state in its own update function sounds like a bad idea
    setLoading(false);
  }, [loading])

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
      // fetch(new Request('https://restcountries.eu/rest/v2/lang/es'))
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
          sessionStorage.setItem('apiCall', JSON.stringify(data));
          console.log("Set initial Session Storage for apiCall!")

          //obviously a hack to make it work for the first page load
          window.location.reload()
        });
    }
    else {
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
      callApi(`https://restcountries.eu/rest/v2/all`);
    else
      callApi(`https://restcountries.eu/rest/v2/region/${data}`);
  }
  function callName(data) {
    sessionStorage.clear();
    callApi(`https://restcountries.eu/rest/v2/name/${data}`);
  }
  function callbackDetailView() {
    setView('home');
    setCountry(undefined);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  else {
    console.log("RENDERING");
    return (
      <div className="App">
        <Header darkMode={darkMode} callback={() => { setDarkMode(!darkMode) }} />
        {view === 'home' && <Home countriesData={countriesData.current} viewCountryDetails={viewCountryDetails} callRegion={callRegion} callName={callName} />}
        {view === 'details' && <DetailView countryData={country} callback={callbackDetailView} />}
      </div>
    );
  }
}

export default App;

  // const countryData = {
  //   countryname: "Belgium",
  //   stats: {
  //     "Native Name": "Belgie",
  //     "Population": "11,319,511",
  //     "Region": "Europe",
  //     "Sub Region": "Western Europe",
  //     "Capital": "Brussels",
  //     "Top Level Domain": ".be",
  //     "Currencies": ["Euro"],
  //     "Languages": ["Dutch", "French", "German"]
  //   },
  //   bordercountries: ["France", "Germany", "Netherlands"]
  // }