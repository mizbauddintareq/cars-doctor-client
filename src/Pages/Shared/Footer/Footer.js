import logo from "../../../assets/logo.svg";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer p-32 bg-black text-white">
      <div>
        <img src={logo} alt="footer-logo" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <FaGoogle className="w-5 h-5" />
          </Link>
          <Link>
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link>
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link>
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
