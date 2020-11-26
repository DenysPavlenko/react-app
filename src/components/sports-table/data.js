const createData = (id) => {
  return {
    id,
    day: 'thursday 11/19',
    spread: '50,000',
    moneyLine: '20,000',
    total: '20,000',
    teamTotal: '5,000',
    games: [
      {
        id: '12',
        time: '05:20 PM PST',
        title: 'broadcast - fox',
        channel: 'fox',
        teams: [
          {
            id: 'cardinals',
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
            id: 'seahawks',
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
        title: 'broadcast - fox',
        channel: 'fox',
        teams: [
          {
            id: 'cardinals',
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
            id: 'seahawks',
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
};

const data = [
  createData('1')
];

export default data;
