import '../App.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function FormSubmission() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Recipient Name', 
      from_name: name,          
      message: message,         
    };

    emailjs
      .send('service_ninth9one', 'template_by47bx8', templateParams, 'sWDjRmqo06G0hx_Pa')
      .then((result) => {
        console.log('Success:', result.text);
        setFeedback('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error.text);
        setFeedback('Failed to send message. Please try again.');
      });

    console.log('form submitted:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Form</button>
      {feedback && <p>{feedback}</p>}
    </form>
  );
}

export default FormSubmission;
