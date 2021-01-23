import axios from "axios";

export default function fetchData(stock) {
  const apiKey = "sk_f92b03211d794e65b0ab5decf07c3770";
  const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${apiKey}`;
  return axios.get(url).then((res) => res.data);
}