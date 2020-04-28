import { IBlock } from 'types/Editor'

const blocks: IBlock[] = [
  {
    props: {
      style: {
        backgroundImage:
          'url(https://campaigns.rewired.solutions/_wss/clients/220/assets/ESS-Rewired-Landing-Page-header.png)',
        height: 740,
      },
    },
    rows: [
      {
        cols: [
          {
            props: {},
            elements: [
              {
                type: 'image-uploader',
                props: {},
              },
            ],
          },
        ],
        props: {},
      },
    ],
  },
  {
    props: {},
    rows: [
      {
        props: {},
        cols: [
          {
            props: { sm: 6 },
            elements: [
              {
                type: 'text',
                props: { body_placeholder: 'Position Location' },
              },
            ],
          },
          {
            props: { sm: 6, offset: 2 },
            elements: [
              {
                type: 'button',
                props: { text: 'Join Us' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    props: {
      style: {
        backgroundImage:
          'url(https://campaigns.rewired.solutions/_wss/clients/220/assets/left-image-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        minHeight: 552,
        marginTop: 50,
      },
    },
    rows: [
      {
        props: {},
        cols: [
          {
            props: { offset: 9, sm: 16 },
            elements: [
              {
                type: 'text',
                props: { body_placeholder: 'Job Description' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    props: {
      style: {
        backgroundImage:
          'url(https://campaigns.rewired.solutions/_wss/clients/220/assets/right-image-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 552,
        marginTop: 50,
        backgroundPosition: '100%',
      },
    },
    rows: [
      {
        props: {},
        cols: [
          {
            props: { sm: 15 },
            elements: [
              {
                type: 'text',
                props: { body_placeholder: 'Required Skills' },
              },
              {
                type: 'list',
                props: {
                  className: 'box-list',
                  items: [
                    'Passion for teaching',
                    'Adaptability',
                    'Interpersonal skills',
                    'Accountability',
                    'Confidence',
                    'Communication',
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    props: {},
    rows: [
      {
        props: {},
        cols: [
          {
            props: { sm: 24, style: { marginBottom: 20 } },
            elements: [
              {
                props: { style: { textAlign: 'center' } },
                type: 'text',
              },
            ],
          },
          {
            props: { sm: 24 },
            elements: [
              {
                props: {
                  className: 'buckets',
                  cards: [
                    {
                      icon: '<i class="fas fa-graduation-cap"></i>',
                      title: 'Education',
                      text:
                        'Requirements vary by district but start at High School Diploma or GED and require at most 60 college credits.',
                    },
                    {
                      icon: '<i class="fa fa-fingerprint"></i>',
                      title: 'Background Check',
                      text: 'Must pay for and complete FBI & State Criminal Background Check',
                    },
                    {
                      icon: '<i class="fa fa-child"></i>',
                      title: 'DHS Child Maltreatment Screen',
                      text: 'Must pay for and complete a DHS Child Maltreatment Screen',
                    },
                  ],
                },
                type: 'cards',
              },
            ],
          },
        ],
      },
    ],
  },
]

export default blocks
