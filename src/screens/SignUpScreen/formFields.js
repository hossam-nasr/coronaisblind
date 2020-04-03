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
    label:
      "If you could be quarantined anywhere in the world, where would it be?",
    initialValue: "",
    name: "quarantineLocation",
    type: "text"
  },
  {
    label: "Select all EDT (East Coast) times that work for you",
    initialValue: [],
    note: "We will try to schedule the calls for the same time every day",
    name: "times",
    type: "checkbox",
    options: [
      { value: "11am", label: "11am" },
      { value: "12pm", label: "Noon" },
      { value: "1pm", label: "1pm" },
      { value: "2pm", label: "2pm" },
      { value: "3pm", label: "3pm" },
      { value: "4pm", label: "4pm" },
      { value: "5pm", label: "5pm" },
      { value: "6pm", label: "6pm" },
      { value: "7pm", label: "7pm" },
      { value: "8pm", label: "8pm" },
      { value: "9pm", label: "9pm" },
      { value: "10pm", label: "10pm" },
      { value: "11pm", label: "11pm" },
      { value: "12am", label: "Midnight" },
      { value: "1am", label: "1am" }
    ]
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
  }
];

export default formFields;
