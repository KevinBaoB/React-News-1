import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function ArticleTeaser({id, title, date, handleTitleClick}) {
  
  return (
    <Container>  
        <Row>
            <Col> 
                <h2 className='title' onClick={handleTitleClick}>   {title}
                </h2>
            </Col>
            <Col>
                <p>
                    {date}
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default ArticleTeaser;
