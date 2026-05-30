const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send contact confirmation email to user
const sendContactConfirmation = async (userEmail, userName) => {
  const mailOptions = {
    from: `"Dharmesh Ahir" <${process.env.EMAIL_FROM}>`,
    to: userEmail,
    subject: 'Thank you for contacting Dharmesh Ahir',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #00e5ff;">Thank You, ${userName}!</h2>
        <p>I have received your message and will get back to you within 24 hours.</p>
        <hr style="border-color: #333;">
        <p style="color: #888; font-size: 12px;">Dharmesh Ahir | Senior Flutter Developer</p>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${userEmail}`);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Send notification to admin
const sendAdminNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;
  
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><a href="${process.env.ADMIN_URL || 'http://localhost:5000/api/contacts'}">View in Admin Panel</a></p>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log('Admin notification sent');
    return true;
  } catch (error) {
    console.error('Admin notification failed:', error);
    return false;
  }
};

// Send newsletter welcome email
const sendNewsletterWelcome = async (email) => {
  const mailOptions = {
    from: `"Dharmesh Ahir" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Welcome to Dharmesh Ahir Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #00e5ff;">Welcome to my Newsletter! 🎉</h2>
        <p>Thank you for subscribing. You'll receive updates about:</p>
        <ul>
          <li>Latest Flutter development tips</li>
          <li>New portfolio projects</li>
          <li>Tech insights and tutorials</li>
        </ul>
        <hr>
        <p style="color: #888;">Dharmesh Ahir | Senior Flutter Developer</p>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Welcome email failed:', error);
    return false;
  }
};

module.exports = {
  sendContactConfirmation,
  sendAdminNotification,
  sendNewsletterWelcome
};