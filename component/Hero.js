import React from "react";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
const mailchimp = require("@mailchimp/mailchimp_marketing");

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // appendSpreadsheet(formData)
      // setEmail('');
      // console.log(email);

      const data = {
        Email: email,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/d72fe0c5-266c-42ae-90d2-a70757956234",
          data
        )
        .then((response) => console.log(response));
      alert("email submitted successfully");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-between items-center ">
      <div className="flex flex-col gap-5 md:gap-0 lg:gap-5">
        <p className="text-lg font-medium bg-amber-100 text-yellow-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming soon
        </p>
        <p className="text-6xl font-bold">
        Themes That  <br /> Elevate Brands{" "}
        </p>
        <p className="text-base">
          Join over 100 subscribers getting top <strong>site themes</strong> for<br />
          personal <strong>brands</strong> straight to their inbox once a week.<br />
          
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-2xl hover:scale-95 duration-300 transition text-black-800 shadow-xl font-medium">
              Subscribe{" "}
            </button>
          </div>
        </form>
        <div className="flex gap-5">
          <a href="https://twitter.com/ericlamcrypto" target="_blank">
            {" "}
            <BsTwitter className="text-4xl rounded-xl text-yellow-700 bg-amber-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          </a>
          {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
          {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        </div>
      </div>
      <img src="/bot.png" className="max-w-sm lg:max-w-lg" alt="" />
    </div>
  );
};

export default Hero;
