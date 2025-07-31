const About = () => {
  return (
    <div className="pt-20 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our Multi-Theme Switcher App. This project is designed to
        demonstrate the use of React Context, dynamic theming, and responsive
        layouts using Tailwind CSS and TypeScript.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Built with React + TypeScript</li>
        <li>Theme persistence using localStorage</li>
        <li>Three fully responsive UI themes</li>
        <li>API data fetched from fakestoreapi.com</li>
      </ul>
    </div>
  );
};

export default About;
