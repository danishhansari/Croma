import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className="flex items-center m-8">
        <NavLink to="/" className="text-2xl hover:text-blue-500">
          Home
        </NavLink>
        <BsChevronRight size={30} />
        <p className="text-2xl hover:text-blue-500">Contact</p>
      </div>
      <div>
        <iframe
          className="w-full my-8 h-[350px] md:h-[550px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.589333468222!2d72.8124047136847!3d19.188766212624603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6914fe3a8e5%3A0x73f264109c4db9d4!2sMalad%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699720073891!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form
        action="https://formspree.io/f/meqbnejo"
        method="POST"
        className="max-w-[700px] mx-auto px-2 py-4"
      >
        <h2 className="text-xl text-gray-800 text-center">Message me</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          required className="block w-full my-4 py-2 pl-2 border-2 focus:outline-none focus:border-gray-300 tracking-wide"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
          className="block w-full my-4 py-2 pl-2 border-2 focus:outline-none focus:border-gray-300 tracking-wide"
        />
        <textarea
          placeholder="Enter your message"
          required
          autoComplete="off"
          name="message"
          className="block w-full my-4 py-2 pl-2 border-2 focus:outline-none focus:border-gray-300 tracking-wide"
        ></textarea>

        <input type="submit" value="send" className="block bg-gray-800 text-white w-full uppercase py-2 text-center rounded-md hover:bg-gray-900 transition-colors my-4"></input>
      </form>
    </>
  );
};

export default Contact;
