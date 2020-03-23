let total_cases = document.getElementById('total_cases');
let total_recovered = document.getElementById('total_recovered');
let new_cases = document.getElementById('new_cases');
let new_deaths = document.getElementById('new_deaths');
let total_deaths = document.getElementById('total_deaths');
let tbody = document.getElementById("countries_stat");
//  world_total_stat
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "ffa3ca0e7dmsh1d4f18ad7012813p1b80a0jsne0be1499c946"
	}
})
.then(response => response.json().then(data => {
    // console.log(data);
    total_cases.innerHTML = data.total_cases;
    total_recovered.innerHTML = data.total_recovered;
    new_cases.innerHTML = data.new_cases;
    new_deaths.innerHTML = data.new_deaths;
    total_deaths.innerHTML = data.total_deaths;
}))
.catch(err => {
	console.log(err);
});
// end world_total_stat

// cases_by_country
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "ffa3ca0e7dmsh1d4f18ad7012813p1b80a0jsne0be1499c946"
	}
})
.then(response => response.json().then(data =>{
    let countries_stat = data.countries_stat;
    for(let i=0; i< countries_stat.length; i++){
        // console.log(countries_stat[i]);
        let row = tbody.insertRow(1+i);
        let number = row.insertCell(0);
        let country_name = row.insertCell(1);
        let cases = row.insertCell(2);
        let deaths = row.insertCell(3);
        let serious_critical = row.insertCell(4);
        let total_recovered = row.insertCell(5);
        number.innerHTML = i+1;
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        cases.style.color = "#34495E";
        deaths.innerHTML = countries_stat[i].deaths;
        deaths.style.color = "#839192";
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        serious_critical.style.color = "#B7950B";
        total_recovered.innerHTML = countries_stat[i].total_recovered;
        total_recovered.style.color = "#27AE60";
    }
}))
.catch(err => {
	console.log(err);
});
// end cases_by_country