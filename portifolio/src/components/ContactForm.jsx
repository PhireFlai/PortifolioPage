import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000', { email, message });
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email', error);
            alert('Failed to send email.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='min-w-[50%]'>
            <div className='flex min-w-60 flex-col items-center justify-center my-2'>
                <input
                    type='text'
                    placeholder='Email'
                    className='my-8 w-[80%] border rounded-lg p-1 bg-gray-900 border-white font-rubik pl-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder='Message'
                    className='my-8 w-[80%] border rounded-lg p-2 bg-gray-900 border-white font-rubik text-white resize-none h-60'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <div className='flex justify-center items-center pt-10'>
                <button type='submit' className='border rounded-lg p-1 bg-gray-900 mb-4 px-4'>
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
