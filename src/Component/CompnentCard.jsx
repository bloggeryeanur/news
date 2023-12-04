import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CompnentCard = ({ single }) => {
  const { author, details, image_url, title, total_view, rating, _id } = single;

  return (
    <div> 
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
            <p>Ratting: {rating.number}</p>
          </div>
        </div>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details ? details.slice(0, 250) : details}{" "}
            <Link to={`/news/${_id}`} className="m-2">More...</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CompnentCard;
