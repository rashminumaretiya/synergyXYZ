import Challenge2 from "../assets/image/png/chart3d.png";
import Challenge3 from "../assets/image/png/human3d.png";
import Challenge5 from "../assets/image/png/message3d.png";
import Challenge6 from "../assets/image/png/setting3d.png";
import Challenge4 from "../assets/image/png/smile3d.png";
import Challenge1 from "../assets/image/png/user3d.png";
import {
  ClockIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon
} from "../shared/icon";

export const HeaderFooterData = {
  data: {
    id: 1,
    attributes: {
      locale: "en",
      language: null,
      socialMediaLinks: {
        id: 2,
        facebook: "https://www.facebook.com/SynergyXYZMedia",
        instagram: "https://www.instagram.com/synergyxyzmedia/?hl=en",
        linkedIn: "https://www.linkedin.com/company/syneryxyz/",
      },
      nav: [
        {
          id: 5,
          name: "Services",
          slug: "/services",
          isBadge: true,
        },
        {
          id: 6,
          name: "BM@P METHOD",
          slug: "/bmap",
          isBadge: false,
        },
        {
          id: 8,
          name: "About",
          slug: "/aboutus",
          isBadge: false,
        },
        {
          id: 7,
          name: "Contact",
          slug: "/contactus",
          isBadge: false,
        },
      ],
      navButton: {
        id: 4,
        label: null,
        buttonText: "Start a project",
        slug: "/contactus",
      },
      footer: {
        id: 2,

        reservedRight:
          "© 2024 Synergy XYZ Marketing Sdn. Bhd. All rights reserved.",

        phone: "603 8080 1999",
        whatsAppNumber: "6019 986 6950",
        address:
          "IOI Business Park\nSS-02-09 Skypod Square, \nPersiaran Puchong Jaya Selatan, Bandar Puchong Jaya, \n47100 Puchong, Selangor",
        email: "mailto:contactus@synergyxyz.com",

        availableTime: "9 am – 6 pm",
        availableDays: "Monday - Friday",
        contactUs: "Contact Us",
        pageLinks: [
          {
            id: 17,
            label: "Privacy Policy",
            buttonText: null,
            slug: "/privacypolicy",
          },
          {
            id: 18,
            label: "Terms of Service",
            buttonText: null,
            slug: "/termsofservice",
          },
        ],
      },
      logo: {
        data: {
          id: 234,
          attributes: {
            name: "SynergyXYZ_logo.svg",
            url: "https://cdn.synergyxyz.com/Synergy_XYZ_logo_1b7507bfa2.svg",
          },
        },
      },
    },
    serviceCount: 10,
    serviceNames: [
      {
        name: "PARTNERSHIP",
        slug: "/services/synergy-nexus",
      },
      {
        name: "DATA ANALYTICS",
        slug: "/services/synergy-clarity",
      },
      {
        name: "CONTENT STRATEGY",
        slug: "/services/synergy-blueprint",
      },
      {
        name: "MEDIA SERVICES",
        slug: "/services/synergy-beacon",
      },
      {
        name: "COMMERCE & ECOMMERCE",
        slug: "/services/synergy-barter",
      },
      {
        name: "EVENTS & ACTIVATIONS",
        slug: "/services/synergy-ignite",
      },
      {
        name: "BRANDING",
        slug: "/services/synergy-catalyst",
      },
      {
        name: "CREATIVE CONTENT",
        slug: "/services/synergy-mosaic",
      },
      {
        name: "CUSTOMER RELATIONSHIP MANAGEMENT (CRM)",
        slug: "/services/synergy-bond",
      },
      {
        name: "TECH",
        slug: "/services/synergy-quantum",
      },
    ],
  },
};

export const footerList1 = [
  {
    icon: <PhoneIcon />,
    label: "603 8080 1999",
  },
  {
    icon: <WhatsappIcon />,
    label: "6019 986 6950",
  },
  {
    icon: <MailIcon />,
    label: "contactus@synergyxyz.com",
  },
];

export const footerList2 = [
  {
    icon: <LocationIcon />,
    label: (
      <>
        <span>IOI Business Park</span> SS-02-10 Skypod Square, Persiaran Puchong
        Jaya Selatan, Bandar Puchong Jaya,
        <br className="d-none d-sm-block" /> 47100 Puchong, Selangor
      </>
    ),
  },
  {
    icon: <ClockIcon />,
    label: "Monday - Friday 	9 am–6 pm",
  },
];

export const challangeBox = [
  {
    icon: Challenge1,
    label: "Reaching the Right Audience",
  },
  {
    icon: Challenge2,
    label: "Effectiveness Measurement",
  },
  {
    icon: Challenge3,
    label: "Changing Consumer Behaviour",
  },
  {
    icon: Challenge4,
    label: "Customer Loyalty",
  },
  {
    icon: Challenge5,
    label: "Consistency in Brand Message",
  },
  {
    icon: Challenge6,
    label: "Maintaining Relevance",
  },
];
