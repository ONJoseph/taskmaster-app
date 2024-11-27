const { Message } = require('../models');

exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await Message.create({ name, email, message });
    res.status(201).json({ message: 'Message sent successfully!', newMessage });
  } catch (err) {
    res.status(500).json({ error: 'Error sending message' });
  }
};
