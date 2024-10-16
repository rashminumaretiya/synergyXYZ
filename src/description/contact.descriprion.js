export const contactForm = [
  {
    input: {
      id: "name",
      type: "text",
      label: "Name",
      placeholder: "Name",
    },
  },
  {
    input: {
      id: "email",
      type: "email",
      label: "Email address",
      placeholder: "Email address",
    },
  },
  {
    input: {
      id: "phone-number",
      type: "number",
      label: "Phone number",
      placeholder: "Phone number",
    },
  },
  {
    input: {
      id: "budget",
      type: "number",
      label: "Budget",
      placeholder: "Budget",
    },
  },
  {
    select: {
      id: "service",
      label: "Type of Service",
      placeholder: "-choose-",
      menu: ["Service 1", "service 2"],
    },
  },
  {
    select: {
      id: "objective",
      label: "Objective",
      placeholder: "-choose-",
      menu: ["Objective 1", "Objective 2"],
    },
  },
  {
    textarea: {
      placeholder: "Send Us a Message...",
    },
  },
];
