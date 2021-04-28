import React, { Fragment } from 'react'
import { Container, Row, Button, Col, Nav } from 'react-bootstrap'
import Layout from '../shared/layout'

const authenticatedOptions = (
  <Fragment>
    The User Be Signed In Here
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Row>
      <Col>
        <Nav.Link>
          <Button>
            Button
          </Button>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link>
          <Button>
            Button
          </Button>
        </Nav.Link>
      </Col>
      <Col>
        <Nav.Link>
          <Button>
            Button
          </Button>
        </Nav.Link>
      </Col>
    </Row>
  </Fragment>
)

const Home = ({ user }) => (
  <Layout>
    <Container>
      <h1>Welcome to the Full Stack Learning App!</h1>
      <Row className='justify-content-center'>
        { user ? authenticatedOptions : unauthenticatedOptions }
        {/* alwaysOptions */}
      </Row>
    </Container>
  </Layout>
)

export default Home