import { mailOptions, transporter } from "../../../config/nodemailer";

const generateEmailContent = (data) => {

  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${key}: \n${val} \n \n`),"");
      
  return {
    text: stringData,
  };
};

const handler = async (req, res) => {

  if (req.method === "POST") {
    const data = req.body;

    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      return res.status(200).json({ success: true });

    } catch (err) {
      console.log(err);

      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;