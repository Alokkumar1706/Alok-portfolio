import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Message sent!");
};
  return (
    <section
      id="contact"
      className="py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}

          <div
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-6">
              Open to internships, placements and
              software development opportunities.
            </p>

            <div className="space-y-4">

              <p>
                📧 alokkumar1012jpk@gmail.com
              </p>

              <p>
                📍 Punjab, India
              </p>

            </div>

            <div className="flex gap-6 mt-8 text-3xl">

              <a
                href="https://github.com/Alokkumar1706"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/alok-kumar-4a543a281/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/aryanalok/"
                target="_blank"
              >
                <SiLeetcode />
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/kumaralokadq7f"
                target="_blank"
              >
                <SiGeeksforgeeks />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form
  onSubmit={handleSubmit}
  className="
  bg-white/5
  border
  border-white/10
  backdrop-blur-xl
  rounded-3xl
  p-8"
>

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/30
              mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/30
              mb-4"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/30"
            />

            <button
  type="submit"
  className="
  mt-6
  w-full
  py-4
  rounded-xl
  bg-green-500
  text-black
  font-bold"
>
  Send Message
</button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;