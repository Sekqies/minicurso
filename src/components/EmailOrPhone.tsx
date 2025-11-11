import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./EmailOrPhone.module.css";

const EmailOrPhone: FunctionComponent = () => {
  return (
    <div className={styles.emailOrPhone}>
      <TextField
        className={styles.emailOrPhoneLabel}
        variant="outlined"
        placeholder="Email or phone"
        sx={{ "& .MuiInputBase-root": { height: "60px" } }}
      />
      <button className={styles.forgotEmail}>Forgot email?</button>
    </div>
  );
};

export default EmailOrPhone;
