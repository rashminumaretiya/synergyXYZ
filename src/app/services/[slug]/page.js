"use client";
import Image from "next/image";
import BgShape from "../../../assets/image/png/bg-shape.png";
import bubble from "../../../assets/image/png/BMAP-bubble.png";
import brandingIcon from "../../../assets/image/png/branding-icon.png";
import campaignExecution from "../../../assets/image/png/campaign-execution.png";
import creativeContent from "../../../assets/image/png/creative-content.png";
import discover from "../../../assets/image/png/discover.png";
import influencerIdentification from "../../../assets/image/png/influencer-identification.png";
import negotiation from "../../../assets/image/png/negotiation.png";
import serviceBubble from "../../../assets/image/png/service-bubble.png";
import serviceDetailShape from "../../../assets/image/png/service-detail-shape.png";
import serviceShape1 from "../../../assets/image/png/service-shape1.png";
import serviceShape2 from "../../../assets/image/png/service-shape2.png";
import strategize from "../../../assets/image/png/strategize.png";
import whyChoose from "../../../assets/image/png/why-choose-1.png";
import whyChoose4 from "../../../assets/image/png/why-choose-4.png";
import CardSection from "../../../shared/CardSection";
import CircleJourney from "../../../shared/CircleJourney";
import Heading from "../../../shared/Heading";
import { CheckIcon, CurvyLine } from "../../../shared/icon";
import LineHead from "../../../shared/LineHead";
import SYCol from "../../../shared/SYCol";
import SYContainer from "../../../shared/SYContainer";
import SYRow from "../../../shared/SYRow";
import styles from "./services.module.scss";
import GetInTouch from "../../../shared/GetInTouch";

const brandingContent = [
  {
    title: "Strategic Brand Development",
    description:
      "We take a holistic approach to enhance your brand, ensuring every element of your brand development marketing speaks with clarity and purpose:",
    list: [
      {
        title: "In-depth market research and analysis",
        subListItem: 4,
        subList: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
        ],
      },
      { title: "Competitor landscape evaluation" },
      { title: "Target audience profiling" },
      { title: "Brand positioning strategy" },
      { title: "Brand architecture development" },
    ],
  },
  {
    title: "Distinctive Brand Identity",
    description:
      "From visuals that captivate to the words that stir emotion, we create a brand identity that is unmistakably yours:",
    listItem: 2,
    list: [
      {
        title: "Logo design and brand guidelines",
      },
      {
        title: "Brand story development",
      },
      {
        title: "Visual asset creation",
      },
      {
        title: "Tone of voice and messaging framework",
      },
      {
        title: "Color palette and typography selection",
      },
    ],
  },
  {
    title: "Building Brand Loyalty",
    description:
      "We don't just aim for connection; we forge deep loyalty that creates emotional bonds between your brand and audience through effective brand marketing:",
    list: [
      {
        title: "Customer experience mapping",
      },
      { title: "Brand touchpoint optimization" },
      { title: "Loyalty program development" },
      { title: "Community building strategies" },
      { title: "Brand advocacy initiatives" },
    ],
  },
];

const cards = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We learn about your brand’s values, audience, and goals to inform our partnership strategy.",
    img: discover,
    bubbleImage: bubble,
  },
  {
    id: 2,
    title: "Influencer Identification",
    description:
      "We identify influencers who are a perfect fit for your brand.",
    img: influencerIdentification,
    bubbleImage: bubble,
  },
  {
    id: 3,
    title: "Strategy Development",
    description:
      "We craft a partnership strategy tailored to your goals and the influencer’s strengths.",
    img: strategize,
    bubbleImage: bubble,
  },
  {
    id: 4,
    title: "Outreach and Negotiation",
    description:
      "We handle all communication and contract negotiation with influencers.",
    img: negotiation,
    bubbleImage: bubble,
  },
  {
    id: 5,
    title: "Campaign Execution",
    description:
      "We manage content creation, approval processes, and publication schedules to ensure smooth execution.",
    img: campaignExecution,
    bubbleImage: bubble,
  },
];
const whyChooseBox = [
  {
    src: whyChoose,
    label: "Fluid & Flexible",
    description: [
      {
        textNormal: "Enter at any stage of your marketing journey with",
        textBold: "tailored strategies",
      },
      {
        textNormal: "to ensure your brand evolves with",
        textBold: "ease and agility, encompassing various type of marketing.",
      },
    ],
  },
  {
    src: creativeContent,
    label: "Consumer-Centric",
    description: [
      {
        textNormal: "Every interaction is",
        textBold: "guided by data insights",
      },
      {
        textNormal:
          "into the customer journey, keeping your audience at the centre of every decision.",
      },
    ],
  },
  {
    src: whyChoose4,
    label: "Integrated & Holistic",
    description: [
      {
        textNormal:
          "Seamless coordination between branding, content, media, and more, eliminating silos, creating campaigns that resonate and",
        textBold: "deliver impact across all type of marketing.",
      },
    ],
  },
];

const page = () => {
  const buttons = [
    { name: "Start Your Branding Journey", variant: "primary" },
    { name: "Explore Our Other Services", variant: "purple" },
  ];
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
          <SYRow className="align-items-end">
            <SYCol md={8}>
              <span>BRANDING —</span>
              <h2>
                Create a Brand <br />
                Experience that Lasts
              </h2>
            </SYCol>
            <SYCol md={4}>
              <div className={styles.serviceBubble}>
                <div className={styles.serviceBubbleIcon}>
                  <Image src={brandingIcon} alt="create" />
                </div>
                <Image src={serviceBubble} alt="serviceBubble" />
              </div>
            </SYCol>
          </SYRow>
        </SYContainer>
        <Image
          src={serviceDetailShape}
          alt="serviceDetailShape"
          layout="responsive"
        />
      </div>
      <SYContainer>
        <LineHead
          description={
            <>
              <span>We don't just create brands</span>
              —we breathe life into your brand, crafting identities that
              resonate with your audience and leave a lasting impact. As a
              leading branding agency in Malaysia, we use{" "}
              <span>
                AI-powered insights to shape brands that rise above the noise,
              </span>
              developing a unique brand identity that builds loyalty and drives
              business growth.
            </>
          }
        />
        <Heading className="mt-5" primary label="Our Branding Approach" />
        <div className={styles.serviceContent}>
          {brandingContent.map((data, i) => {
            return (
              <div className={styles.contentInner} key={i}>
                <CurvyLine />
                <h4>{data.title}</h4>
                <p>{data.description}</p>
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
        <Image
          src={BgShape}
          alt="Bg shape"
          className="w-100 position-relative z-1"
          width="100%"
          height="auto"
        />
        <CircleJourney list={cards} heading="Our Partnership Process" />
        <SYContainer className="my-5">
          <SYRow>
            <SYCol xs={12}>
              <Heading label={<>Why Work With Us?</>} />
            </SYCol>
          </SYRow>
          <SYRow className="justify-content-center">
            {whyChooseBox.map((data, index) => (
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
                heading="Ready to Bring Your Brand to Life?"
                variant={buttons}
              />
            </SYCol>
          </SYRow>
        </SYContainer>
      </div>
    </>
  );
};

export default page;
