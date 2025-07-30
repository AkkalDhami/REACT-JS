import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    console.log(res);
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

const Contact = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:mb-0 mb-10">
          <div className="">
            <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">
              Contact Us
            </h4>
            <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
              Reach Out To Us
            </h2>
            <Form action="/contact" method="post">
              <input
                type="text"
                className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-600 py-2 px-4 mb-8"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                name="email"
                className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-600 py-2 px-4 mb-8"
                placeholder="Email"
              />
              <textarea
                name="message"
                id="text"
                className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal focus:border-indigo-600 leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                placeholder="Phone"></textarea>
              <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
