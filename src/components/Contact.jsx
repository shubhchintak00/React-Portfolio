import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-[#25013b] to-black text-white px-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-extrabold">I'd love to hear from you!</h2>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Have questions, suggestions, or need support? I am here to help. Whether it’s feedback,
            partnership inquiries, or technical support, I’d love to hear from you.
          </p>
        </div>

        <form
          action="https://getform.io/f/bvryzlzb"
          method="POST"
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 bg-black border border-white rounded-md text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 bg-black border border-white rounded-md text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message us"
            rows="6"
            className="p-3 bg-black border border-white rounded-md text-white placeholder-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 w-fit self-start"
          >
            SEND →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


