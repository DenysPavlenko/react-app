import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchLiveMarketsData } from 'player-app/redux/live-markets/actions';
import { selectLiveMarkets } from 'player-app/redux/live-markets/selectors';
// Components
import ErrorIndicator from 'shared/components/error-indicator/error-indicator';
import Spinner from 'shared/components/spinner/spinner';
import LiveMarketsBanner from 'player-app/components/live-markets-banner/live-markets-banner';
import LiveMarketsBet from 'player-app/components/live-markets-bet/live-markets-bet';
import Typography from 'shared/components/typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './live-markets.sass';

const LiveMarkets = ({ className, liveMarkets: { loading, error, data }, fetchLiveMarketsData }) => {
  const classes = classNames({
    'live-markets': true,
    [className]: className
  });

  useLayoutEffect(() => {
    fetchLiveMarketsData();
  }, [fetchLiveMarketsData]);

  return (
    <div className={classes}>
      {error && <ErrorIndicator className="live-markets__error" retry={fetchLiveMarketsData} />}
      {(!error && loading) && <Spinner boxed/>}
      {(!error && !loading) &&
        <>
          {data.map(({ id, banner, title, content }) => (
            <React.Fragment key={id}>
              <LiveMarketsBanner className="live-markets__banner" image={banner} />
              <div className="live-markets__header">
                <Typography component="h2" className="live-markets__title">{title}</Typography>
                <FontAwesomeIcon className="live-markets__live" icon="tv" />
              </div>
              <div className="live-markets__body">
                {content.map(({ id, type, betsGroup }) => (
                  <div key={id} className="live-markets__bets">
                    <Typography component="h3" className="live-markets__bets-type">{type}</Typography>
                    {betsGroup.map(({ id, bets }) => (
                      <div key={id} className="live-markets__bets-group">
                        {bets.map(({ id, title, odd }) => (
                          <div key={id} className="live-markets__bets-bet">
                            <LiveMarketsBet title={title} odd={odd} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </>
      }
    </div>
  );
};

LiveMarkets.propTypes = {
  className: PropTypes.string,
  liveMarkets: PropTypes.object,
  title: PropTypes.string,
  fetchLiveMarketsData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  liveMarkets: selectLiveMarkets,
});

const mapDispatchToProps = dispatch => ({
  fetchLiveMarketsData: () => dispatch(fetchLiveMarketsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveMarkets);