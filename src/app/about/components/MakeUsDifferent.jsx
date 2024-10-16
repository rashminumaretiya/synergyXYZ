import { makeDifferentBox } from "../../../description/aboutUs.description";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import styles from "./MakeUsDifferent.module.scss";
import SYCol from "../../../shared/SYCol";
import SYRow from "../../../shared/SYRow";
const MakeUsDifferent = () => {
  return (
    <div className={styles.makeUsDifferentMain}>
      <SYContainer>
        <div className={styles.wrapper}>
          <Heading label="What Makes Us Different" />
          <SYRow className="row-gap-5">
            {makeDifferentBox?.map((data, index) => {
              return (
                <SYCol xs={12} sm={6} key={index}>
                  <div className={styles.singleBox}>
                    {data?.icon}
                    <div className={styles.content}>
                      <h5>{data?.head}</h5>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </SYCol>
              );
            })}
          </SYRow>
        </div>
      </SYContainer>
    </div>
  );
};

export default MakeUsDifferent;
