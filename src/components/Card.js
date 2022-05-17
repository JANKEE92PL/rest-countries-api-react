import axios from "axios";
import { useState, useEffect } from "react";

export default function Card() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    setCountries(data);
  };
  return (
    <div class="grid grid-cols-4 gap-6">
      {countries.map((country) => (
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg object-cover"
              src={country.flags.png}
              alt={country.flag}
            />
          </a>
          <div class="px-6">
            <h2 class="text-gray-900 text-xl font-bold mb-5">
              {country.name.common}
            </h2>
            <p class="text-gray-700 text-base font-semibold mb-2">
              Population:&nbsp;
              <span className="font-normal">{country.population}</span>
            </p>
            <p class="text-gray-700 text-base font-semibold mb-2">
              Region:&nbsp;
              <span className="font-normal">{country.region}</span>
            </p>
            <p class="text-gray-700 text-base font-semibold mb-8">
              Capital:&nbsp;
              <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
