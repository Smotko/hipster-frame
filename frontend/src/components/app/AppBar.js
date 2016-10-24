import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FullscreenButton from './FullscreenButton';

class InstAppBar extends Component {

  constructor() {
    super();
    this.state = {
      fullscreen: false
    };
  }

  fullscreenChange(isFullScreen) {
    this.setState({
      fullscreen: isFullScreen
    });
  }

  render() {
    let styles = {}
    if (this.state.fullscreen) {
      styles = {
        display: 'none'
      };
    }
    return (
      <AppBar
        style={styles}
        title="Hipster Frame"
        iconElementLeft={<IconButton iconClassName="material-icons">photo_camera</IconButton>}
        iconElementRight={
          <div>
            <FullscreenButton
              onFullScreenChange={this.fullscreenChange.bind(this)}>
            </FullscreenButton>
            <IconMenu
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              iconButtonElement={<IconButton
                iconStyle={{color: "white"}}
                iconClassName="material-icons">person</IconButton>}
            >
              <MenuItem primaryText="Sign out" href="/api/instagram/logout" />
            </IconMenu>
          </div>
        }
      />
    );
  }
}

export default InstAppBar;
