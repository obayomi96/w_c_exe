const timeZones = {
  Afghanistan: "Asia/Kabul",
  Albania: "Europe/Tirane",
  Algeria: "Africa/Algiers",
  Andorra: "Europe/Andorra",
  Angola: "Africa/Luanda",
  Argentina: "America/Argentina/Buenos_Aires",
  Armenia: "Asia/Yerevan",
  Australia: "Australia/Sydney",
  Austria: "Europe/Vienna",
  Azerbaijan: "Asia/Baku",
  Bahamas: "America/Nassau",
  Bahrain: "Asia/Bahrain",
  Bangladesh: "Asia/Dhaka",
  Barbados: "America/Barbados",
  Belarus: "Europe/Minsk",
  Belgium: "Europe/Brussels",
  Belize: "America/Belize",
  Benin: "Africa/Porto-Novo",
  Bhutan: "Asia/Thimphu",
  Bolivia: "America/La_Paz",
  "Bosnia and Herzegovina": "Europe/Sarajevo",
  Botswana: "Africa/Gaborone",
  Brazil: "America/Sao_Paulo",
  Brunei: "Asia/Brunei",
  Bulgaria: "Europe/Sofia",
  "Burkina Faso": "Africa/Ouagadougou",
  Burundi: "Africa/Bujumbura",
  Cambodia: "Asia/Phnom_Penh",
  Cameroon: "Africa/Douala",
  Canada: "America/Toronto",
  "Cape Verde": "Atlantic/Cape_Verde",
  "Central African Republic": "Africa/Bangui",
  Chad: "Africa/Ndjamena",
  Chile: "America/Santiago",
  China: "Asia/Shanghai",
  Colombia: "America/Bogota",
  Comoros: "Indian/Comoro",
  Congo: "Africa/Brazzaville",
  "Costa Rica": "America/Costa_Rica",
  Croatia: "Europe/Zagreb",
  Cuba: "America/Havana",
  Cyprus: "Asia/Nicosia",
  "Czech Republic": "Europe/Prague",
  Denmark: "Europe/Copenhagen",
  Djibouti: "Africa/Djibouti",
  "Dominican Republic": "America/Santo_Domingo",
  Ecuador: "America/Guayaquil",
  Egypt: "Africa/Cairo",
  "El Salvador": "America/El_Salvador",
  "Equatorial Guinea": "Africa/Malabo",
  Estonia: "Europe/Tallinn",
  Ethiopia: "Africa/Addis_Ababa",
  Fiji: "Pacific/Fiji",
  Finland: "Europe/Helsinki",
  France: "Europe/Paris",
  Gabon: "Africa/Libreville",
  Gambia: "Africa/Banjul",
  Georgia: "Asia/Tbilisi",
  Germany: "Europe/Berlin",
  Ghana: "Africa/Accra",
  Greece: "Europe/Athens",
  Greenland: "America/Godthab",
  Guatemala: "America/Guatemala",
  Guinea: "Africa/Conakry",
  Guyana: "America/Guyana",
  Haiti: "America/Port-au-Prince",
  Honduras: "America/Tegucigalpa",
  "Hong Kong": "Asia/Hong_Kong",
  Hungary: "Europe/Budapest",
  Iceland: "Atlantic/Reykjavik",
  India: "Asia/Kolkata",
  Indonesia: "Asia/Jakarta",
  Iran: "Asia/Tehran",
  Iraq: "Asia/Baghdad",
  Ireland: "Europe/Dublin",
  Israel: "Asia/Jerusalem",
  Italy: "Europe/Rome",
  Jamaica: "America/Jamaica",
  Japan: "Asia/Tokyo",
  Jordan: "Asia/Amman",
  Kazakhstan: "Asia/Almaty",
  Kenya: "Africa/Nairobi",
  Kiribati: "Pacific/Tarawa",
  Kuwait: "Asia/Kuwait",
  Kyrgyzstan: "Asia/Bishkek",
  Laos: "Asia/Vientiane",
  Latvia: "Europe/Riga",
  Lebanon: "Asia/Beirut",
  Lesotho: "Africa/Maseru",
  Liberia: "Africa/Monrovia",
  Libya: "Africa/Tripoli",
  Lithuania: "Europe/Vilnius",
  Luxembourg: "Europe/Luxembourg",
  Madagascar: "Indian/Antananarivo",
  Malawi: "Africa/Blantyre",
  Malaysia: "Asia/Kuala_Lumpur",
  Maldives: "Indian/Maldives",
  Mali: "Africa/Bamako",
  Malta: "Europe/Malta",
  Mauritania: "Africa/Nouakchott",
  Mauritius: "Indian/Mauritius",
  Mexico: "America/Mexico_City",
  Moldova: "Europe/Chisinau",
  Monaco: "Europe/Monaco",
  Mongolia: "Asia/Ulaanbaatar",
  Montenegro: "Europe/Podgorica",
  Morocco: "Africa/Casablanca",
  Mozambique: "Africa/Maputo",
  Myanmar: "Asia/Yangon",
  Namibia: "Africa/Windhoek",
  Nepal: "Asia/Kathmandu",
  Netherlands: "Europe/Amsterdam",
  "New Zealand": "Pacific/Auckland",
  Nicaragua: "America/Managua",
  Niger: "Africa/Niamey",
  Nigeria: "Africa/Lagos",
  "North Korea": "Asia/Pyongyang",
  Norway: "Europe/Oslo",
  Oman: "Asia/Muscat",
  Pakistan: "Asia/Karachi",
  Panama: "America/Panama",
  "Papua New Guinea": "Pacific/Port_Moresby",
  Paraguay: "America/Asuncion",
  Peru: "America/Lima",
  Philippines: "Asia/Manila",
  Poland: "Europe/Warsaw",
  Portugal: "Europe/Lisbon",
  Qatar: "Asia/Qatar",
  Romania: "Europe/Bucharest",
  Russia: "Europe/Moscow",
  Rwanda: "Africa/Kigali",
  "Saudi Arabia": "Asia/Riyadh",
  Senegal: "Africa/Dakar",
  Serbia: "Europe/Belgrade",
  Seychelles: "Indian/Mahe",
  "Sierra Leone": "Africa/Freetown",
  Singapore: "Asia/Singapore",
  Slovakia: "Europe/Bratislava",
  Slovenia: "Europe/Ljubljana",
  "Solomon Islands": "Pacific/Guadalcanal",
  Somalia: "Africa/Mogadishu",
  "South Africa": "Africa/Johannesburg",
  "South Korea": "Asia/Seoul",
  Spain: "Europe/Madrid",
  "Sri Lanka": "Asia/Colombo",
  Sudan: "Africa/Khartoum",
  Suriname: "America/Paramaribo",
  Sweden: "Europe/Stockholm",
  Switzerland: "Europe/Zurich",
  Syria: "Asia/Damascus",
  Taiwan: "Asia/Taipei",
  Tajikistan: "Asia/Dushanbe",
  Tanzania: "Africa/Dar_es_Salaam",
  Thailand: "Asia/Bangkok",
  Togo: "Africa/Lome",
  Tonga: "Pacific/Tongatapu",
  "Trinidad and Tobago": "America/Port_of_Spain",
  Tunisia: "Africa/Tunis",
  Turkey: "Europe/Istanbul",
  Turkmenistan: "Asia/Ashgabat",
  Uganda: "Africa/Kampala",
  Ukraine: "Europe/Kiev",
  "United Arab Emirates": "Asia/Dubai",
  "United Kingdom": "Europe/London",
  USA: "America/New_York",
  Uruguay: "America/Montevideo",
  Uzbekistan: "Asia/Tashkent",
  Vanuatu: "Pacific/Efate",
  Venezuela: "America/Caracas",
  Vietnam: "Asia/Ho_Chi_Minh",
  "Western Sahara": "Africa/El_Aaiun",
  Yemen: "Asia/Aden",
  Zambia: "Africa/Lusaka",
  Zimbabwe: "Africa/Harare",
};
// 174

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchValue = document.getElementById("search-input").value.trim();
  if (!searchValue) {
    updateSearchedTime(searchValue);
    document.getElementById("result-div").style.display = "none";
    document.getElementById("def1").style.display = "block";
    document.getElementById("def2").style.display = "block";
    document.getElementById("def3").style.display = "block";
  } else {
    document.getElementById("def1").style.display = "none";
    document.getElementById("def2").style.display = "none";
    document.getElementById("def3").style.display = "none";
    document.getElementById("result-div").style.display = "block";
  }
  searchInput.addEventListener("keyup", handleSearch);
  setInterval(updateDefaultTimes, 1000);
});

