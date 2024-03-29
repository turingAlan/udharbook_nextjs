const { default: MoneySection } = require("./MoneySection");
import Styles from "../styles/EditDeletePage.module.css";

const EditPage = (props) => {
  return (
    <div className={Styles.editPage}>
      <h2 className={Styles.heading}>
        Edit {props.status === "singleUser" ? props.name : props.status} hisab
      </h2>
      <MoneySection
        section={props.status}
        name={props.name}
        money={props.money}
        reason={props.reason}
        date={props.date}
        status="edit"
      />
      <h1 className={Styles.closeButton} onClick={() => props.setPage(false)}>
        X
      </h1>
    </div>
  );
};

export default EditPage;
