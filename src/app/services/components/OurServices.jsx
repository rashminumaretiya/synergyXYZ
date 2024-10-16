import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";
import GredientBox from "../../../assets/image/png/gradient-box.png";
import { serviceBox } from "../../../description/services.description";
import Heading from "../../../shared/Heading";
import SYContainer from "../../../shared/SYContainer";
import styles from "./OurServices.module.scss";
import SYRow from "../../../shared/SYRow";
import SYCol from "../../../shared/SYCol";

const OurServices = () => {
  return (
    <div className={styles.ourServiceMain}>
      <Image
        src={BgShape}
        alt="Bg shape"
        className="w-100 position-relative z-1"
        width="100%"
        height="auto"
      />
      <SYContainer className="position-relative z-2">
        <Heading label="Explore Our Services" />
        <div className={styles.wrapper}>
          <SYRow className="row-gap-4">
            {serviceBox.map((data, index) => {
              return (
                <SYCol
                  xs={12}
                  md={6}
                  className={styles.serviceBoxCol}
                  key={index}
                >
                  <div className={styles.serviceBox}>
                    <Image
                      src={GredientBox}
                      alt="bg-gredient"
                      height="100%"
                      width="100%"
                      className={styles.gredientImage}
                    />
                    <div className={styles.content}>
                      <div className={styles.headWrap}>
                        <span style={{ backgroundColor: data?.bgColor }}></span>
                        <h4>{data?.head}</h4>
                      </div>
                      <div className={styles.seviceImage}>
                        <Image
                          src={data?.src}
                          alt="sevice"
                          height={250}
                          width={250}
                        />
                      </div>
                    </div>
                    <div className={styles.hoverContent}>
                      <h4>{data?.head}</h4>
                      <p>{data?.description}. </p>
                      <div className={`btn ${styles.btnOutline}`}>
                        <span>Learn more</span>
                      </div>
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

export default OurServices;
