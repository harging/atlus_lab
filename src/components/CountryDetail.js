import React from 'react';

const CountryDetail = ({selectedCountry}) => {

    // if (independent == true) {
    //     independent = 'True'
    // }
    // else {
    //     independent = 'False'
    // }

    selectedCountry.independent = String(selectedCountry.independent);
    selectedCountry.unMember = String(selectedCountry.unMember);
    

    if (!selectedCountry.borders) {
        return <p>Data is loading...</p>;
      }
    else {
        const borderItems = selectedCountry.borders.map((border) => <li>{border}</li>);
  

    return (

        
        <li>
        <h4>{selectedCountry.name.common}</h4>
        <p>Total Population: {selectedCountry.population}</p>
        <p>independent: {selectedCountry.independent}</p>

        <p>UN Member: {selectedCountry.unMember}</p>


        <p>Region: {selectedCountry.region}</p>
        <p>Sub Region: {selectedCountry.subregion}</p>
        <p>Borders: <ul>{borderItems}</ul></p>
        <p>Area: {selectedCountry.area} Km<sup>2</sup></p>
        <img alt='{selectedCountry.name.common} flag'src={selectedCountry.flags.png}></img>
        </li>
    )
    }
}

export default CountryDetail;