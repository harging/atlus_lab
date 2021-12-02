import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList'
import CountryDetail from '../components/CountryDetail'
import CountrySelector from '../components/CountrySelect';
import CountriesFavourite from '../components/CountriesFavourite';

const Atlus = ( ) => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountries] = useState(null);
    const [favouriteCountries, setFavouritedCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries =function(){
        setLoading(true);
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(countries => setCountries(countries))
        .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }

    const onCountrySelected = function(country){
        setSelectedCountries(country);
    }

    const onCountryClick = function(country){
        setSelectedCountries(country);
    }

    // const onCountrySelected = function(country){
    //     setSelectedCountry(country);
    // }

    const onFavouriteClick = function(country){
        setFavouritedCountries(favouriteCountries.push(country));
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    let WorldPop = 0
    const WorldPopCalc = countries.forEach((country) => {
    WorldPop += country.population
    })

if (!WorldPop) {
        return <p>Data is loading...</p>;
      }
let WorldPopFormatted = numberWithCommas(WorldPop)
return (
    <>
    <h2>Atlus</h2>
    <h3>World population: {WorldPopFormatted}</h3>
    <h3>Favourites</h3>
    <CountriesFavourite favouriteCountries={favouriteCountries} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick}/>
    <h3>All countries</h3>
    <CountriesList countries={countries} loading={loading} onCountryClick={onCountryClick} onFavouriteClick={onFavouriteClick}/>
    <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
    </>
)


}

export default Atlus;