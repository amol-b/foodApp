var PROXY_CONFIG = {
  "/": {
      "target": "https://app-c2.c70gber22ip.us-south.codeengine.appdomain.cloud",
      "secure": false,
      "bypass": function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
              console.log("Skipping proxy for browser request.");
              return "/index.html";
          }
          req.headers["X-Custom-Header"] = "yes";
      }
  }
}

module.exports = PROXY_CONFIG;
