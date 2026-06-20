const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const wrapper = (innerHtml) => `
<div style="margin:0;padding:0;background-color:#0f0f10;font-family:Segoe UI, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f10;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#18181b;border-radius:12px;overflow:hidden;border:1px solid #27272a;">
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#a855f7);padding:24px 32px;">
              <span style="color:#ffffff;font-size:18px;font-weight:600;letter-spacing:0.3px;">Seyam Hossain</span>
              <div style="color:#e0e7ff;font-size:12px;margin-top:2px;">Web Application Developer</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;color:#e4e4e7;font-size:14px;line-height:1.6;">
              ${innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background-color:#111113;border-top:1px solid #27272a;color:#71717a;font-size:12px;">
              Sent automatically from the portfolio contact form. Please do not reply to this footer.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
`;

export function adminNotificationTemplate({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  const text = `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  const html = wrapper(`
    <h2 style="margin:0 0 16px;color:#fafafa;font-size:18px;">New message from your portfolio</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:20px;">
      <tr>
        <td style="padding:4px 0;color:#a1a1aa;width:90px;">Name</td>
        <td style="padding:4px 0;color:#fafafa;font-weight:500;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding:4px 0;color:#a1a1aa;">Email</td>
        <td style="padding:4px 0;"><a href="mailto:${safeEmail}" style="color:#a5b4fc;text-decoration:none;">${safeEmail}</a></td>
      </tr>
    </table>
    <div style="background-color:#111113;border:1px solid #27272a;border-radius:8px;padding:16px;color:#d4d4d8;">
      ${safeMessage}
    </div>
    <p style="margin-top:20px;color:#71717a;font-size:12px;">Reply directly to this email to respond to ${safeName}.</p>
  `);

  return { text, html };
}

export function userAutoReplyTemplate({ name }) {
  const safeName = escapeHtml(name);

  const text = `Hi ${name},\n\nThanks for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.\n\nBest,\nSeyam Hossain\nWeb Application Developer`;

  const html = wrapper(`
    <h2 style="margin:0 0 16px;color:#fafafa;font-size:18px;">Hey ${safeName}, I got your message! 👋</h2>
    <p style="margin:0 0 16px;">Thanks for reaching out through my portfolio. I've received it and will get back to you as soon as possible, usually within a day or two.</p>
    <p style="margin:0 0 24px;">In the meantime, feel free to check out more of my work or connect with me on socials.</p>
    <p style="margin:0;color:#a1a1aa;">Talk soon,</p>
    <p style="margin:4px 0 0;font-weight:600;color:#fafafa;">Seyam Hossain</p>
    <p style="margin:2px 0 0;color:#a1a1aa;font-size:12px;">Web Application Developer</p>
  `);

  return { text, html };
}
