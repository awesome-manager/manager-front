import axios from 'axios';
import https from 'https';

class Request {
  constructor() {
    this.apiUrl = process.env.api_url;

    this.client = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
  }

  buildUrl(path) {
    if (path[0] === '/') {
      path = path.slice(1);
    }

    return `${this.apiUrl}/${path}`;
  }

  get(path, data = {}, headers = {}) {
    console.log(this.buildUrl(path));

    return this.client.get(this.buildUrl(path), {
      params: data,
      headers: headers
    });
  }

  post(path, data = {}, headers = {}, withCredentials = false) {
    return this.client.post(this.buildUrl(path), data, {
      headers: headers,
      withCredentials: withCredentials
    });
  }

  del(path, data = {}, headers = {}) {
    return this.client.delete(this.buildUrl(path), {
      params: data,
      headers: headers
    });
  }
}

const request = new Request();

export default request;
