import Stack from "@mui/material/Stack";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./headerStyles.module.scss";

export const Header: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className={styles.container}
    >
      <h1>Where in the world?</h1>
      <Stack direction="row" alignItems="center" spacing={1}>
        <DarkModeIcon />
        <p>Dark Mode</p>
      </Stack>
    </Stack>
  );
};
