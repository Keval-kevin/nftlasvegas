import emailjs from "@emailjs/browser";

interface ISendInquiryEmailParams {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  contactMethod?: string;
}

export const sendInquiryEmail = async (props: ISendInquiryEmailParams) => {
  try {
    const { name, email, company, phone, message, contactMethod } = props;

     const result = await emailjs.send("service_vr4opi7", "template_qkl7goc", {
      name,
      email,
      company,
      phone,
      message,
      contactMethod
    },{
      publicKey: "MZusTXZlo-y8vIJRd"
    });
    return result;
  } catch (error) {
    console.error("Failed to send inquiry email:", error);
    throw new Error("Failed to send inquiry email. Please try again later.");
  }
};
