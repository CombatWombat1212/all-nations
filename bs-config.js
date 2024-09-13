module.exports = {
  proxy: "https://allnationscanna.ca/kiaro-giveaway", // Website to proxy
  files: [
    "C:/Users/Ssam/Documents/Projects/Client Work/Better Good/All Nations/Project 1 - Website Rework/code-sandbox/all-nations-page-style.css", // Watch your local CSS file
  ],
  serveStatic: [
    {
      route: "/kiaro-giveaway", // Match the actual subpath used by the proxy
      dir: "C:/Users/Ssam/Documents/Projects/Client Work/Better Good/All Nations/Project 1 - Website Rework/code-sandbox/", // Root directory where the CSS file is located
    },
  ],
  rewriteRules: [
    {
      // Instead of replacing an existing <link>, let's append our CSS
      match: /<\/head>/i, // Match the closing </head> tag
      fn: function () {
        return '<link rel="stylesheet" href="/kiaro-giveaway/all-nations-page-style.css?browsersync=true"></head>'; // Append our custom CSS before </head>
      },
    },
  ],
};
