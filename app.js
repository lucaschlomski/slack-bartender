require('dotenv').config()
require('./message')

const { App, AwsLambdaReceiver } = require('@slack/bolt')
const cron = require("cron").CronJob


// initializes the app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
})

//channel to post message; random = C48FHRR8E ; test-luca = GQVLQ43A8 ; general = C4745E0QG
const channel = {
  random: "C48FHRR8E",
  gerneral: "C4745E0QG",
  testLuca: "GQVLQ43A8"
}

// listen for slack command /openbar and determine barkeeper
app.command("/openbar", async ({ack, command}) => {
  ack()
  await send_message(command.user_id)
  console.log(command.user_name + " opened the bar via a command")
})

// send message
async function send_message(barkeeper) {
  barMessage[1] = {
		type: "section",
		text: {
			type: "mrkdwn",
			text: `:party_wizard: <@${barkeeper}>`
		}
	}
  app.client.chat.postMessage({
    channel: channel.random,
    text: "bar selection message",
    blocks: barMessage
  })
}

// update message
async function update_message(message, message_channel, message_ts) {
  app.client.chat.update({
    channel: message_channel,
    ts: message_ts,
    text: "bar selection message",
    blocks: message
  })
}

// button to become barkeeper (not in use because no active cron)  
app.action("barkeeper_button", async ({ack, body}) => {
  await ack()
  console.log(body.user.name + " ist barkeeper")
  body.message.blocks[1] = {
		type: "section",
		text: {
			type: "mrkdwn",
			text: `:party_wizard: <@${body.user.name}>`
		}
	}
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Augustiner
app.action("button_1", async ({ack, body}) => {
  await ack()
  console.log("1x Option_1 für " + body.user.name)
  body.message.blocks[5].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Grohe
app.action("button_2", async ({ack, body}) => {
  await ack()
  console.log("1x Option_2 für " + body.user.name)
  body.message.blocks[7].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Radler
app.action("button_3", async ({ack, body}) => {
  await ack()
  console.log("1x Option_3 für " + body.user.name)
  body.message.blocks[9].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Aperol
app.action("button_4", async ({ack, body}) => {
  await ack()
  console.log("1x Option_4 für " + body.user.name);
  body.message.blocks[11].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Melone
app.action("button_5", async ({ack, body}) => {
  await ack()
  console.log("1x Option_5 für " + body.user.name)
  body.message.blocks[13].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Jägermeister
app.action("button_6", async ({ack, body}) => {
  await ack()
  console.log("1x Option_6 für " + body.user.name)
  body.message.blocks[15].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// Protein
app.action("button_7", async ({ack, body}) => {
  await ack()
  console.log("1x Option_7 für " + body.user.name)
  body.message.blocks[17].elements[0].text += ` <@${body.user.id}>`
  update_message(body.message.blocks, body.container.channel_id, body.container.message_ts)
})

// open pop-up Extrawünsche
app.action("extra_button", async ({ack, body}) => {
  await ack()
  actionBody = body
  app.client.views.open({
    trigger_id: body.trigger_id,
    view: barModal
  })
})

// Extrawünsche
app.view('view_1', async ({ack, body, view}) => {
  await ack()
  actionBody.message.blocks[20].elements[0].text += `>*${view.state.values.block_1.input_1.value}* für <@${body.user.id}>\n`
  update_message(actionBody.message.blocks, actionBody.container.channel_id, actionBody.container.message_ts)
  console.log("extrawunsch für " + body.user.name)
})

// starting the app
async function startApp() {
  await app.start(process.env.PORT || 3000)
  console.log('⚡️ slack-bartender app is running!')
}

//start
startApp()