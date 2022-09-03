import Layout from "../components/Layout/Layout.jsx";
import SearchInput from "../components/SearchInput/SearchInput.jsx";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder="Filter by name" />
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