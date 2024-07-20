import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="" className="logo">
        <span>www.webventaire.co</span>
      </a>
      
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/talha-saeed-648486134/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B923088726787&text=Hello+Quantum Coders"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://discord.gg/UX9zrfVY/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
