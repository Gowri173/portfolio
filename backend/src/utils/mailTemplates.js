export const contactInquiryTemplate = ({ name, email, company, projectType, message }) => {
  const text = `New Portfolio Inquiry

Name:
${name}

Email:
${email}

Company:
${company || 'Not Specified'}

Project Type:
${projectType}

Message:
${message}
`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ff4500; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #ff4500; border-bottom: 2px solid #ff4500; padding-bottom: 10px;">New Portfolio Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #4a1c1c; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #6b2d2d;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #4a1c1c;">Email:</td>
          <td style="padding: 8px 0; color: #6b2d2d;"><a href="mailto:${email}" style="color: #ff4500;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #4a1c1c;">Company:</td>
          <td style="padding: 8px 0; color: #6b2d2d;">${company || '<em>Not Specified</em>'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #4a1c1c;">Project Type:</td>
          <td style="padding: 8px 0; color: #6b2d2d;">${projectType}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #fff8f5; border-left: 4px solid #ff4500; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #4a1c1c; font-size: 14px;">Message Payload:</h3>
        <p style="margin: 0; color: #6b2d2d; font-size: 13px; white-space: pre-wrap; line-height: 1.5;">${message}</p>
      </div>
      <p style="font-size: 11px; color: #6b2d2d; opacity: 0.6; margin-top: 30px; text-align: center;">
        This communication was generated securely by the Gowri Ram Portfolio System.
      </p>
    </div>
  `;

  return { text, html };
};
