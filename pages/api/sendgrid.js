async function sendEmail(req, res) {
  try {
    let formBody = [];
    const details = req.body;
    for (const property in req.body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');

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
