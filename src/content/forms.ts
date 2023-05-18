enum InputsEnum {
  SSN = "ssn",
  DOB = "dob",
  Email = "email",
  Text = "text",
  FirstName = "first_name",
  LastName = "last_name",
  FullName = "full_name",
}

export type FormElementType = {
  elementName: string;
  label?: string;
  elementType: InputsEnum | "Message";
  isRequired?: boolean;
  placeholder?: string;
  errorMessage?: string;
  content?: {
    title: string;
    text: string;
  };
};

export type FormType = {
  elements: FormElementType[];
  submitAction: (formValues: any) => void;
};

export type FormsType = {
  stepId: string;
  title: string;
  subtitle?: string;
  form: FormType;
};

// This is a POC of the possible response we'd get from the Headless CMS or backend.
export const testForms: FormsType[] = [
  {
    stepId: "/test/name-and-email",
    title: "Name and Address",
    subtitle: "Please enter your name and email.",
    form: {
      elements: [
        {
          elementName: "First Name",
          elementType: InputsEnum.FirstName,
          isRequired: false,
        },
        {
          elementName: "Last Name",
          elementType: InputsEnum.LastName,
          isRequired: false,
        },
        {
          elementName: "Email",
          elementType: InputsEnum.Email,
        },
        {
          elementName: "Message",
          elementType: "Message",
          content: {
            title: "Message Title",
            text: "I'm baby fanny pack adaptogen vape JOMO grailed, plaid 90's pitchfork kale chips polaroid sriracha cred pinterest celiac. Hell of photo booth humblebrag vexillologist ramps normcore organic tbh chicharrones. Paleo hammock meh shaman cupping four dollar toast umami 8-bit everyday carry jean shorts venmo blackbird spyplane. +1 pok pok distillery swag master cleanse hammock ugh hexagon. Chia vaporware gastropub chillwave disrupt pug VHS helvetica pok pok squid drinking vinegar.",
          },
        },
      ],
      submitAction: (formValues) => {
        console.log("Name & Email Submit Values:");
        console.log(formValues);
      },
    },
  },
  {
    stepId: "/test/name-and-email-different-order",
    title: "Name and Email Different Order",
    subtitle:
      "This is the same form but in a different order.  All we have to do is move elements around in the array.",
    form: {
      elements: [
        {
          elementName: "Email",
          elementType: InputsEnum.Email,
        },
        {
          elementName: "Message",
          elementType: "Message",
          content: {
            title: "Message Title",
            text: "I'm baby fanny pack adaptogen vape JOMO grailed, plaid 90's pitchfork kale chips polaroid sriracha cred pinterest celiac. Hell of photo booth humblebrag vexillologist ramps normcore organic tbh chicharrones. Paleo hammock meh shaman cupping four dollar toast umami 8-bit everyday carry jean shorts venmo blackbird spyplane. +1 pok pok distillery swag master cleanse hammock ugh hexagon. Chia vaporware gastropub chillwave disrupt pug VHS helvetica pok pok squid drinking vinegar.",
          },
        },
        {
          elementName: "First Name",
          elementType: InputsEnum.FirstName,
          isRequired: false,
        },
        {
          elementName: "Last Name",
          elementType: InputsEnum.LastName,
          isRequired: true,
        },
      ],
      submitAction: (formValues) => {
        console.log("Diff Order Submit Values:");
        console.log(formValues);
      },
    },
  },
];

export const displayStep = `{
    stepId: "/test/name-address",
    title: "Name and Address",
    subtitle: "Please enter your name and address.",
    form: {
      elements: [
        {
          elementName: "First Name",
          elementType: InputsEnum.FirstName,
          isRequired: false,
        },
        {
          elementName: "Last Name",
          elementType: InputsEnum.LastName,
          isRequired: true,
        },
        {
          elementName: "Email",
          elementType: InputsEnum.Email,
        },
        {
          elementName: "Message",
          elementType: "Message",
          content: {
            title: "Message Title",
            text: "I'm baby fanny pack adaptogen vape JOMO grailed, plaid 90's 
                pitchfork kale chips polaroid sriracha cred pinterest celiac. Hell of
                photo booth humblebrag vexillologist ramps normcore organic tbh 
                chicharrones. Paleo hammock meh shaman cupping four dollar toast umami 
                8-bit everyday carry jean shorts venmo blackbird spyplane. +1 pok pok 
                distillery swag master cleanse hammock ugh hexagon. Chia vaporware 
                gastropub chillwave disrupt pug VHS helvetica pok pok squid drinking 
                vinegar.",
          },
        },
      ],
      submitAction: (formValues) => {
        console.log("Name & Email Submit Values:");
        console.log(formValues);
      },
    },
  }`;
