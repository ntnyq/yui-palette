import styled from 'styled-components'
import { pcLayout, spLayout } from '../../utils/breakpoint'
import { fadeIn } from '../../utils/common-keyframes'

export const Container = styled.div`padding-bottom: 130px;`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-30%);
  opacity: 0;

  ${pcLayout(`width: 400px;`)};
  ${spLayout(`width: 65%;`)};

  animation: ${fadeIn} 1.5s ease 0s forwards;
`
export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  opacity: 0;

  ${pcLayout(`
    max-width: 740px;
    margin-top: 10px;
  `)};

  ${spLayout(`
    margin-top: 5px;
  `)};

  animation: ${fadeIn} 1.5s ease .3s forwards;
`

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  overflow: hidden;

  ${pcLayout(`
    height: 120px;
    margin-top: 50px;
  `)};

  ${spLayout(`
    height: 100px;
    margin-top: 40px;
  `)};

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 500%;
    transform-origin: left top;
  }

  div:nth-child(1) {
    transform: rotate(6deg);
    background-color: #2089a5;
  }
  div:nth-child(2) {
    transform: rotate(8deg);
    background-color: #c7aa71;
  }
  div:nth-child(3) {
    transform: rotate(12deg);
    background-color: #ad1341;
  }
  div:nth-child(4) {
    transform: rotate(16deg);
    background-color: #5d3523;
  }
`

export const Snc = styled.aside`
  position: fixed;
  padding: 10px 0;
  background-color: #5d3523;
  opacity: 0;

  ${pcLayout(`
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 10px 0;
    width: 44px;
    border-radius: 0 6px 6px 0;
  `)};

  ${spLayout(`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 5px;
    height: 45px;
    display: flex;
    border-radius: 6px 6px 0 0;
  `)};

  a {
    display: block;
    text-align: center;
    color: #fbf4f1;
    transition: .4s ease;

    ${pcLayout(`
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 22px;
    `)};

    ${spLayout(`
      width: 45px;
      height: 45px;
      line-height: 44px;
      font-size: 22px;
    `)};
  }

  a:nth-child(1):hover {
    color: #1da1f2;
  }

  a:nth-child(2):hover {
    color: #fff;
  }

  a:nth-child(3):hover {
    color: #ad1341;
  }

  a:nth-child(4):hover {
    color: #34a123;
  }

  animation: ${fadeIn} 1.5s ease .6s forwards;
`

export const Modal = styled.div``
