import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>Our Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Point of Sale (POS) Application</h3>
              <p>Developed a comprehensive Point of Sale (POS) application using Angular for the frontend and Node.js with MongoDB for the backend. The application provides robust functionality, including barcode scanning, inventory management, sales tracking, and reporting, ensuring efficient and accurate transaction processing. Leveraging modern web technologies, the POS system is designed for scalability, user-friendly interaction, and seamless integration with various peripherals.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Angular</li> <li>Node js</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <div className="body">
              <h3>XRPL AutoMinter: Effortless NFT Minting without IPFS</h3>
              <p>
                Developed an innovative library that simplifies the NFT minting process by eliminating the need for IPFS logic, streamlining the creation and management of NFTs on the XRP ledger. This library provides a user-friendly interface and robust functionality, enabling developers to quickly and efficiently mint NFTs with minimal setup. By focusing on the XRP ledger, it ensures fast, secure, and cost-effective transactions, making it an ideal solution for artists, creators, and developers looking to leverage blockchain technology without the complexities of IPFS integration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>Decentralize Storage</li>
                <li>Clout Storage</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>HungerPlate</h3>
              <p>
                HungerPlate is an innovative application designed for both chefs and users. Chefs can register on the platform, upload their daily and upcoming menus, and manage each dish's availability with automatic expiration. This feature ensures that users always have access to fresh and timely information about available dishes, making it easier to discover and enjoy new culinary experiences.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}