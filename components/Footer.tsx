import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:pb-6 mb-24 md:mb-10 mt-10" id="contact">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold leading-tight md:leading-snug max-w-2xl">
          Ready to take <span className="text-blue-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-base max-w-md">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:yadavabhijay@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 px-4 text-sm text-gray-500">
        <p>© 2025 Abhijay</p>
      </div>
    </footer>
  );
};

export default Footer;
