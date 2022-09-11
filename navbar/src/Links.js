import React from "react";
import { FaFacebook, FaGoogle, FaTwitch, FaTwitter } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/contact",
    text: "contact",
  },
  {
    id: 4,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://www.google.com",
    icon: <FaGoogle />,
  },
  {
    id: 4,
    url: "https://www.twitch.com",
    icon: <FaTwitch />,
  },
];
