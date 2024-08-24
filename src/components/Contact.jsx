import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g2lp1vk', 'template_we7dtaj', form.current, {
        publicKey: 'nq2KBCuU1VlvzseXj',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
          });
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          toast.error('Failed to send email. Please try again later.', {
          });
        },
      );
  };

  return (
    <div id="contact" className="pt-20 md:pt-40 pb-20">
      <h1 className="text-3xl text-[#ff8484] font-medium text-center mb-5">Contact Me</h1>
      <div className="flex justify-center mt-6">
        <form ref={form} onSubmit={sendEmail}>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="from_name"
                  required
                  className="border border-gray-300 p-2 w-80 focus:outline-none"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="from_email"
                  required
                  className="border border-gray-300 p-2 w-80 mt-4 focus:outline-none"
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  placeholder="Enter your message..."
                  name="message"
                  required
                  rows={5}
                  className="border border-gray-300 w-80 p-2 mt-4 focus:outline-none"
                ></textarea>
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <input
                  type="submit"
                  value="Submit"
                  className="bg-red-500 p-2 px-7 w-80 text-white mt-5 hover:bg-[#ff8484]"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  );
};










