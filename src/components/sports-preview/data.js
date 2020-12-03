const createData = ({ id, title, icon }) => {
  return {
    id,
    title: title,
    icon: icon,
    schedule: [
      {
        id:'1',
        date: 'thursday 11/19',
        spread: '50,000',
        moneyLine: '20,000',
        total: '20,000',
        teamTotal: '5,000',
        games: [
          {
            id: '12',
            time: '05:20 PM PST',
            channel: 'fox',
            teams: [
              {
                id: 'cardinals1',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png',
                title: 'Cardinals',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'over'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              },
              {
                id: 'seahawks1',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png',
                title: 'Seahawks',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'under'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              }
            ]
          },
          {
            id: '13',
            time: '05:20 PM PST',
            channel: 'CBS',
            teams: [
              {
                id: 'cardinals2',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png',
                title: 'Cardinals',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'over'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              },
              {
                id: 'seahawks2',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png',
                title: 'Seahawks',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'under'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              }
            ]
          },
        ]
      },
      {
        id:'2',
        date: 'friday 12/19',
        spread: '50,000',
        moneyLine: '20,000',
        total: '20,000',
        teamTotal: '5,000',
        games: [
          {
            id: '14',
            time: '05:20 PM PST',
            channel: 'fox',
            teams: [
              {
                id: 'cardinals1',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png',
                title: 'Cardinals',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'over'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              },
              {
                id: 'seahawks1',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png',
                title: 'Seahawks',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'under'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              }
            ]
          },
          {
            id: '15',
            time: '05:20 PM PST',
            channel: 'CBS',
            teams: [
              {
                id: 'cardinals2',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/5Mh3xcc8uAsxAi3WZvfEyQ_48x48.png',
                title: 'Cardinals',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'over'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              },
              {
                id: 'seahawks2',
                icon: 'https://ssl.gstatic.com/onebox/media/sports/logos/iVPY42GLuHmD05DiOvNSVg_96x96.png',
                title: 'Seahawks',
                spread: '+3 200',
                moneyLine: '245',
                total: {
                  value: '110',
                  type: 'under'
                },
                teamTotalFirst: {
                  value: '169',
                  type: 'over'
                },
                teamTotalLast: {
                  value: '169',
                  type: 'under'
                },
              }
            ]
          },
        ]
      }
    ]
  }
};

const data = [
  createData({ id: '1', title: 'NFL', icon: 'football-ball' }),
  // createData({ id: '2', title: 'NCAA Basketball', icon: 'basketball-ball' }),
];

export default data;
