import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

const Course = () => {
    return(
        <div style={{ padding:'5px' }} >
        
<div>
<Container>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/280553036_4682297655205543_341960351400812358_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=kQq-nDKnzNsAX_LiGVn&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT-uM_v41aMh3qJqro4VF6byv9dHZcgR7iddoRtJ4xooag&oe=628556B8" />
  <Card.Body>
    <Card.Title>Graphic Designing and Video Animation</Card.Title>
    <Card.Text>
    After the Great success of the Certified Python Programming Course.
We are happy to announce Graphic Designing courses for those students who are willing to step-in in IT.
"Graphic Designing and Video Animation"
.
Admission starting from
11th May 2022 to 20th May 2022
.
    </Card.Text>
    <Button href="/form" variant="primary">Apply Here</Button>
  </Card.Body>
</Card></Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/279713784_4657894154312560_2126395355466789802_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=730e14&_nc_ohc=EjxsFmIchMYAX-fpEnJ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT8j_JgZJB_6XuSfGc7Ob0E5XDAnYc14BPtHZhxTqETy1g&oe=628392AB" />
  <Card.Body>
    <Card.Title>Certified Computer Operator</Card.Title>
    <Card.Text>
    providing a great opportunity for young people in Karachi who are willing to enter the field of information technology. We are delighted to announce the courses "Certified Computer Operator"and "Certified Computer Accountancy".
    </Card.Text>
    <Button href="/form" variant="primary">Apply Here</Button>
  </Card.Body>
</Card>
</Col>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/279103671_4636899553078687_7040392140300115878_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=730e14&_nc_ohc=omn9oAVfC7cAX9HfPJy&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT-88-OkiVbppSDtqlORW_-EWsX7jkfxgbvP6Dfe6bcCug&oe=6284C6F5" />
  <Card.Body>
    <Card.Title>Certified Python Programming Course</Card.Title>
    <Card.Text>
    Dear Youth of Hyderabad (Male Only)
We are going to announce Certified Python Programming Course (Highly Paid Programming Language of the World)
.
"Certified Python Programming Course"
.
Admission starting from
24th April 2022 to 7th May 2022
    </Card.Text>
    <Button href="/form" variant="primary">Apply Here</Button>
  </Card.Body>
</Card></Col>
  </Row>
  
</Container>

</div>
<div>

</div>
    </div>
    ) ;
    
  };
  
  export default Course;

  