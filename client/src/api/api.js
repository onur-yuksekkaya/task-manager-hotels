import axios from "axios";
import { detect } from "detect-browser";

const { name, version, os } = detect();

const requestHeaders = {
  "Content-Type": "application/json",
  platform: os,
  browser: `${name}/${version}`,
  Pragma: "no-cache",
};

const Api = axios.create({
  baseURL: "http://localhost:9000/",
  headers: requestHeaders,
});

export default Api;
