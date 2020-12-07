import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// Redux
import { togglePersonalize } from 'shared/redux/personalize/actions';
import { toggleMail } from 'shared/redux/mail/actions';
import { showSettings } from 'shared/redux/settings/actions';
import { toggleScores } from 'player-app/redux/scores/actions';
import { selectSportsPageSchedule } from 'player-app/redux/sports-page-schedule/selectors';
import { toggleSportsPageSchedule } from 'player-app/redux/sports-page-schedule/actions';
import { selectLivePlayProgram } from 'player-app/redux/live-play-program/selectors';
import { toggleLivePlayProgram } from 'player-app/redux/live-play-program/actions';
import { selectHorsesPreviewSelect } from 'player-app/redux/horses-preview-select/selectors';
import { toggleHorsesPreviewSelect } from 'player-app/redux/horses-preview-select/actions';
// Components
import Header from 'shared/components/header/header';
import HeaderMenu from 'shared/components/header-menu/header-menu';
import Balance from 'shared/components/balance/balance';
import HeaderDropdown from 'shared/components/header-dropdown/header-dropdown';
import HeaderDropdownMenu from 'shared/components/header-dropdown-menu/header-dropdown-menu';
// Assets
import cupIcon from 'player-app/assets/images/icons/cup.png';
import timerIcn from 'player-app/assets/images/icons/timer.png';
import cardsIcn from 'player-app/assets/images/icons/cards.png';
import horseIcn from 'player-app/assets/images/icons/horse.png';
import calendarIcn from 'player-app/assets/images/icons/calendar.png';
import programIcn from 'player-app/assets/images/icons/list.png';
import horseSelectIcn from 'player-app/assets/images/icons/horse-alt.png';
// Styles
import './user-header.sass';

const menu = [
  { name: 'Sports', rootName: '/sports', icon: cupIcon, alt: "sports" },
  { name: 'Live', rootName: '/live', icon: timerIcn, alt: "live" },
  { name: 'Casino', rootName: '/casino', icon: cardsIcn, alt: "casino" },
  { name: 'Horses', rootName: '/horses', icon: horseIcn, alt: "horses" },
];

const UserHeader = ({ toggleScores, toggleMail, showSettings, togglePersonalize, isScheduleShown, toggleSportsPageSchedule, isProgramShown, toggleLivePlayProgram, isHorsesSelectShown, toggleHorsesPreviewSelect }) => {

  const dropdownMenu = [
    { icon: 'calendar', title: 'Scores', handler: toggleScores },
    { icon: 'file-alt', title: 'Rules', rootName: '/rules' },
    { icon: 'envelope', title: 'Mail', handler: toggleMail },
    { icon: 'cog', title: 'Settings', handler: showSettings },
    { icon: 'paint-brush', title: 'Personalize it', handler: togglePersonalize },
    { icon: 'power-off', title: 'Sign out', rootName: '/sign-in' },
  ];

  return (
    <Header
      menu={
        <HeaderMenu menu={menu} mobileButtons={[
          { pathname: '/sports', title: 'Schedule', icon: calendarIcn, isActive: isScheduleShown, handler: toggleSportsPageSchedule },
          { pathname: '/live', title: 'Program', icon: programIcn, isActive: isProgramShown, handler: toggleLivePlayProgram },
          { pathname: '/horses', title: 'Program', icon: horseSelectIcn, isActive: isHorsesSelectShown, handler: toggleHorsesPreviewSelect },
        ]} />
      }
      content={<Balance shrinkOnMobile />}
      dropdown={
        <HeaderDropdown name="PA47">
          <HeaderDropdownMenu menu={dropdownMenu} footer={<Balance vertical />} />
        </HeaderDropdown>
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isScheduleShown: selectSportsPageSchedule,
  isProgramShown: selectLivePlayProgram,
  isHorsesSelectShown: selectHorsesPreviewSelect,
});

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
  toggleScores: () => dispatch(toggleScores()),
  toggleMail: () => dispatch(toggleMail()),
  showSettings: () => dispatch(showSettings()),
  toggleSportsPageSchedule: () => dispatch(toggleSportsPageSchedule()),
  toggleLivePlayProgram: () => dispatch(toggleLivePlayProgram()),
  toggleHorsesPreviewSelect: () => dispatch(toggleHorsesPreviewSelect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserHeader));
