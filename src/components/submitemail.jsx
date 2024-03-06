import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [failedEmail, setFailedEmail] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSendingEmail(true);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Welcome to the Sunny Application",
          text: "Thank you for joining us! We will be in touch.",
        }),
      }
    );

    setSendingEmail(false);

    if (response.ok) {
      setEmailSent(true);
      setFailedEmail(false);
    } else {
      setFailedEmail(true);
      setEmailSent(false);
    }
  };

  if (sendingEmail) {
    return <p>Sending email...</p>;
  }

  if (emailSent) {
    return <p>Email sent</p>;
  }

  if (failedEmail) {
    return <p>Sorry email failed to send</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;
