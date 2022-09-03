
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
