import CountriesTable from "../components/CountriesTable/CountriesTable.jsx";
import { useState } from "react";
import Layout from "../components/Layout/Layout.jsx";
import SearchInput from "../components/SearchInput/SearchInput.jsx";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(keyword) ||
  country.name.official.toLowerCase().includes(keyword) ||
  country.region.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder="Filter by Name, Region or Subregion"
       onChange={onInputChange}/>
      <CountriesTable countries={filteredCountries} />
    </Layout>
    
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};