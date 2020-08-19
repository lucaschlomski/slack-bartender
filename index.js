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
  token: token,
  signingSecret: signingSecret
});

//show as online in Slack
rtm.start();

//channel to post message; random = C48FHRR8E ; test-luca = GQVLQ43A8 ; general = C4745E0QG
const channelId = "GQVLQ43A8";


//cron schedule running friday 16:00
cron.schedule("0 14 * * 4", () => {
  post_to_channel();
  console.log("*running cron schedule*")
});

//listen for slack command /drinks
app.command("/drinks", ({ack}) => {
  ack();
  post_to_channel();
  console.log("*activated via slash command*");
});

//post to channel
async function post_to_channel() {
  var response = await web.chat.postMessage({
    channel: channelId,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Die Pickware Bar ist eröffnet!*\n\n\n*official pickware barkeeper ist heute:*"
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Ich will unbedingt!"
            },
            action_id: "barkeeper_button"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "_Alle die noch im Home Office stecken müssen sich Ihre Getränke leider selbst beschaffen._\n_sry mate._\n\n\n*Heute im Angebot:*"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Tegernseer Helles* :beer: 0,5l\nLeckeres bayrisches Helles. Schöne Farbe , leichte Säure , leicht bitter, Hopfen eher zurückhaltend. Ein Bier das gefallen will, auch gefällt. Trinken kann man das scho guat."
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_1"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Grohe Hell* :beer: 0,33l\nDas Grohe-Hell ist ein solides Bier, welches die für Hell-Biere typischen, mild-süffigen Aromen aufweist. Prädikat: _gut trinkbar_."
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_2"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Grohe Radler* 0,33l\nFür Alle die heute mal langsam starten wollen.\n_\"Gemach! Leicht zum Fallen führt das Eilen.\" -William Shakespeare_"
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_3"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Aperol Spritz* :aperol_spritz: 0.4l\n_sponsored by Aperol Schlomski_ - Die leuchtende Farbe von Aperol Spritz ist unverwechselbar und macht jeden Moment mit deinen Freunden besonders."
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_4"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Melonen Schnaps Shot* :watermelon: 2cl\n_sponsored by Manu_ - Vorsicht Suchtgefahr!"
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_5"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Jägermeister Shot* :jaegermeister: 6cl\nFrisch gezapft im Pckwr Glas! - Genau das Richtige für den dustigen Jägersmann? Am Besten bei -18°C verzehren."
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            emoji: true,
            text: "1x bidde"
          },
          action_id: "button_6"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ">*Bestellungen:*"
          }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Extrawünsche?"
            },
            action_id: "extra_button",
          }
        ]
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: " "
          }
        ]
      }
    ]
  });


  //console.log(response.message.ts);
  //console.log(response.message);
  //const messageTs = response.message.ts;
  var message = response.message;
  
  app.action("barkeeper_button", ({ack, body}) => {
    ack();
    console.log(body.user.name + " ist heute barkeeper");
    message.blocks[1] = {
			type: "section",
			text: {
				type: "mrkdwn",
				text: `:party_wizard: <@${body.user.name}>`
			}
		};
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_1", ({ack, body}) => {
    ack();
    console.log("1x Option_1 für " + body.user.name);
    message.blocks[5].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_2", ({ack, body}) => {
    ack();
    console.log("1x Option_2 für " + body.user.name);
    message.blocks[7].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_3", ({ack, body}) => {
    ack();
    console.log("1x Option_3 für " + body.user.name);
    message.blocks[9].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_4", ({ack, body}) => {
    ack();
    console.log("1x Option_4 für " + body.user.name);
    message.blocks[11].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_5", ({ack, body}) => {
    ack();
    console.log("1x Option_5 für " + body.user.name);
    message.blocks[13].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_6", ({ack, body}) => {
    ack();
    console.log("1x Option_6 für " + body.user.name);
    message.blocks[15].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("extra_button", ({ack, body}) => {
    ack();
    app.client.views.open({
      token: token,
      trigger_id: body.trigger_id,
      view: {
        type: "modal",
        callback_id: "view_1",
        title: {
          type: "plain_text",
          text: "Extrawünsche"
        },
        blocks: [
          {
            type: "input",
            block_id: "block_1",
            label: {
              type: "plain_text",
              text: "Feeling extra today?"
            },
            element: {
              type: "plain_text_input",
              placeholder: {
                type: "plain_text",
                text: "Getränkewunsch hier eingeben"
              },
              action_id: "input_1",
              multiline: false
            }
          }
        ],
        submit: {
          type: "plain_text",
          text: "Submit"
        }
      }
    });
  });

  app.view('view_1', async ({ ack, body, view}) => {
    ack();
    message.blocks[18].elements[0].text += `>*${view.state.values.block_1.input_1.value}* für <@${body.user.id}>\n`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
    console.log("extrawunsch für " + body.user.name)
  });
};

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ bar_bot is up and running!");
})();