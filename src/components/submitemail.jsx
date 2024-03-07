import { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [failedEmail, setFailedEmail] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInvalidEmail(true);
      return;
    }
    setInvalidEmail(false);
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
    return <p className="emailTopMsg">Sending your email...</p>;
  }

  if (emailSent) {
    return <p className="emailTopMsg">Email received, thanks 👍</p>;
  }

  if (failedEmail) {
    return <p className="emailTopMsg">Sorry email failed to send 🥴</p>;
  }

  return (
    <div>
      {invalidEmail && <p>Please add a valid email.</p>}
      <p className="emailTopMsg">Get notified when we release new features.</p>

      <form onSubmit={handleSubmit} className="emailForm">
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value === "") {
                setInvalidEmail(false);
              }
            }}
            required
            placeholder="Your email address"
            className="emailSubmitInput"
          />
        </label>
        <button type="submit" className="emailSubmitbtn">
          Send
        </button>
      </form>
      <p className="emailWarning">This is a test service currently.</p>
    </div>
  );
}

export default EmailForm;
