require('./app')

barMessage = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text:"*Die Pickware Bar ist eröffnet!*\n\n\n*official pickware barkeeper ist heute:*"
    }
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `no one :sadge:`
    }
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
        "*Augustiner Lagerbier Hell* :beer: 0,5l\nLeckeres bayrisches Helles. Schöne Farbe , leichte Säure , leicht bitter, Hopfen eher zurückhaltend. Ein Bier das gefallen will, auch gefällt. Trinken kann man das scho guat."
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

barModal = {
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