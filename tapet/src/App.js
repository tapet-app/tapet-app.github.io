import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <Image src={require('./img/logo.png')} id='logo'/>
          </Row>

          <Row>
            <Image src={require('./img/patterns_01.png')} id='patterns'/>
          </Row>

          <Row id='google-play'>
            <a href='https://play.google.com/store/apps/details?id=com.sharpregion.tapet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img
                height="80"
                alt='Get it on Google Play'
                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
            </a>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
