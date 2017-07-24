import * as React from 'react'
import { style } from 'typestyle'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
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
  maxHeight: '50vh',
  alignSelf: 'center',
  marginBottom: 32,
})

const titleClass = style({
  margin: 0
})

const stripClass = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  paddingLeft: 8,
  paddingBottom: 8,
})

interface Tag {
  name: string
  avatar: any
}

interface Image {
  key: string | number
  image: any,
  tags: Tag[]
}

const images: Image[] = [
  {
    key: 1,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 2,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
      { avatar: logo, name: 'Coconi Coni' },
    ],
  },
  {
    key: 3,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
      { avatar: logo, name: 'Arcane Gem' },
      { avatar: logo, name: 'Coconi Coni' },
      { avatar: logo, name: 'Walmar Temployee' },
    ],
  },
  {
    key: 4,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
      { avatar: logo, name: `X'rhashi Karimak` },
    ],
  },
  {
    key: 5,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 6,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 7,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 8,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 9,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 10,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 11,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
  {
    key: 12,
    image: logo,
    tags: [
      { avatar: logo, name: 'Ruby Onrailles' },
    ],
  },
]

export default class IndexPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className={rootClass}>
        <img className={logoClass} src={logo} />
        <GridList
          cols={3}
          cellHeight={'auto'}>
          {images.map(i => this.buildCard(i))}
        </GridList>
      </div>
    )
  }

  private buildCard(image: Image): JSX.Element {
    return (
      <GridTile key={image.key}>
        <Card>
          <CardMedia
            overlay={this.buildTags(image.tags)}>
            <img src={image.image} />
          </CardMedia>
        </Card>
      </GridTile>
    )
  }

  private buildTags(tags: Tag[]): JSX.Element {
    return (
      <div className={stripClass}>
        {tags.map((t, i) => (
          <Chip key={i} style={{ marginRight: 8 }}>
            <Avatar src={t.avatar} />
            {t.name}
          </Chip>
        ))}
      </div>
    )
  }
}
