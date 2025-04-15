export const handleContactForm = (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received contact message:", name, email, message);

  res.status(200).json({
    success: true,
    message: "Message sent successfully!",
  });
};
