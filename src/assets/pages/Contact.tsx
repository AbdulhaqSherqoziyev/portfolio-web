import React from 'react';
import "../css/global.css"
import "../css/contact.css"
import mail from '../images/mail.svg'
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'

const Contact = () => {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build JSON from FormData
    const data = {
      name: formData.get('name'),
      phone: formData.get('number'), // match your input name="number"
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://netrix.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert('Xabar yuborildi!');
        form.reset();
      } else {
        alert('Xabar yuborishda xatolik yuz berdi.');
      }

    } catch (err) {
      console.error('Fetch error:', err);
      alert('Tarmoq xatosi.');
    }
  }

  return (
    <div>
      <h1 className="text-center">Contact</h1>
      <h5 className="text-center color-2">Get in touch</h5>

      <br /><br /><br /><br /><br />

      <div className="form-container">
        <div className="form-info-container">
          <div className="text-center no-mg ">Talk to me</div>
          <div className="info-block">
            <img src={mail} alt="mail icon" className="svg"/>
            <h5>Email</h5>
            <a href="mailto:abdulhaqsherqoziyev@gmail.com" className="color-2">abdulhaqsherqoziyev@gmail.com</a>
          </div>
          <div className="info-block">
            <img src={telegram} alt="telegram icon" className="svg"/>
            <h5>Telegram</h5>
            <a href="https://t.me/abdulhaq_sherqoziyev" className="color-2">+998773170521</a>
          </div>
          <div className="info-block">
            <img src={instagram} alt="instagram icon" className="svg"/>
            <h5>Instagram</h5>
            <a href="https://www.instagram.com/dasturchi.ts" className="color-2">@dasturchi.ts</a>
          </div>
        </div>

        <form id="form" name="form" className="form" onSubmit={handleSubmit}>
          <div className="text-center">Write me your message</div>
          <input type="text" name="name" placeholder="Write your name" required/>
          <input type="number" name="number" placeholder="Write your phone number" required/>
          <textarea name="message" id="form-text" cols={30} rows={10} placeholder="Write your message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
