// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, subject, message } = req.body
  //   console.log(req.body)

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shereefdeen4real@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // Create mail options
  const mailOptions = {
    from: email,
    to: 'shereefdeen4real@gmail.com',
    replyTo: email,
    subject: `${subject} — Contact Form: shereefdeenadebayo.com`,
    text: message,
    html: `
			<h1>New message from ${email}</h1>
			<h2>Name:</h2>
			<h3>${name}</h3>
			<h2>Subject:</h2>
			<h3>${subject}</h3>
			<h2>Message:</h2>
			<h3>${message}</h3>
		`,
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      return res.status(200).json({ message: 'Email sent' })
    })
  } catch (err: any) {
    return res.status(500).json({ error: err.message })
  }
}
