"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import serviceBubble from "../../../assets/image/png/service-bubble.png";
import serviceShape1 from "../../../assets/image/png/service-shape1.png";
import serviceShape2 from "../../../assets/image/png/service-shape2.png";
import {
  brandingData,
  commerceECommerce,
  contentStrategy,
  creativeContent,
  customerRelationshipManagement,
  dataAnalytic,
  eventsActivations,
  media,
  partnership,
  technology,
} from "../../../description/subservices.description";
import CardSection from "../../../shared/CardSection";
import CircleJourney from "../../../shared/CircleJourney";
import GetInTouch from "../../../shared/GetInTouch";
import Heading from "../../../shared/Heading";
import { CheckIcon, CurvyLine } from "../../../shared/icon";
import LineHead from "../../../shared/LineHead";
import SYCol from "../../../shared/SYCol";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import styles from "./services.module.scss";

const Page = ({ params }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (params?.slug === "branding") {
      setData(brandingData);
    } else if (params?.slug === "content-strategy") {
      setData(contentStrategy);
    } else if (params?.slug === "creative-content") {
      setData(creativeContent);
    } else if (params?.slug === "media") {
      setData(media);
    } else if (params?.slug === "commerce-e-commerce") {
      setData(commerceECommerce);
    } else if (params?.slug === "customer-relationship-management") {
      setData(customerRelationshipManagement);
    } else if (params?.slug === "partnership") {
      setData(partnership);
    } else if (params?.slug === "events-activations") {
      setData(eventsActivations);
    } else if (params?.slug === "data-analytics") {
      setData(dataAnalytic);
    } else if (params?.slug === "technology") {
      setData(technology);
    }
  }, [params]);
  return (
    <>
      <div className={styles.serviceHead}>
        <div className={styles.serviceShape1}>
          <Image src={serviceShape1} alt="serviceDetailShape" />
        </div>
        <div className={styles.serviceShape2}>
          <Image src={serviceShape2} alt="serviceDetailShape" />
        </div>
        <SYContainer>
          <SYRow className="align-items-end flex-row-reverse">
            <SYCol md={5} lg={4}>
              <div className={styles.serviceBubble}>
                <div className={styles.serviceBubbleIcon}>
                  <Image src={data?.bannerInfo?.image} alt="create" />
                </div>
                <Image
                  src={serviceBubble}
                  alt="serviceBubble"
                  className={styles.bannerBubble}
                />
              </div>
            </SYCol>
            <SYCol md={7} lg={8}>
              <span>{data?.bannerInfo?.name} —</span>
              <h2
                dangerouslySetInnerHTML={{ __html: data?.bannerInfo?.title }}
              />
            </SYCol>
          </SYRow>
        </SYContainer>
      </div>
      <SYContainer>
        <LineHead description={data?.bannerInfo?.description} />
        <Heading className="mt-5" primary label={data?.mainTitle} />
        <div className={styles.serviceContent}>
          {data?.brandingContent?.map((data, i) => {
            return (
              <div className={styles.contentInner} key={i}>
                <CurvyLine />
                <h4>{data.title}</h4>
                {data.description && <p>{data.description}</p>}
                <ul
                  className={data?.listItem ? `list-item${data?.listItem}` : ""}
                >
                  {data?.list?.map((item, index) => {
                    return (
                      <li key={index}>
                        <h6>
                          <CheckIcon />
                          <span>{item?.title}</span>
                        </h6>
                        {item?.subList && (
                          <ul
                            className={
                              item.subListItem
                                ? `list-item${item?.subListItem}`
                                : ""
                            }
                          >
                            {item?.subList?.map((data, i) => (
                              <li key={i}>{data}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </SYContainer>
      <div className={styles.serviceBottomSection}>
        <CircleJourney list={data?.cards} heading={data?.processTitle} />
        <SYContainer className="my-5">
          <SYRow>
            <SYCol xs={12}>
              <Heading label={data?.whyChooseTitle} />
            </SYCol>
          </SYRow>
          <SYRow className="justify-content-center  row-gap-4">
            {data?.whyChooseBox?.map((data, index) => (
              <SYCol xs={12} md={6} xl={3} key={index}>
                <CardSection
                  src={data?.src}
                  label={data?.label}
                  description={data?.description}
                />
              </SYCol>
            ))}
          </SYRow>
        </SYContainer>
        <SYContainer>
          <SYRow>
            <SYCol xs={12}>
              <GetInTouch
                theme="light"
                heading={data?.CTATitle}
                descriptionClassName={data?.descriptionClassName}
                description={data?.description}
                variant={data?.buttons}
              />
            </SYCol>
          </SYRow>
        </SYContainer>
      </div>
    </>
  );
};

export default Page;
