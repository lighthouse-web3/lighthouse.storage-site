import { notify } from "./notification";
import emailjs from "@emailjs/browser";

export const sendEmail = async (email) => {
  let message = {
    to_emails: "support@lighthouse.storage",
    message: email,
  };
  emailjs
    .send(
      "service_wtwdhbv",
      "template_osbkn86",
      message,
      "user_sWuohBQz7vY1wvfFSbCDF"
    )
    .then(
      function (response) {
        // console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200) {
          notify("Email Submitted", "success");
          return true;
        }
      },
      function (error) {
        // console.log('FAILED...', error);
        return false;
      }
    );
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
