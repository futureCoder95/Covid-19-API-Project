const getCovidData = (parameter) => {
    fetch('https://api.covid19api.com/summary')
        .then((apiData) => {
            // console.log(apiData);
            return apiData.json();
        })
        .then((actualDataDisplay) => {
            console.log(actualDataDisplay.Countries[101]);

            const myCountries = actualDataDisplay.Countries[`${parameter}`];
            document.write(`My Country name is <b>${myCountries.Country}</b> <hr> The number of Confirmed Cases are <b>${myCountries.TotalConfirmed}</b><hr>  The death toll for now is <b>${myCountries.NewDeaths}</b> <hr>`);
        })
        .catch((err) => {
            document.write(`Error is ${err}`);
        })

}

getCovidData(77);
getCovidData(11);
getCovidData(19);
getCovidData(21);