const updateDefaultTimes = () => {
  let d = new Date();
  document.getElementById("nigeria").innerHTML = d
    .toLocaleString("en-US", { timeZone: timeZones["Nigeria"] })
    .split(", ")[1];
  document.getElementById("usa").innerHTML = d
    .toLocaleString("en-US", { timeZone: timeZones["USA"] })
    .split(", ")[1];
  document.getElementById("austria").innerHTML = d
    .toLocaleString("en-US", { timeZone: timeZones["Austria"] })
    .split(", ")[1];
};

const updateSearchedTime = (country) => {
  let d = new Date();
  const timeZone = timeZones[country];
  if (timeZone) {
    document.getElementById("search-result").innerHTML = d
      .toLocaleString("en-US", { timeZone })
      .split(", ")[1];
    document.getElementById("result-div").style.display = "block";
    document.getElementById("def1").style.display = "none";
    document.getElementById("def2").style.display = "none";
    document.getElementById("def3").style.display = "none";
    document.getElementById("search-term").innerText = country;
  } else {
    document.getElementById("result-div").style.display = "none";
    document.getElementById("def1").style.display = "block";
    document.getElementById("def2").style.display = "block";
    document.getElementById("def3").style.display = "block";
    document.getElementById("search-result").innerText = "Not found";
    document.getElementById("search-term").innerText = "";
  }
};

const handleSearch = () => {
  const searchValue = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  const matchingCountry = Object.keys(timeZones).find(
    (country) => country.toLowerCase() === searchValue
  );

  if (matchingCountry) {
    updateSearchedTime(matchingCountry);
    document.getElementById("result-div").style.display = "block";
  } else {
    document.getElementById("result-div").style.display = "none";
    document.getElementById("def1").style.display = "block";
    document.getElementById("def2").style.display = "block";
    document.getElementById("def3").style.display = "block";
  }
};

setInterval(updateDefaultTimes, 1000);
