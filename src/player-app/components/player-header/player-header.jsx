import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withBreakpoints } from 'react-breakpoints';
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
import { selectSportsWagers } from 'player-app/redux/sports-wagers/selectors';
import { toggleSportsPageWagers, hideSportsPageWagers } from 'player-app/redux/sports-page-wagers/actions';
// Components
import Header from 'shared/components/header/header';
import HeaderMenu from 'shared/components/header-menu/header-menu';
import Balance from 'player-app/components/balance/balance';
import HeaderDropdown from 'shared/components/header-dropdown/header-dropdown';
import HeaderDropdownMenu from 'shared/components/header-dropdown-menu/header-dropdown-menu';
import Button from 'shared/components/button/button';
// Assets
import cupIcon from 'shared/assets/images/icons/cup.png';
import timerIcn from 'shared/assets/images/icons/timer.png';
import cardsIcn from 'shared/assets/images/icons/cards.png';
import horseIcn from 'shared/assets/images/icons/horse.png';
import calendarIcn from 'shared/assets/images/icons/calendar.png';
import programIcn from 'shared/assets/images/icons/list.png';
import horseSelectIcn from 'shared/assets/images/icons/horse-alt.png';

const PlayerHeader = ({ toggleScores, toggleMail, showSettings, togglePersonalize, showSportsSchedule, toggleSportsPageSchedule, isProgramShown, toggleLivePlayProgram, isHorsesSelectShown, toggleHorsesPreviewSelect, sportsWagers, breakpoints, currentBreakpoint, toggleSportsPageWagers, hideSportsPageWagers }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (breakpoints[currentBreakpoint] < breakpoints.xl) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [breakpoints, currentBreakpoint]);

  useEffect(() => {
    sportsWagers.length === 0 && hideSportsPageWagers()
  }, [sportsWagers, hideSportsPageWagers]);

  return (
    <Header
      menu={
        <HeaderMenu
          menu={[
            { name: 'Sports', rootName: '/sports', icon: cupIcon, alt: "sports" },
            { name: 'Live', rootName: '/live', icon: timerIcn, alt: "live" },
            { name: 'Casino', rootName: '/casino', icon: cardsIcn, alt: "casino" },
            { name: 'Horses', rootName: '/horses', icon: horseIcn, alt: "horses" },
          ]}
          mobileButtons={[
            { pathname: '/sports', title: 'Schedule', icon: calendarIcn, isActive: showSportsSchedule, handler: toggleSportsPageSchedule },
            { pathname: '/live', title: 'Program', icon: programIcn, isActive: isProgramShown, handler: toggleLivePlayProgram },
            { pathname: '/horses', title: 'Program', icon: horseSelectIcn, isActive: isHorsesSelectShown, handler: toggleHorsesPreviewSelect }
          ]}
        />
      }
      content={
        (isMobile && sportsWagers.length) ?
          <Button variant="accent" onClick={toggleSportsPageWagers}>{sportsWagers.length} Bet(s)</Button> :
          <Balance shrinkOnMobile />
      }
      dropdown={
        <HeaderDropdown>
          <HeaderDropdownMenu
            menu={[
              { icon: 'calendar', title: 'Scores', handler: toggleScores },
              { icon: 'file-alt', title: 'Rules', rootName: '/rules' },
              { icon: 'envelope', title: 'Mail', handler: toggleMail },
              { icon: 'cog', title: 'Settings', handler: showSettings },
              { icon: 'paint-brush', title: 'Personalize it', handler: togglePersonalize },
              { icon: 'power-off', title: 'Sign out', rootName: '/sign-in' },
            ]}
            footer={<Balance vertical />}
          />
        </HeaderDropdown>
      }
    />
  );
};

PlayerHeader.propTypes = {
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
  toggleScores: PropTypes.func,
  toggleMail: PropTypes.func,
  showSettings: PropTypes.func,
  togglePersonalize: PropTypes.func,
  toggleSportsPageSchedule: PropTypes.func,
  toggleLivePlayProgram: PropTypes.func,
  toggleHorsesPreviewSelect: PropTypes.func,
  showSportsSchedule: PropTypes.bool,
  isHorsesSelectShown: PropTypes.bool,
  isProgramShown: PropTypes.bool,
  sportsWagers: PropTypes.array,
  toggleSportsPageWagers: PropTypes.func,
  hideSportsPageWagers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  showSportsSchedule: selectSportsPageSchedule,
  isProgramShown: selectLivePlayProgram,
  isHorsesSelectShown: selectHorsesPreviewSelect,
  sportsWagers: selectSportsWagers,
});

const mapDispatchToProps = dispatch => ({
  togglePersonalize: () => dispatch(togglePersonalize()),
  toggleScores: () => dispatch(toggleScores()),
  toggleMail: () => dispatch(toggleMail()),
  showSettings: () => dispatch(showSettings()),
  toggleSportsPageSchedule: () => dispatch(toggleSportsPageSchedule()),
  toggleLivePlayProgram: () => dispatch(toggleLivePlayProgram()),
  toggleHorsesPreviewSelect: () => dispatch(toggleHorsesPreviewSelect()),
  toggleSportsPageWagers: () => dispatch(toggleSportsPageWagers()),
  hideSportsPageWagers: () => dispatch(hideSportsPageWagers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withBreakpoints(PlayerHeader)));
