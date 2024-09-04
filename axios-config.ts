import axios from 'axios';

axios.defaults.headers.common = {
  'ngrok-skip-browser-warning': 'true'
};

axios.defaults.baseURL = "https://bunny-relaxing-quickly.ngrok-free.app/";

export default axios; // Export the configured axios instance
