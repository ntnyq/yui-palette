import * as React from 'react'
import { Container, Logo, ColorWrapper, Footer, Snc } from './styles'
import colors from '../../config/colors'
import Icon from '../Icon'
import Color from '../Color'
import Preview from '../Preview'
import Modal from '../Modal'

interface Props {}

interface State {
  open: boolean
  num: number
  color: string
  modal: boolean
  productColor: string
  productName: string
  productLink: string
}

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      open: false,
      num: 0,
      color: '#ffffff',
      modal: false,
      productColor: '',
      productName: '',
      productLink: '',
    }
  }

  private onMouseOver(num: number) {
    const color = colors[num]

    this.setState({
      num,
      color: color.color,
      open: true,
    })
  }

  private onMouseOut() {
    this.setState({ open: false })
  }

  private showModal(num: number) {
    const color = colors[num]

    this.setState({
      num,
      modal: true,
      productColor: color.color,
      productName: color.product.name,
      productLink: color.product.link,
    })
  }

  private hiddenModal() {
    this.setState({ modal: false })
  }

  private prevColor() {
    const { num } = this.state
    const _num = num - 1 <= 0 ? colors.length - 1 : num - 1
    const color = colors[_num]

    this.setState({
      num: _num,
      productColor: color.color,
      productName: color.product.name,
      productLink: color.product.link,
    })
  }

  private nextColor() {
    const { num } = this.state
    const _num = num + 1 === colors.length ? 0 : num + 1
    const color = colors[_num]

    this.setState({
      num: _num,
      productColor: color.color,
      productName: color.product.name,
      productLink: color.product.link,
    })
  }

  public render() {
    const {
      color,
      open,
      modal,
      productName,
      productColor,
      productLink,
    } = this.state

    return (
      <Container>
        <Logo src='./images/logo.svg' alt='ロゴ' />
        <ColorWrapper>
          {colors.map((li, key) => (
            <Color
              key={key}
              num={key}
              color={li.color}
              productName={li.product.name}
              onMouseOver={this.onMouseOver.bind(this)}
              onMouseOut={this.onMouseOut.bind(this)}
              showModal={this.showModal.bind(this)}
            />
          ))}
        </ColorWrapper>
        <Footer>
          <div />
          <div />
          <div />
          <div />
        </Footer>
        <Preview open={open} color={color} />
        <Snc>
          {['twitter', 'github', 'globe', 'wechat'].map(name => {
            const [first, ...other] = name

            return (
              <a
                title={first.toUpperCase() + other.join('')}
                key={name}
                href='javascript:;'
              >
                <Icon name={name} />
              </a>
            )
          })}
        </Snc>
        <Modal
          modal={modal}
          color={productColor}
          productName={productName}
          productLink={productLink}
          hiddenModal={this.hiddenModal.bind(this)}
          prevColor={this.prevColor.bind(this)}
          nextColor={this.nextColor.bind(this)}
        />
      </Container>
    )
  }
}
