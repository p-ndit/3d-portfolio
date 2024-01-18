import React, { useState } from 'react'

const Contact = () => {
   const [form, setForm] = useState({
    name: '', 
    email: '', 
    message: '' 
   });

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = () => {};
    const handelFocus = () => {}; 
    const handelBlur = () => {};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form
         className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input 
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input 
            type="email"
            name="email"
            className="input"
            placeholder="xyz@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea 
            type="text"
            rows={4}
            name="message"
            className="textarea"
            placeholder="fell free to write your message here"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handelFocus}
            onBlur={handelBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
