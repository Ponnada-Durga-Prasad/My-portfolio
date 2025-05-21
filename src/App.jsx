// import React from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col,
//   Card,
//   Form,
//   Button,
// } from "react-bootstrap";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
// import "./App.css";
// import profileImg from "./assets/profile.JPG";
// const projects = [
//   {
//     title: "TODO List",
//     description:
//       "Responsive web application using React and Tailwind CSS with modern UI/UX.",
//     sourceCode: "https://github.com/Ponnada-Durga-Prasad/TODO-App",
//     liveDemo: "https://comfy-kheer-1b40a0.netlify.app/",
//   },
//   {
//     title: "Portfolio",
//     description:
//       "Portfolio application using React and Bootstrap with animations.",
//     sourceCode: "https://github.com/Ponnada-Durga-Prasad/My-portfolio",
//     liveDemo: "https://durga-prasad-portfolio.netlify.app/",
//   },
// ];

// const skills = [
//   { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
//   { name: "Express.js", icon: <SiExpress color="#000000" /> },
//   { name: "React.js", icon: <SiReact color="#61dafb" /> },
//   { name: "Node.js", icon: <SiNodedotjs color="#8cc84b" /> },
// ];

// function App() {
//   return (
//     <>
//       {/* Navbar */}
//       <Navbar
//         fixed="top"
//         bg="dark"
//         variant="dark"
//         expand="lg"
//         className="shadow-sm"
//       >
//         <Container>
//           <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className="nav-link-custom">
//                 Home
//               </Nav.Link>
//               <Nav.Link href="#portfolio" className="nav-link-custom">
//                 Portfolio
//               </Nav.Link>
//               <Nav.Link href="#about" className="nav-link-custom">
//                 About
//               </Nav.Link>
//               <Nav.Link href="#skills" className="nav-link-custom">
//                 Skills
//               </Nav.Link>{" "}
//               {/* New menu item */}
//               <Nav.Link href="#contact" className="nav-link-custom">
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <section id="home" className="hero-section d-flex align-items-center">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
//               <p className="lead my-4">
//                 Hi! I'm a passionate developer creating beautiful and performant
//                 web applications.
//               </p>
//               <a href="#portfolio" className="btn btn-primary btn-lg">
//                 See My Work
//               </a>
//             </Col>
//             <Col md={6} className="text-center">
//               <img
//                 src={profileImg}
//                 alt="Profile"
//                 className="img-fluid rounded shadow-lg hero-image"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="portfolio-section py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">My Projects</h2>
//           <Row className="justify-content-center">
//             {projects.map((project, idx) => (
//               <Col key={idx} md={4} sm={6} className="mb-4">
//                 <Card className="shadow-sm h-100">
//                   <Card.Body className="d-flex flex-column">
//                     <Card.Title>{project.title}</Card.Title>
//                     <Card.Text>{project.description}</Card.Text>
//                     <div className="mt-auto">
//                       <a
//                         href={project.liveDemo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-success w-100 mb-2" // Live Demo button
//                       >
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.sourceCode}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-primary w-100"
//                       >
//                         View Source Code
//                       </a>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Social Links */}
//           <div className="social-links d-flex justify-content-center mt-4 gap-4">
//             <a
//               href="https://github.com/Ponnada-Durga-Prasad"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//               aria-label="GitHub"
//             >
//               <FaGithub size={36} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/durga-prasad-ponnada/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin size={36} color="#0A66C2" />
//             </a>
//           </div>
//         </Container>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about-section py-5">
//         <Container>
//           <h2 className="text-center mb-5">About Me</h2>
//           <Row className="align-items-center">
//             <Col md={6} className="text-center mb-4 mb-md-0">
//               <img
//                 src={profileImg}
//                 alt="Profile"
//                 className="img-fluid rounded-circle shadow-lg about-photo"
//               />
//             </Col>
//             <Col md={6}>
//               <p className="lead">
//                 I'm a software developer with expertise in React, Bootstrap, and
//                 building modern responsive web projects. I love crafting
//                 beautiful user experiences with smooth animations.
//               </p>
//               <p>
//                 When I'm not coding, I enjoy gardening, traveling, and learning
//                 about new web technologies.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="skills-section py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">Skills</h2>
//           <Row className="justify-content-center text-center">
//             {skills.map((skill, idx) => (
//               <Col key={idx} xs={6} sm={3} className="mb-4">
//                 <div className="skill-icon mb-2">
//                   <a
//                     href={`https://www.google.com/search?q=${encodeURIComponent(
//                       skill.name
//                     )}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={skill.name}
//                   >
//                     {React.cloneElement(skill.icon, { size: 80 })}
//                   </a>
//                 </div>
//                 <h5>{skill.name}</h5>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact-section py-5">
//         <Container>
//           <h2 className="text-center mb-5">Contact Me</h2>
//           <Row className="justify-content-center">
//             <Col md={6}>
//               <Form>
//                 <Form.Group className="mb-3" controlId="contactName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter your name" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="contactEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="email" placeholder="Enter your email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="contactMessage">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     placeholder="Write your message here..."
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">
//                   Send Message
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Footer */}
//       <footer className="footer bg-dark text-white text-center py-3">
//         &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
//       </footer>
//     </>
//   );
// }

