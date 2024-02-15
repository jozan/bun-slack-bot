import { WebClient, LogLevel } from "@slack/web-api";

const appToken = process.env.SLACK_APP_TOKEN;

const webClient = new WebClient(appToken, {
  logLevel: LogLevel.DEBUG,
});

(async () => {
  try {
    console.log("test open connection");
    const r = await webClient.apiCall("apps.connections.open");
    console.log("result", r);
  } catch (e) {
    console.log("error", e);
  } finally {
    console.log("test open connection finally");
  }
})();
