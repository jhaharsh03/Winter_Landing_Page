import React, { useState } from 'react';
import styles from './style';
import { layout } from './style';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {

  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ktco67p', 'template_fvcuw2q', form.current, '25ARfq7__phcJHFQA')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
   
  };

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <section id='features' className='{layout.section}'>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Let's Connect<br className='sm: blockhidden' />
            </h2>

            <div className='myform flex items-center justify-center h-screen'>
              <form ref={form} onSubmit={sendEmail} className="max-w-md w-full p-8 bg-transparent rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#00df9a]"></h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="e.g., +1 123-456-7890"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="user_company"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="e.g., ABC Inc."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>

            
          </div>

          <div className='sm:hidden' style={{ height: '200px' }}></div>
        </section>
      
    </div>
  );
};

export default Form;
