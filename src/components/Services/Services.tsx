import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import CodeIcon from "../../assets/codeIcon.png";
import MobileIcon from "../../assets/mobileIcon.png";
import BlockchainIcon from "../../assets/Blockchain-Icon.png"


export function Services() {
  return (
    <Container id="services">
      <h2>Our Professional Services For You</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="icon">
               <img src={ CodeIcon } alt="" />
            </div>
            <div className="body web-margin">
              <h3>Web Development</h3>
              <p>Whether you need a simple website or a complex web application, we can create it for you. With years of experience, our talented developers strategically integrate robust, scalable code architecture using modern technologies to deliver smooth UX, dynamic functionality, and assured performance.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
            <div className="icon">
               <img src={ MobileIcon } alt="" />
            </div>
            <div className="body">
              <h3>Mobile App Development</h3>
              <p>Bring your innovative app ideas to life and engage users across platforms. Our expert mobile developers design, build, and launch intuitive, user-friendly iOS and Android apps that not only look amazing but also deliver real results and ROI through optimized functionality.</p>
            </div>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
        <div className="project">
            <div className="icon">
               <img src={ BlockchainIcon } alt="" />
            </div>
            <div className="body">
              <h3>Blockchain</h3>
              <p>Whether you need a basic blockchain solution or a sophisticated decentralized application (DApp), we can build it for you. With years of experience, our skilled developers strategically implement secure, scalable blockchain architectures using cutting-edge technologies to deliver seamless user experiences, dynamic functionalities, and guaranteed performance.</p>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}