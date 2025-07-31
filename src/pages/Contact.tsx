const Contact = () => {
  return (
    <div className="pt-20 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Type your message..."
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
