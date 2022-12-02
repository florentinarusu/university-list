import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const countryList = [
    "All",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);
  const [searchInput, setSearchInput] = useState("");
  const [name, setName] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${name}&country=${country}`
    );
    const result = await response.json();
    setData([...result]);
    setFilteredData([...result]);
    console.log(result);
  };

  useEffect(() => {
    if (name) {
      getData();
    }
  }, [name, country]);
  console.log(data);

  const searchItems = (event) => {
    setSearchInput(event.target.value);
    let newData = data.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData([...newData]);
    if (event.target.value === "") {
      setFilteredData([...data]);
    }
  };
  console.log(searchItems);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="country">Choose a country:</label>

        <select
          data={data}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countryList.map((item) => (
            <option value={item === "All" ? " " : item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          value={searchInput}
          onChange={searchItems}
          type="text"
          placeholder="Search by name ..."
        />
        {/* <button
          type="submit"
          value={name}
          // onChange={(e) => setFilter(e.target.value)}
        >
          Search
        </button> */}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {filteredData.map((item) => {
          return (
            <div
              style={{
                border: "2px solid black",
                margin: "10px",
              }}
            >
              <div>{item.country}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
