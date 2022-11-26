import React from "react";
import logo from "../../assets/logo/cookie.png";
import linkeDinsvg from "../../assets/socials/linkedin.png";
import githublogo from "../../assets/socials/github.png";

function Footer() {
  return (
    <div className="bg-gray-700">
      <div className="container">
        <footer className="footer p-10 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Delivery</a>
            <a className="link link-hover">Cooking</a>
            <a className="link link-hover">Branding</a>
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
        <footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
          <div className="items-center grid-flow-col">
            <img src={logo} className="w-14" alt="" />
            <p>
              Your Kitch <br />
              Providing reliable tech since 2017
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end bg-white">
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/HasanNaim20" target={"_blank"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-black"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hasannaim/"
                target={"_blank"}
              >
                <img src={linkeDinsvg} alt="" className="w-5" />
              </a>
              <a href="https://github.com/hasan-naim" target={"_blank"}>
                <img src={githublogo} className="w-5" alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
