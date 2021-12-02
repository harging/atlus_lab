import React from 'react';
import Country from './Country'

const CountriesFavourite = ({favouriteCountries, onCountryClick, onFavouriteClick}) => {

    // if (!favouriteCountries){
    //     return "Loading"

        console.log(favouriteCountries)
    const FavouriteCountryItems = favouriteCountries.map((country, index) => {
        return <Country 
        country = {country}
        onCountryClick={onCountryClick}/>
      })

    return (
        <>
            <h3>Country List</h3>
            <ul>
            {FavouriteCountryItems}
            </ul>
        </>
    )
}
// }

export default CountriesFavourite