import axios from "axios";
const customFetch = axios.create({
  baseUrl: "http://localhost:8000/api",
});

export default customFetch;
