import React from 'react'
import Card from 'react-bootstrap/Card';
import img from '../Assets/img.png'
function Things() {
  return (
    <div className='things d-flex mb-3'>
        <div className='d-flex flex-wrap gap-4 mx-4'>
            <Card style={{ width: '13rem', height: '18rem', border: 'none' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                    Some quick 
                    </Card.Text>
                    <Card.Title className='card-tit'>Card Title</Card.Title>
                    <Card.Text>
                    Some quick 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '13rem', height: '15rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='card-tit'>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '13rem', height: '15rem',border: 'none' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '13rem', height: '15rem',border: 'none' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '13rem', height: '15rem',border: 'none' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <Card style={{ width: '13rem', height: '15rem',border: 'none' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Things