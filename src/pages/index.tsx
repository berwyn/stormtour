import * as React from 'react'
import { style } from 'typestyle'
import { GridList, GridTile } from 'material-ui/GridList'
import { Card, CardMedia } from 'material-ui/Card'
import * as logo from '../images/stormblood.png'

const rootClass = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgb(149, 37, 29)',
  padding: 16
})

const logoClass = style({
  maxWidth: '80vw',
  maxHeight: '70vh',
  alignSelf: 'center'
})

const titleClass = style({
  margin: 0
})

const images = [
  {
    key: 1,
    image: logo
  },
  {
    key: 2,
    image: logo
  },
  {
    key: 3,
    image: logo
  },
  {
    key: 4,
    image: logo
  },
  {
    key: 5,
    image: logo
  },
  {
    key: 6,
    image: logo
  },
]

export default class IndexPage extends React.Component<{}, {}> {
  render() {
    console.log(logo)
    console.log('test?')
    return (
      <div className={rootClass}>
        <img className={logoClass} src={logo} />
        <GridList
          cellHeight={180}>
          {images.map(i => {
            return (
              <GridTile key={i.key}>
                <Card>
                  <CardMedia>
                    <img src={i.image} />
                  </CardMedia>
                </Card>
              </GridTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}
