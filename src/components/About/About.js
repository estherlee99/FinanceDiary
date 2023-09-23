import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState('auto');

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [textRef]);

  return (
    <Container className="mt-4">
      <h2>About</h2>
      <br></br>
      <Row className="align-items-start">
        <Col md={4} className="mb-3 pr-2">
          <div style={{ height: textHeight, overflow: 'hidden' }}>
            <Image
              src="profilePhoto.JPG"
              alt="Esther Lee"
              rounded
              fluid
              className="shadow-sm"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </Col>
        <Col md={8} className="mb-3 pl-2">
          <div ref={textRef}>
            <p>
              Esther is a highly motivated and skilled Computer Science software developer with a passion for creating innovative and efficient solutions. Seeking a challenging position where she can leverage my technical expertise and problem-solving abilities to contribute to the development of cutting-edge software applications. As a proactive team player, she aims to collaborate with talented professionals to drive the success of projects and exceed organizational goals.
            </p>
            <p>
              Esther's collaborative nature shines in cross-functional teams, aligning with various stakeholders to realize robust solutions. This approach is highlighted in her roles at Goldman Sachs and Boston College, where she enhanced workflows and developed comprehensive applications. Netflists, her user-friendly Chrome Extension, showcases her commitment to intuitive design and user experience. With a wealth of experiences and proficiency in JavaScript, HTML, CSS, and React, Esther stands out as a front-end engineer, offering unique insights and innovative solutions. She comprehends user needs and employs technology effectively, making her a valuable asset to any development team. 
            </p>
            <a href="EstherLeeResume.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 d-block">View Esther's Resume</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
