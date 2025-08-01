import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
export default CountryList;
