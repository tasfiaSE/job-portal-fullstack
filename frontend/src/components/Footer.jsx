import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/Logo.png" alt="Logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li> South Surma , Sylhet</li>
            <li>tasfiamostofa0@gmail.com</li>
            <li>+8801338547</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By CodeWithZeeshu
      </div>
    </>
  );
};

export default Footer;