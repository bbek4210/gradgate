export interface DistrictCity {
  district: string;
  cities: string[];
}

export const nepalDistrictsAndCities: DistrictCity[] = [
  {
    district: "Kathmandu",
    cities: [
      "Kathmandu",
      "Kirtipur",
      "Madhyapur Thimi",
      "Bhaktapur",
      "Changunarayan",
    ],
  },
  {
    district: "Lalitpur",
    cities: ["Lalitpur", "Godawari", "Mahalaxmi", "Konjyosom"],
  },
  {
    district: "Bhaktapur",
    cities: ["Bhaktapur", "Changunarayan", "Suryabinayak", "Madhyapur Thimi"],
  },
  {
    district: "Chitwan",
    cities: ["Bharatpur", "Ratnanagar", "Rapti", "Kalika"],
  },
  {
    district: "Pokhara",
    cities: ["Pokhara", "Lekhnath"],
  },
  {
    district: "Kaski",
    cities: ["Pokhara", "Lekhnath", "Annapurna", "Machhapuchchhre"],
  },
  {
    district: "Morang",
    cities: ["Biratnagar", "Urlabari", "Belbari", "Sundarharaicha"],
  },
  {
    district: "Jhapa",
    cities: ["Bhadrapur", "Mechinagar", "Damak", "Kankai"],
  },
  {
    district: "Sunsari",
    cities: ["Dharan", "Inaruwa", "Itahari", "Barahachhetra"],
  },
  {
    district: "Dhanusha",
    cities: ["Janakpur", "Sabaila", "Dhanushadham", "Mithila"],
  },
  {
    district: "Mahottari",
    cities: ["Jaleshwar", "Bardibas", "Gaushala", "Loharpatti"],
  },
  {
    district: "Sarlahi",
    cities: ["Malangwa", "Ishworpur", "Haripur", "Lalbandi"],
  },
  {
    district: "Rautahat",
    cities: ["Gaur", "Chandrapur", "Dewahi Gonahi", "Garuda"],
  },
  {
    district: "Bara",
    cities: ["Kalaiya", "Jeetpur Simara", "Kolhabi", "Nijgadh"],
  },
  {
    district: "Parsa",
    cities: ["Birgunj", "Pokhariya", "Bahudarmai", "Parsagadhi"],
  },
  {
    district: "Rupandehi",
    cities: ["Butwal", "Siddharthanagar", "Tilottama", "Devdaha"],
  },
  {
    district: "Kapilvastu",
    cities: ["Kapilvastu", "Banganga", "Krishnanagar", "Yashodhara"],
  },
  {
    district: "Nawalparasi",
    cities: ["Bardaghat", "Ramgram", "Sunwal", "Palhinandan"],
  },
  {
    district: "Banke",
    cities: ["Nepalgunj", "Kohalpur", "Rapti Sonari", "Narainapur"],
  },
  {
    district: "Dang",
    cities: ["Ghorahi", "Tulsipur", "Lamahi", "Gadhawa"],
  },
];

export const getDistrictOptions = () => {
  return [
    { value: "", label: "Select District" },
    ...nepalDistrictsAndCities.map((d) => ({
      value: d.district,
      label: d.district,
    })),
  ];
};

export const getCitiesByDistrict = (district: string) => {
  const districtData = nepalDistrictsAndCities.find(
    (d) => d.district === district
  );
  if (!districtData) {
    return [{ value: "", label: "Select City" }];
  }
  return [
    { value: "", label: "Select City" },
    ...districtData.cities.map((city) => ({
      value: city,
      label: city,
    })),
  ];
};
