import React from "react";
import Stack from "@mui/material/Stack";
import styles from "./DisplayDetails.module.scss";

export const DisplayDetails: React.FC<{
  text: string;
  value: string | number;
}> = ({ text, value }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      className={styles.cardText}
    >
      <p>{text}</p>
      <p>{value}</p>
    </Stack>
  );
};
