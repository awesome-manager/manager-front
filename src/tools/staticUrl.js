class StaticUrl {
  constructor() {
    this.apiStaticUrl = process.env.static_api_url;
  }

  generateFilePath(path) {
    return `${this.apiStaticUrl}${path}`;
  }
}

const staticUrl = new StaticUrl();

export default staticUrl;
