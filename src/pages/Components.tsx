import { FunctionComponent } from "react";
import SubFrameA from "../components/SubFrameA";
import styles from "./Components.module.css";

const Components: FunctionComponent = () => {
  return (
    <div className={styles.components}>
      <SubFrameA />
      <div className={styles.languageSelectionFrame}>
        <div className={styles.englishUnitedStates}>
          English (United states)
        </div>
      </div>
    </div>
  );
};

export default Components;
