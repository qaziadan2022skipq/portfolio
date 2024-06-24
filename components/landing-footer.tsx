'use client'
import React, { useState } from 'react';

const Footer = () => {
    const [subject, setSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const handleSendMessage = () => {
        console.log(emailMessage)
        const email = `mailto:qaziadanhidayat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailMessage)}`;
        window.location.href = email;
    };

    return (
        <footer id='contact' className=" py-12 ">
            <div className="flex flex-col max-w-4xl mx-auto px-4 text-center  p-4">
                <h2 className="text-4xl text-sky-400 font-bold  mb-6">Contact Me</h2>
                <div className="flex text-left flex-col gap-4">
                    <label className='text-sky-300'>Subject:</label>
                    <input
                        type="text"
                        placeholder="I want a website"
                        className=" h-10 text-gray-300 bg-transparent border shadow-sky-800 shadow-md border-gray-600 rounded px-4 focus:outline-none focus:border-blue-500"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        placeholder="Your Message"
                        className="text-gray-300 bg-transparent border shadow-sky-800 shadow-md border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-blue-500 h-24"
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                    ></textarea>
                </div>
                <button
                    onClick={handleSendMessage}
                    className="mt-4 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Email
                </button>
            </div>
        </footer>
    );
};

export default Footer;
