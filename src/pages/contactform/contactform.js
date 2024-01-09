// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://your-django-api-url/api/contact/', formData);
            // Handle success, e.g., show a success message or redirect
        } catch (error) {
            // Handle error, e.g., show an error message
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />

            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>

        
    );
};

export default ContactForm;