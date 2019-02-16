import Logo from '../components/logo'
import Title from '../components/title'
import Slogan from '../components/slogan'
import Navigation from '../components/navigation'

const links = [
  { title: 'Weibo', href: 'https://weibo.com/zceme'},
  { title: 'WeChat', href: 'https://img.zce.me/wechat.jpg'},
  { title: 'Blog', href: 'https://blog.zce.me'},
  { title: 'GitHub', href: 'https://github.com/zce'},
  { title: 'Email', href: 'mailto:w@zce.me'}
]

export default () => (
  <>
    <Logo/>
    <Title>Hey, Hey! Bitch</Title>
    <Slogan>I'm Lei Wang, a poet of China</Slogan>
    <Navigation links={links}/>
  </>
)
