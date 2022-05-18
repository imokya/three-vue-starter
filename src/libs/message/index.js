import { h, render } from 'vue'
import MessageComponent from './index.vue'

const message = () => {
  const vnode = h(MessageComponent)
  render(vnode, document.body)
}

export default message