// export default App;

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import "./App.css";
import profileImg from "./assets/profile.JPG";
import resume from "./assets/Durga Prasad Ponnad_fs39_32115.pdf";
import React, { useEffect, useRef } from "react";
const projects = [
  {
    title: "TODO List",
    description:
      "Responsive web application using React and Tailwind CSS with modern UI/UX.",
    sourceCode: "https://github.com/Ponnada-Durga-Prasad/TODO-App",
    liveDemo: "https://comfy-kheer-1b40a0.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio application using React and Bootstrap with animations.",
    sourceCode: "https://github.com/Ponnada-Durga-Prasad/My-portfolio",
    liveDemo: "https://durga-prasad-portfolio.netlify.app/",
  },
];

const skills = [
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Express.js", icon: <SiExpress color="#AAAAAA" /> }, // Changed from black to gray
  { name: "React.js", icon: <SiReact color="#61dafb" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#8cc84b" /> },
];

function App() {
  function useScrollFadeIn() {
    const ref = useRef();
    useEffect(() => {
      const node = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
          }
        },
        { threshold: 0.3 }
      );
      if (node) observer.observe(node);
      return () => observer.disconnect();
    }, []);
    return ref;
  }
  return (
    <>
      {/* Navbar */}
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#portfolio" className="nav-link-custom">
                Projects
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="nav-link-custom">
                Skills
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold hero-text-animate">
                Welcome to My Portfolio
              </h1>

              <p className="lead my-4 animate-text">
                Hi! I'm a passionate developer creating beautiful and performant
                web applications.
              </p>

              <a
                href={resume}
                className="btn btn-primary btn-lg"
                download="Durga Prasad Ponnad_fs39_32115.pdf"
              >
                Download Resume
              </a>
            </Col>

            {/* New Right Side Animation Column */}
            <Col
              md={6}
              className="hero-animation-col d-flex flex-column align-items-center"
            >
              <div className="tech-icons">
                <SiReact size={64} color="#61dafb" title="React.js" />
                <SiNodedotjs size={64} color="#8cc84b" title="Node.js" />
                <SiMongodb size={64} color="#47a248" title="MongoDB" />
                <SiExpress size={64} color="#AAAAAA" title="Express.js" />
              </div>
              <pre className="code-typing">
                {`const greet = () => {
  console.log("Hello from Durga Prasad!");
};
greet();`}
              </pre>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate-text">My Projects</h2>
          <Row className="justify-content-center">
            {projects.map((project, idx) => (
              <Col key={idx} md={4} sm={6} className="mb-4">
                <Card className="shadow-sm h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mt-auto">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success w-100 mb-2" // Live Demo button
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100"
                      >
                        View Source Code
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Social Links */}
          <div className="social-links d-flex justify-content-center mt-4 gap-4">
            <a
              href="https://github.com/Ponnada-Durga-Prasad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={36} />
            </a>
            <a
              href="https://www.linkedin.com/in/durga-prasad-ponnada/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={36} color="#0A66C2" />
            </a>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-5 fade-in-section"
        ref={useScrollFadeIn()}
      >
        <Container>
          <h2 className="text-center mb-5 animate-text">About Me</h2>

          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={profileImg}
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg about-photo"
              />
            </Col>
            <Col md={6}>
              <p className="lead">
                I'm a software developer with expertise in React, Bootstrap, and
                building modern responsive web projects. I love crafting
                beautiful user experiences with smooth animations.
              </p>
              <p>
                When I'm not coding, I enjoy gardening, traveling, and learning
                about new web technologies.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate-text">Skills</h2>

          <Row className="justify-content-center text-center">
            {skills.map((skill, idx) => (
              <Col key={idx} xs={6} sm={3} className="mb-4">
                <div className="skill-icon mb-2">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      skill.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={skill.name}
                  >
                    {React.cloneElement(skill.icon, { size: 80 })}
                  </a>
                </div>
                <h5>{skill.name}</h5>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <Container>
          <h2 className="text-center mb-5 animate-text">Contact Me</h2>

          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <div className="social-links d-flex justify-content-center gap-4">
                <a
                  href="durgaprasadponnada06@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <FaEnvelope size={36} />
                </a>
                <a
                  href="https://www.linkedin.com/in/durga-prasad-ponnada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={36} color="#0A66C2" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </>
  );
}

export default App;
