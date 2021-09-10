async function sendEmail(req, res) {
  try {
    const payload = req.body;

    const formBody = Object.keys(payload).map((key) => {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(payload[key]);
      return `${encodedKey}=${encodedValue}`;
    }).join('&');

    await fetch(process.env.SEND_EMAIL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: formBody,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: '' });
}

export default sendEmail;
