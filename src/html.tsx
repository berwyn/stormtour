import * as React from 'react'
import Helmet from 'react-helmet'

declare var require: any;
interface HTMLPageProps {
  body: string
  headComponents: JSX.Element[]
  postBodyComponents: JSX.Element[]
}

declare var module: any;
module.exports = class HTMLPage extends React.Component<HTMLPageProps, {}> {
  render() {
    const head = Helmet.rewind()
    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta
            http-equiv="x-ua-compatible"
            content="ie=edge"
            />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            />
          <style
            dangerouslySetInnerHTML={{ __html: require('!raw-loader!./styles.css') }}
            />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
            />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
