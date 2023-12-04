import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from "react-router-dom";


const NewsDetails = () => {
    const dn = useLoaderData()
    const {title,category_id,_id, details, image_url} = dn
    return (
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <h2>Details Page </h2>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{details}  </Card.Text>
            <Link to={`/`}>Go Home</Link>
        </Card.Body>
      </Card>
    );
};

export default NewsDetails;