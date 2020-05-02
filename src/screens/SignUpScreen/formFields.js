const formFields = [
  {
    label: "Email address",
    initialValue: "",
    name: "email",
    type: "email",
    note:
      "Please use your college email, so we can be sure that only college students participate in this experience. We'll never share your email with anyone else."
  },
  {
    label: "First Name",
    initialValue: "",
    name: "firstName",
    type: "text"
  },
  {
    label: "Last Name",
    initialValue: "",
    name: "lastName",
    type: "text"
  },
  {
    label: "Password",
    initialValue: "",
    name: "password",
    type: "password"
  },
  {
    label: "Confirm Password",
    initialValue: "",
    name: "passwordConfirm",
    type: "password"
  },
  {
    label: "Your Venmo",
    initialValue: "",
    name: "venmo",
    type: "text",
    note:
      "Please Venmo $15 to @collegequarantine to help run this experience. Let us know if this cost is a financial burden for you. We will be donating 50% of this cost to provide aid to coronavirus patients and medical workers."
  },
  {
    label: "I am...",
    initialValue: "",
    name: "gender",
    type: "radio",
    options: [
      {
        value: "male",
        label: "Male"
      },
      {
        value: "female",
        label: "Female"
      },
      {
        value: "other",
        label: "Other"
      }
    ]
  },
  {
    label: "I am interested in people who are...",
    note:
      "This experience does not have to be romantic. Feel free to select all genders if you want to meet people for friends. ",
    initialValue: [],
    name: "lookingFor",
    type: "checkbox",
    options: [
      {
        value: "male",
        label: "Male"
      },
      {
        value: "female",
        label: "Female"
      },
      {
        value: "other",
        label: "Other"
      }
    ]
  },
  {
    label: "Friend Referrals",
    note:
      "Do you know if any of your friends would be interested in this experience? If so, add their emails here!",
    name: "friendEmails",
    type: "text"
  }
];

export default formFields;
