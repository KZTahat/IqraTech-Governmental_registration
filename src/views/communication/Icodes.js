const codes = [
  {
    primary: "Afghanistan",
    secondary: "+93",
  },
  {
    primary: "Aland Islands",
    secondary: "+358",
  },
  {
    primary: "Albania",
    secondary: "+355",
  },
  {
    primary: "Algeria",
    secondary: "+213",
  },
  {
    primary: "AmericanSamoa",
    secondary: "+1684",
  },
  {
    primary: "Andorra",
    secondary: "+376",
  },
  {
    primary: "Angola",
    secondary: "+244",
  },
  {
    primary: "Anguilla",
    secondary: "+1264",
  },
  {
    primary: "Antarctica",
    secondary: "+672",
  },
  {
    primary: "Antigua and Barbuda",
    secondary: "+1268",
  },
  {
    primary: "Argentina",
    secondary: "+54",
  },
  {
    primary: "Armenia",
    secondary: "+374",
  },
  {
    primary: "Aruba",
    secondary: "+297",
  },
  {
    primary: "Australia",
    secondary: "+61",
  },
  {
    primary: "Austria",
    secondary: "+43",
  },
  {
    primary: "Azerbaijan",
    secondary: "+994",
  },
  {
    primary: "Bahamas",
    secondary: "+1242",
  },
  {
    primary: "Bahrain",
    secondary: "+973",
  },
  {
    primary: "Bangladesh",
    secondary: "+880",
  },
  {
    primary: "Barbados",
    secondary: "+1246",
  },
  {
    primary: "Belarus",
    secondary: "+375",
  },
  {
    primary: "Belgium",
    secondary: "+32",
  },
  {
    primary: "Belize",
    secondary: "+501",
  },
  {
    primary: "Benin",
    secondary: "+229",
  },
  {
    primary: "Bermuda",
    secondary: "+1441",
  },
  {
    primary: "Bhutan",
    secondary: "+975",
  },
  {
    primary: "Bolivia, Plurinational State of",
    secondary: "+591",
  },
  {
    primary: "Bosnia and Herzegovina",
    secondary: "+387",
  },
  {
    primary: "Botswana",
    secondary: "+267",
  },
  {
    primary: "Brazil",
    secondary: "+55",
  },
  {
    primary: "British Indian Ocean Territory",
    secondary: "+246",
  },
  {
    primary: "Brunei Darussalam",
    secondary: "+673",
  },
  {
    primary: "Bulgaria",
    secondary: "+359",
  },
  {
    primary: "Burkina Faso",
    secondary: "+226",
  },
  {
    primary: "Burundi",
    secondary: "+257",
  },
  {
    primary: "Cambodia",
    secondary: "+855",
  },
  {
    primary: "Cameroon",
    secondary: "+237",
  },
  {
    primary: "Canada",
    secondary: "+1",
  },
  {
    primary: "Cape Verde",
    secondary: "+238",
  },
  {
    primary: "Cayman Islands",
    secondary: "+345",
  },
  {
    primary: "Central African Republic",
    secondary: "+236",
  },
  {
    primary: "Chad",
    secondary: "+235",
  },
  {
    primary: "Chile",
    secondary: "+56",
  },
  {
    primary: "China",
    secondary: "+86",
  },
  {
    primary: "Christmas Island",
    secondary: "+61",
  },
  {
    primary: "Cocos (Keeling) Islands",
    secondary: "+61",
  },
  {
    primary: "Colombia",
    secondary: "+57",
  },
  {
    primary: "Comoros",
    secondary: "+269",
  },
  {
    primary: "Congo",
    secondary: "+242",
  },
  {
    primary: "Congo, The Democratic Republic of the Congo",
    secondary: "+243",
  },
  {
    primary: "Cook Islands",
    secondary: "+682",
  },
  {
    primary: "Costa Rica",
    secondary: "+506",
  },
  {
    primary: "Cote d'Ivoire",
    secondary: "+225",
  },
  {
    primary: "Croatia",
    secondary: "+385",
  },
  {
    primary: "Cuba",
    secondary: "+53",
  },
  {
    primary: "Cyprus",
    secondary: "+357",
  },
  {
    primary: "Czech Republic",
    secondary: "+420",
  },
  {
    primary: "Denmark",
    secondary: "+45",
  },
  {
    primary: "Djibouti",
    secondary: "+253",
  },
  {
    primary: "Dominica",
    secondary: "+1767",
  },
  {
    primary: "Dominican Republic",
    secondary: "+1849",
  },
  {
    primary: "Ecuador",
    secondary: "+593",
  },
  {
    primary: "Egypt",
    secondary: "+20",
  },
  {
    primary: "El Salvador",
    secondary: "+503",
  },
  {
    primary: "Equatorial Guinea",
    secondary: "+240",
  },
  {
    primary: "Eritrea",
    secondary: "+291",
  },
  {
    primary: "Estonia",
    secondary: "+372",
  },
  {
    primary: "Ethiopia",
    secondary: "+251",
  },
  {
    primary: "Falkland Islands (Malvinas)",
    secondary: "+500",
  },
  {
    primary: "Faroe Islands",
    secondary: "+298",
  },
  {
    primary: "Fiji",
    secondary: "+679",
  },
  {
    primary: "Finland",
    secondary: "+358",
  },
  {
    primary: "France",
    secondary: "+33",
  },
  {
    primary: "French Guiana",
    secondary: "+594",
  },
  {
    primary: "French Polynesia",
    secondary: "+689",
  },
  {
    primary: "Gabon",
    secondary: "+241",
  },
  {
    primary: "Gambia",
    secondary: "+220",
  },
  {
    primary: "Georgia",
    secondary: "+995",
  },
  {
    primary: "Germany",
    secondary: "+49",
  },
  {
    primary: "Ghana",
    secondary: "+233",
  },
  {
    primary: "Gibraltar",
    secondary: "+350",
  },
  {
    primary: "Greece",
    secondary: "+30",
  },
  {
    primary: "Greenland",
    secondary: "+299",
  },
  {
    primary: "Grenada",
    secondary: "+1473",
  },
  {
    primary: "Guadeloupe",
    secondary: "+590",
  },
  {
    primary: "Guam",
    secondary: "+1671",
  },
  {
    primary: "Guatemala",
    secondary: "+502",
  },
  {
    primary: "Guernsey",
    secondary: "+44",
  },
  {
    primary: "Guinea",
    secondary: "+224",
  },
  {
    primary: "Guinea-Bissau",
    secondary: "+245",
  },
  {
    primary: "Guyana",
    secondary: "+595",
  },
  {
    primary: "Haiti",
    secondary: "+509",
  },
  {
    primary: "Holy See (Vatican City State)",
    secondary: "+379",
  },
  {
    primary: "Honduras",
    secondary: "+504",
  },
  {
    primary: "Hong Kong",
    secondary: "+852",
  },
  {
    primary: "Hungary",
    secondary: "+36",
  },
  {
    primary: "Iceland",
    secondary: "+354",
  },
  {
    primary: "India",
    secondary: "+91",
  },
  {
    primary: "Indonesia",
    secondary: "+62",
  },
  {
    primary: "Iran, Islamic Republic of Persian Gulf",
    secondary: "+98",
  },
  {
    primary: "Iraq",
    secondary: "+964",
  },
  {
    primary: "Ireland",
    secondary: "+353",
  },
  {
    primary: "Isle of Man",
    secondary: "+44",
  },
  {
    primary: "Israel",
    secondary: "+972",
  },
  {
    primary: "Italy",
    secondary: "+39",
  },
  {
    primary: "Jamaica",
    secondary: "+1876",
  },
  {
    primary: "Japan",
    secondary: "+81",
  },
  {
    primary: "Jersey",
    secondary: "+44",
  },
  {
    primary: "Jordan",
    secondary: "+962",
  },
  {
    primary: "Kazakhstan",
    secondary: "+77",
  },
  {
    primary: "Kenya",
    secondary: "+254",
  },
  {
    primary: "Kiribati",
    secondary: "+686",
  },
  {
    primary: "Korea, Democratic People's Republic of Korea",
    secondary: "+850",
  },
  {
    primary: "Korea, Republic of South Korea",
    secondary: "+82",
  },
  {
    primary: "Kuwait",
    secondary: "+965",
  },
  {
    primary: "Kyrgyzstan",
    secondary: "+996",
  },
  {
    primary: "Laos",
    secondary: "+856",
  },
  {
    primary: "Latvia",
    secondary: "+371",
  },
  {
    primary: "Lebanon",
    secondary: "+961",
  },
  {
    primary: "Lesotho",
    secondary: "+266",
  },
  {
    primary: "Liberia",
    secondary: "+231",
  },
  {
    primary: "Libyan Arab Jamahiriya",
    secondary: "+218",
  },
  {
    primary: "Liechtenstein",
    secondary: "+423",
  },
  {
    primary: "Lithuania",
    secondary: "+370",
  },
  {
    primary: "Luxembourg",
    secondary: "+352",
  },
  {
    primary: "Macao",
    secondary: "+853",
  },
  {
    primary: "Macedonia",
    secondary: "+389",
  },
  {
    primary: "Madagascar",
    secondary: "+261",
  },
  {
    primary: "Malawi",
    secondary: "+265",
  },
  {
    primary: "Malaysia",
    secondary: "+60",
  },
  {
    primary: "Maldives",
    secondary: "+960",
  },
  {
    primary: "Mali",
    secondary: "+223",
  },
  {
    primary: "Malta",
    secondary: "+356",
  },
  {
    primary: "Marshall Islands",
    secondary: "+692",
  },
  {
    primary: "Martinique",
    secondary: "+596",
  },
  {
    primary: "Mauritania",
    secondary: "+222",
  },
  {
    primary: "Mauritius",
    secondary: "+230",
  },
  {
    primary: "Mayotte",
    secondary: "+262",
  },
  {
    primary: "Mexico",
    secondary: "+52",
  },
  {
    primary: "Micronesia, Federated States of Micronesia",
    secondary: "+691",
  },
  {
    primary: "Moldova",
    secondary: "+373",
  },
  {
    primary: "Monaco",
    secondary: "+377",
  },
  {
    primary: "Mongolia",
    secondary: "+976",
  },
  {
    primary: "Montenegro",
    secondary: "+382",
  },
  {
    primary: "Montserrat",
    secondary: "+1664",
  },
  {
    primary: "Morocco",
    secondary: "+212",
  },
  {
    primary: "Mozambique",
    secondary: "+258",
  },
  {
    primary: "Myanmar",
    secondary: "+95",
  },
  {
    primary: "Namibia",
    secondary: "+264",
  },
  {
    primary: "Nauru",
    secondary: "+674",
  },
  {
    primary: "Nepal",
    secondary: "+977",
  },
  {
    primary: "Netherlands",
    secondary: "+31",
  },
  {
    primary: "Netherlands Antilles",
    secondary: "+599",
  },
  {
    primary: "New Caledonia",
    secondary: "+687",
  },
  {
    primary: "New Zealand",
    secondary: "+64",
  },
  {
    primary: "Nicaragua",
    secondary: "+505",
  },
  {
    primary: "Niger",
    secondary: "+227",
  },
  {
    primary: "Nigeria",
    secondary: "+234",
  },
  {
    primary: "Niue",
    secondary: "+683",
  },
  {
    primary: "Norfolk Island",
    secondary: "+672",
  },
  {
    primary: "Northern Mariana Islands",
    secondary: "+1670",
  },
  {
    primary: "Norway",
    secondary: "+47",
  },
  {
    primary: "Oman",
    secondary: "+968",
  },
  {
    primary: "Pakistan",
    secondary: "+92",
  },
  {
    primary: "Palau",
    secondary: "+680",
  },
  {
    primary: "Palestinian Territory, Occupied",
    secondary: "+970",
  },
  {
    primary: "Panama",
    secondary: "+507",
  },
  {
    primary: "Papua New Guinea",
    secondary: "+675",
  },
  {
    primary: "Paraguay",
    secondary: "+595",
  },
  {
    primary: "Peru",
    secondary: "+51",
  },
  {
    primary: "Philippines",
    secondary: "+63",
  },
  {
    primary: "Pitcairn",
    secondary: "+872",
  },
  {
    primary: "Poland",
    secondary: "+48",
  },
  {
    primary: "Portugal",
    secondary: "+351",
  },
  {
    primary: "Puerto Rico",
    secondary: "+1939",
  },
  {
    primary: "Qatar",
    secondary: "+974",
  },
  {
    primary: "Reunion",
    secondary: "+262",
  },
  {
    primary: "Romania",
    secondary: "+40",
  },
  {
    primary: "Russia",
    secondary: "+7",
  },
  {
    primary: "Rwanda",
    secondary: "+250",
  },
  {
    primary: "Saint Barthelemy",
    secondary: "+590",
  },
  {
    primary: "Saint Helena, Ascension and Tristan Da Cunha",
    secondary: "+290",
  },
  {
    primary: "Saint Kitts and Nevis",
    secondary: "+1869",
  },
  {
    primary: "Saint Lucia",
    secondary: "+1758",
  },
  {
    primary: "Saint Martin",
    secondary: "+590",
  },
  {
    primary: "Saint Pierre and Miquelon",
    secondary: "+508",
  },
  {
    primary: "Saint Vincent and the Grenadines",
    secondary: "+1784",
  },
  {
    primary: "Samoa",
    secondary: "+685",
  },
  {
    primary: "San Marino",
    secondary: "+378",
  },
  {
    primary: "Sao Tome and Principe",
    secondary: "+239",
  },
  {
    primary: "Saudi Arabia",
    secondary: "+966",
  },
  {
    primary: "Senegal",
    secondary: "+221",
  },
  {
    primary: "Serbia",
    secondary: "+381",
  },
  {
    primary: "Seychelles",
    secondary: "+248",
  },
  {
    primary: "Sierra Leone",
    secondary: "+232",
  },
  {
    primary: "Singapore",
    secondary: "+65",
  },
  {
    primary: "Slovakia",
    secondary: "+421",
  },
  {
    primary: "Slovenia",
    secondary: "+386",
  },
  {
    primary: "Solomon Islands",
    secondary: "+677",
  },
  {
    primary: "Somalia",
    secondary: "+252",
  },
  {
    primary: "South Africa",
    secondary: "+27",
  },
  {
    primary: "South Georgia and the South Sandwich Islands",
    secondary: "+500",
  },
  {
    primary: "South Sudan",
    secondary: "+211",
  },
  {
    primary: "Spain",
    secondary: "+34",
  },
  {
    primary: "Sri Lanka",
    secondary: "+94",
  },
  {
    primary: "Sudan",
    secondary: "+249",
  },
  {
    primary: "Suriname",
    secondary: "+597",
  },
  {
    primary: "Svalbard and Jan Mayen",
    secondary: "+47",
  },
  {
    primary: "Swaziland",
    secondary: "+268",
  },
  {
    primary: "Sweden",
    secondary: "+46",
  },
  {
    primary: "Switzerland",
    secondary: "+41",
  },
  {
    primary: "Syrian Arab Republic",
    secondary: "+963",
  },
  {
    primary: "Taiwan",
    secondary: "+886",
  },
  {
    primary: "Tajikistan",
    secondary: "+992",
  },
  {
    primary: "Tanzania, United Republic of Tanzania",
    secondary: "+255",
  },
  {
    primary: "Thailand",
    secondary: "+66",
  },
  {
    primary: "Timor-Leste",
    secondary: "+670",
  },
  {
    primary: "Togo",
    secondary: "+228",
  },
  {
    primary: "Tokelau",
    secondary: "+690",
  },
  {
    primary: "Tonga",
    secondary: "+676",
  },
  {
    primary: "Trinidad and Tobago",
    secondary: "+1868",
  },
  {
    primary: "Tunisia",
    secondary: "+216",
  },
  {
    primary: "Turkey",
    secondary: "+90",
  },
  {
    primary: "Turkmenistan",
    secondary: "+993",
  },
  {
    primary: "Turks and Caicos Islands",
    secondary: "+1649",
  },
  {
    primary: "Tuvalu",
    secondary: "+688",
  },
  {
    primary: "Uganda",
    secondary: "+256",
  },
  {
    primary: "Ukraine",
    secondary: "+380",
  },
  {
    primary: "United Arab Emirates",
    secondary: "+971",
  },
  {
    primary: "United Kingdom",
    secondary: "+44",
  },
  {
    primary: "United States",
    secondary: "+1",
  },
  {
    primary: "Uruguay",
    secondary: "+598",
  },
  {
    primary: "Uzbekistan",
    secondary: "+998",
  },
  {
    primary: "Vanuatu",
    secondary: "+678",
  },
  {
    primary: "Venezuela, Bolivarian Republic of Venezuela",
    secondary: "+58",
  },
  {
    primary: "Vietnam",
    secondary: "+84",
  },
  {
    primary: "Virgin Islands, British",
    secondary: "+1284",
  },
  {
    primary: "Virgin Islands, U.S.",
    secondary: "+1340",
  },
  {
    primary: "Wallis and Futuna",
    secondary: "+681",
  },
  {
    primary: "Yemen",
    secondary: "+967",
  },
  {
    primary: "Zambia",
    secondary: "+260",
  },
  {
    primary: "Zimbabwe",
    secondary: "+263",
  },
];

export default codes;
