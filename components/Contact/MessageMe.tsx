import React from 'react'

const MessageMe = () => {
  return (
    <div className="contact__container col-span-6 rounded-[3rem] bg-creamy px-24 py-16">
      <h1 className="mb-5 text-center text-xl font-semibold">Message Me</h1>
      <form className="flex flex-col space-y-5">
        <div className="grid grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-none">
          <input
            className="contact__input rounded-full"
            type="text"
            placeholder="Enter your Name"
            name="name"
            required
          />
          <input
            className="contact__input rounded-full"
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
          />
        </div>
        <input
          className="contact__input rounded-full"
          type="text"
          placeholder="Subject of Message"
          name="subject"
        />
        <textarea
          className="contact__input rounded-xl"
          name="message"
          rows={7}
          placeholder="Enter your message..."
          required
        ></textarea>
        <button
          type="submit"
          className="contact__submit rounded-full bg-purple-500 py-5 font-medium text-white transition-all duration-300 hover:bg-purple-400"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default MessageMe
