import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const {author,_id,category_id,details,image_url,title,total_view,rating,} = news; 
  return (
    <Card style={{ width: "100%", marginTop: "11px" }}>
      <div className="d-flex w-100 m-1">
        <div>
          <Card.Img
            className="roundedCircle"
            style={{ height: "55px" }}
            variant="top"
            src={author.img}
          />
          <p>{author.name}</p>
        </div>
        <div>
          <p>View : {total_view}</p>
          <p>Ratting: {rating?.number}</p>
        </div>
      </div>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
          details.length > 250 ? <p>{details.slice(0,248)} <Link to={`news/${_id}`}>More</Link> </p> 
          : 
          <p>{details}</p>
          }
          </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default News;
