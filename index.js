require('dotenv').config();

const { App } = require("@slack/bolt");
const { WebClient } = require("@slack/web-api");
const { RTMClient } = require('@slack/rtm-api');
const cron = require("node-cron");
const bar = require('./bar');

const token = process.env.SLACK_BOT_TOKEN;
const signingSecret = process.env.SLACK_SIGNING_SECRET;

const web = new WebClient(token, signingSecret);
const rtm = new RTMClient(token);
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

//show as online in Slack
rtm.start();

//channel to post message; random = C48FHRR8E ; test-luca = GQVLQ43A8 ; general = C4745E0QG
const channelId = "GQVLQ43A8";


//cron schedule running friday 16:00
cron.schedule("0 16 * * 5", () => {
  bar.post();
  console.log("running cron schedule")
});

//listen for slack command /bar
app.command("/bar", ({ack}) => {
  ack();
  bar.post();
  console.log("running command");
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ bar_bot is up and running!");
})();