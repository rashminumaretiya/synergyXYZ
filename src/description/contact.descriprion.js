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
      menu: [
        { value: "service1", label: "Service 1" },
        { value: "service2", label: "Service 2" },
      ],
    },
  },
  {
    select: {
      id: "objective",
      label: "Objective",
      placeholder: "-choose-",
      menu: [
        { value: "objective1", label: "Objective 1" },
        { value: "objective2", label: "Objective 2" },
      ],
    },
  },
  {
    textarea: {
      placeholder: "Send Us a Message...",
    },
  },
];
