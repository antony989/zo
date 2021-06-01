const ngrok = require('ngrok');
const fs = require('fs').promises;

(async function() {
  const url = await ngrok.connect(5000);
  const api = ngrok.getApi();
  let data = await api.get('api/tunnels');
  data = JSON.parse(data);
  let dict = {'domain': data.tunnels[0].public_url}
  await fs.writeFile("config.json", JSON.stringify(dict));
  console.log("saved " + data.tunnels[0].public_url);
})();