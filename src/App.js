import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props, context) {
    injectTapEventPlugin();
    super(props, context);
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);

    this.state = {
      openDrawer: false,
    };
  }

  // Drawer
  handleToggleDrawer() {
    this.setState({ openDrawer: !this.state.openDrawer });
    console.log("toogle")
  }
  handleCloseDrawer() {
    this.setState({ openDrawer: false });
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggleDrawer}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div>
            {this.props.children}
          </div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.openDrawer}
            onRequestChange={(openDrawer) => this.setState({ openDrawer })}
          >
            <Link to="/"><MenuItem onTouchTap={this.handleCloseDrawer}>Home</MenuItem></Link>
            {/*<MenuItem onTouchTap={this.handleCloseDrawer}>Home</MenuItem>*/}
            <Link to="/setting"><MenuItem onTouchTap={this.handleCloseDrawer}>Setting</MenuItem></Link>
            {/*<MenuItem onTouchTap={this.handleCloseDrawer}>Setting</MenuItem>*/}

          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;












/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */