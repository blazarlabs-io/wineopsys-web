import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, role, message, wantsDemo } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,        
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: `"WineOpSys Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? process.env.GMAIL_USER, 
      subject: `New demo request from ${name}`,
      text: `
        New contact / demo request:

        Name: ${name}
        Email: ${email}
        Winery / Company: ${company || "-"}
        Role: ${role || "-"}
        Wants demo: ${wantsDemo ? "Yes" : "No"}

        Message:
        ${message || "-"}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}