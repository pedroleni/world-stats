import Layout from "../../components/Layout/Layout";
import styles from "./country.module.css";

const Country = ({ country }) => {
  return (
    <Layout title={country[0].name.common}>
      <div className={styles.country_container}>
        <div className={styles.overview_panel}>
          <img src={country[0].flags.svg} alt={country[0].name.common} />
          <h1 className={styles.overview_name}>{country[0].name.official}</h1>
          <div className={styles.overview_region}>{country[0].region}</div>
          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>
                {country[0].population}
              </div>
              <div className={styles.overview_label}>Population</div>
            </div>
            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country[0].area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
        <div className={styles.details_panel}>
          <h4 className={styles.details_panel_heading}>Details</h4>
          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Capital</div>
            <div className={styles.details_panel_value}>
              {country[0].capital}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Subregion</div>
            <div className={styles.details_panel_value}>
              {country[0].subregion}
            </div>
          </div>
          {country[0].borders ? (
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Borders</div>
              <div className={styles.details_panel_value}>
                {country[0].borders.map((border) => {
                  return <h1 key={border}>{border}.</h1>;
                })}
              </div>
            </div>
          ) : null}

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Latitudes</div>
            <div className={styles.details_panel_value}>
              {country[0].latlng.map((latitudes) => {
                return <h1 key={latitudes}>{latitudes}.</h1>;
              })}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Coat of arms</div>
            <div className={styles.details_panel_value}>
              <img
                src={country[0].coatOfArms.svg}
                alt={country[0].name.common}
              />
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Timezone</div>
            <div className={styles.details_panel_value}>
              {country[0].timezones}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);

  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};