'use client'
import React, { useState } from 'react';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

// Define validation schema using Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(1, 'Location is required'),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
  file: z.any().optional(),  // Adding a file field to schema
});

// Define form data types
type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    location: '',
    message: '',
    file: null, // Initial state for file
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<z.inferFlattenedErrors<typeof ContactFormSchema>['fieldErrors']>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file: file, // Store the file in form data
    });
    setFileName(file ? file.name : null); // Update the file name for display
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Zod validation
    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      toast.error('Please fix the errors in the form');
    } else {
      setErrors({});
      toast.success('Form submitted successfully');
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        location: '',
        message: '',
        file: null, // Clear file input
      });
      setFileName(null); // Clear file name display
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Toaster />
      <div className="bg-blue-500 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-8 text-white">Get in touch with us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`bg-blue-400 w-full p-2 border border-white-200 rounded mt-1 focus:outline-none focus:ring-2 ${
                errors?.name ? 'ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors?.name && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-blue-400 w-full p-2 border border-white-200 rounded mt-1 focus:outline-none focus:ring-2 ${
                errors?.email ? 'ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>

          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block text-white">Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`bg-blue-400 w-full p-2 border border-white-200 rounded mt-1 focus:outline-none focus:ring-2 ${
                errors?.location ? 'ring-red-500' : 'focus:ring-blue-500'
              }`}
            />
            {errors?.location && <p className="text-red-500 text-sm">{errors.location[0]}</p>}
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-white">Write your message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`bg-blue-400 w-full p-2 border border-white-200 rounded mt-1 focus:outline-none focus:ring-2 ${
                errors?.message ? 'ring-red-500' : 'focus:ring-blue-500'
              }`}
              rows={4}
            ></textarea>
            {errors?.message && <p className="text-red-500 text-sm">{errors.message[0]}</p>}
          </div>

          {/* File Upload Input */}
          <div>
            <label htmlFor="file" className="block text-white">Upload a file</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="bg-blue-400 w-full p-2 border border-white-200 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fileName && <p className="text-white mt-2">File selected: {fileName}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
