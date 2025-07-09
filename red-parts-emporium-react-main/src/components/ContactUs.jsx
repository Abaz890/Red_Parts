import React from 'react';
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 

export const ContactUs = () => { 
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 font-inter bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:border-r lg:border-gray-200 lg:pr-12"> 
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Address</h3>
          <p className="text-gray-700 mb-4">
            715 Fake Ave, Apt. 34, New York, NY 10021 USA.
          </p>
          <p className="text-gray-700 mb-4">
            Email: <span className="text-blue-600">red.parts@example.com</span>
          </p>
          <p className="text-gray-700 mb-6">
            Phone Number: <span className="text-blue-600">+1 754 000-00-00</span>
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Opening Hours</h3> 
          <p className="text-gray-700 mb-2">
            Monday to Friday: 8am-8pm
          </p>
          <p className="text-gray-700 mb-2">
            Saturday: 8am-6pm
          </p>
          <p className="text-gray-700 mb-6">
            Sunday: 10am-4pm
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment</h3> 
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message..."
                className="w-full p-3 border border-gray-300 rounded-md resize-y focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md text-lg font-semibold transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
