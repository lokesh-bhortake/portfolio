import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { socials, openLink } from '../constants/constants'
import styles from '../style';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICEID, import.meta.env.VITE_EMAILJS_TEMPLATEID, form.current, import.meta.env.VITE_EMAILJS_KEY)
      .then((result) => {
        const successMsg = document.getElementById('successMsg');
        if (result.status === 200 && result.text === 'OK') {
          successMsg.innerText = 'Thank you for contacting!';

          setTimeout(() => {
            successMsg.innerText = '';
          }, 6000);
        } else {
          successMsg.innerText = result.text;
        }
      }, (error) => {
          alert(error.text);
      });

    e.target.user_name.value = ''
    e.target.user_email.value = ''
    e.target.message.value = ''

  };

  return (
    <section id='contact' className='text-accent flex flex-col my-10 gap-8 py-8 md:p-8 justify-center'>
      <h3 className='text-h3 font-bold text-center'>
        Contact Me
      </h3>

      <p id='successMsg' className='text-[24px] text-center'></p>

      <div className='flex-1 relative'>
        <div className={`${styles.blurDiv} left-[15%] md:left-[25%] lg:left-[30%] layer-blur`}></div>
      </div>

      <div className='flex gap-20 md:gap-40 w-full'>
        <ul className={`flex flex-col sm:flex-row ${styles.sizeFull} gap-12 p-4 justify-center items-center md:items-start`}>
          {
            socials.map((social, index) => (
              <li key={index}>
                <img src={social.icon} 
                  alt={social.text} 
                  className='h-12 w-12 cursor-pointer' 
                  onClick={() => openLink(social.link)} 
                />
              </li>              
            ))
          }
        </ul>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full text-base gap-4 z-[1]'>
          <div className={`${styles.contactFormInputLabelContainer}`}>
            <label className='font-bold'>Name: </label>
            <input type="text" name="user_name" required={true} className={`${styles.contactFormInput}`}/>
          </div>
          <div className={`${styles.contactFormInputLabelContainer}`}>
            <label className='font-bold'>Email: </label>
            <input type="email" name="user_email" required={true} className={`${styles.contactFormInput}`}/>
          </div>
          <div className={`${styles.contactFormInputLabelContainer}`}>
            <label className='font-bold'>Message: </label>
            <textarea name="message" rows="8" required={true} className={`${styles.contactFormInput}`}/>
          </div>
          <input type="submit" id='submit' value="Send" className={`mx-2 ${styles.boderedButton} hover:${styles.buttonTransition}`} />
        </form>
      </div>
    </section>
  )
} 

export default Contact