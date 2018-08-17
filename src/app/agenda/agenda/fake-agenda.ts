import { AgendaDay } from './agenda-day';

export const AGENDA: [AgendaDay[], string[]] = [
  [
    {
      day: "X Day 2017",
      agenda: [
        {
          time: 1486195200000,
          sessions: [
            {
              title: "Registration",
              speakers: [],
              timeStart: 1486195200000,
              timeEnd: 1486198800000,
              type: "general"
            }
          ]
        },
        {
          time: 1486198800000,
          sessions: [
            {
              title: "Welcome",
              speakers: [
                {
                  id: 1,
                  name: "John",
                  surname: "Doe",
                  company: "Best Corp",
                  img: "speaker-1",
                  desc: "Sed ut perspiciatis"
                }
              ],
              timeStart: 1486198800000,
              timeEnd: 1486201500000,
              type: "presentation",
              room: 1
            }
          ]
        }
      ],
      totalRooms: 1
    },
    {
      day: "Y Day 2017",
      agenda: [
        {
          time: 1486281600000,
          sessions: [
            {
              title: "Day Two",
              speakers: [

              ],
              timeStart: 1486281600000,
              timeEnd: 1486285200000,
              type: "general"
            }
          ]
        },
        {
          time: 1486285200000,
          sessions: [
            {
              title: "Welcome",
              speakers: [
                {
                  id: 3,
                  name: "George",
                  surname: "Dust",
                  company: "Gressy Soft",
                  img: "speaker-3",
                  desc: "Sed ut perspiciatis undes."
                }
              ],
              timeStart: 1486285200000,
              timeEnd: 1486287900000,
              type: "presentation",
              room: 1
            }
          ]
        }
      ],
      totalRooms: 1
    }
  ],
  [
    "day one",
    "day two"
  ]
];