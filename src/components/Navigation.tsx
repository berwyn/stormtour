import * as React from 'react'
import Helmet from 'react-helmet'
import AppBar from 'material-ui/AppBar'

export default class Navigation extends React.Component<{}, {}> {
  render() {
    const head = Helmet.peek()
    let title = 'Stormtour'
    if (head && head.title) {
      title = head.title.toString()
    }

    return (
      <div>
        <AppBar title={title} showMenuIconButton={false} zDepth={0} />
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    )
  }
}
