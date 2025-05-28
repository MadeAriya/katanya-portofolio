import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Pesan dari ${name} <${email}>`,
    text: `Nama Pengirim: ${name}\nEmail Pengirim: ${email}\nPesan: ${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: 'Email terkirim' });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
