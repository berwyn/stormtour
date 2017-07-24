import * as React from 'react'
import { deepPurple500, amberA700 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import Navigation from '../components/Navigation'
import Bio from '../components/Bio'

const theme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: deepPurple500,
    accent1Color: amberA700,
  }
})

injectTapEventPlugin()

interface LayoutTemplateProps {
  location: {
    pathname: string
  }

  children: () => JSX.Element[]
}

interface LayoutTemplateState {
  drawerOpen: boolean
}

export default class LayoutTemplate extends React.Component<LayoutTemplateProps, LayoutTemplateState> {
  constructor(props: LayoutTemplateProps) {
    super(props)
    this.state = { drawerOpen: false }
  }

  render() {
    let header = null
    if (this.props.location.pathname !== '/') {
      header = <AppBar showMenuIconButton={true} onLeftIconButtonTouchTap={this.toggleDrawer} />
    }

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          {header} 
          {this.props.children()}
          <Bio /> 
          <Drawer
            docked={false}
            open={this.state.drawerOpen}
            onRequestChange={() => this.toggleDrawer()}
            />
        </div>
      </MuiThemeProvider>
    )
  }

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen })
}
