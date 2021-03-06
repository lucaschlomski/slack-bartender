//this module iscurrently not in use

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
            "*Die Pickware Bar ist eröffnet!*\nBar_Bot nimmt ab sofort wieder eure Bestellungen entgegen."
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Heute im Angebot:*"
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
            text: "*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Grohe Hell* :beer: 0,33l\nDas Grohe-Hell ist ein solides Bier, welches die für Hell-Biere typischen, mild-süffigen Aromen aufweist. Prädikat: gut trinkbar."
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
            text: "*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "* Grohe Radler* 0,33l\nWas soll man dazu sagen?"
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
            text: "*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Aperol Spritz* :aperol_spritz: 0.4l\nsponsored by Aperol Schlomski - Die leuchtende Farbe von Aperol Spritz ist unverwechselbar und macht jeden Moment mit deinen Freunden besonders."
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
            text: "*Bestellungen:*"
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Melonen Schnaps Shot* :watermelon: 2cl\nsponsored by Manu - Vorsicht Suchtgefahr!"
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
            text: "*Bestellungen:*"
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
            text: "*Bestellungen:*"
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
  
  app.action("button_1", ({ack, body}) => {
    ack();
    console.log("1x Option_1 für " + body.user.name);
    message.blocks[4].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_2", ({ack, body}) => {
    ack();
    console.log("1x Option_2 für " + body.user.name);
    message.blocks[6].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_3", ({ack, body}) => {
    ack();
    console.log("1x Option_3 für " + body.user.name);
    message.blocks[8].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_4", ({ack, body}) => {
    ack();
    console.log("1x Option_4 für " + body.user.name);
    message.blocks[10].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_5", ({ack, body}) => {
    ack();
    console.log("1x Option_5 für " + body.user.name);
    message.blocks[12].elements[0].text += ` <@${body.user.id}>`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
  });

  app.action("button_6", ({ack, body}) => {
    ack();
    console.log("1x Option_6 für " + body.user.name);
    message.blocks[14].elements[0].text += ` <@${body.user.id}>`;
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
    message.blocks[17].elements[0].text += `*${view.state.values.block_1.input_1.value}* für <@${body.user.id}>\n`;
    web.chat.update({
      channel: channelId,
      ts: response.message.ts,
      blocks: message.blocks,
    });
    console.log("extrawunsch für " + body.user.name)
  });
};

//export function
exports.post = post_to_channel