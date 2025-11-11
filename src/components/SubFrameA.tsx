import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EmailOrPhone from "./EmailOrPhone";
import styles from "./SubFrameA.module.css";




const SubFrameA: FunctionComponent = () => {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/warning")
  }
    useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <section className={styles.subFrameA}>
      <div className={styles.fRAMEB}>
        <div className={styles.loginBody} />
        <div className={styles.fRAMEC}>
          <div className={styles.googleLoginIcon}>
            <div className={styles.googleIconParent}>
              <div className={styles.googleIcon}>
                <img
                  className={styles.googleSymbolsvgIcon}
                  loading="eager"
                  alt=""
                  src="/google-symbolsvg.svg"
                />
              </div>
              <h1 className={styles.signIn}>
                <span className={styles.sign}>{`Sign `}</span>
                <span className={styles.in}>in</span>
              </h1>
            </div>
            <h3 className={styles.useYourGoole}>Use your Google Account</h3>
          </div>
        </div>
        <div className={styles.subFrameJ}>
          <div className={styles.guestModeMessage}>
            <EmailOrPhone />
            <button className={styles.notYourComputerContainer}>
              <span
                className={styles.notYourComputer}
              >{`Not your computer? Use Guest mode to sign in privately. `}</span>
              <b className={styles.learnMore}>Learn more</b>
            </button>
          </div>
          <div className={styles.footerFrame}>
            <div className={styles.sectionB}>
              <button className={styles.createAccount} autoFocus={true}>
                Create account
              </button>
              <Button
                onClick = {handleNext}
                className={styles.nextButton}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14.5",
                  background: "#0958cf",
                  borderRadius: "30px",
                  "&:hover": { background: "#0958cf" },
                  width: 91,
                  height: 47,
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.helpTermsFrame}>
        <label className={styles.help}>Help</label>
        <label className={styles.privacy}>Privacy</label>
        <label className={styles.terms}>Terms</label>
      </div>
    </section>
  );
};

export default SubFrameA;
