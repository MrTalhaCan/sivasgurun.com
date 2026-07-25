import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* export async function POST(request) {
     const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message   =   formData.get('message'); 

  const transport = nodemailer.createTransport({
    service: 'gmail',
    
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = async () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    //await sendMailPromise();
    return NextResponse.json({ msg: "hi" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
} */

export async function GET(request) {
  /* const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message   =   formData.get('message');  */
  
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.REMOTE_MAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `sivasgurun.com test`,
    text: 'hi',
  };

  const sendMailPromise = async () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ msg: 'email sent!' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}