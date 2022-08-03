import emailjs from "emailjs-com";

const serviceId = "service_rh1n9hr";
// const serviceId = "service_bw5trls";
const templateId = "template_1i5qdjs";
// const templateId = "template_qrhksh8";
const publicKey = "Ihq_Z6r2ep5EXazCi";
// const publicKey = "gVXj2ObYvb150nD9d";

const sendEmail = async (
  firstName,
  secondName,
  email,
  phone,
  linkedInId,
  visaType,
  job_title,
  company_name,
  typingScore
) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        firstName,
        secondName,
        email,
        phone,
        linkedInId,
        visaType,
        job_title,
        company_name,
        typingScore,
      },
      publicKey
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;
