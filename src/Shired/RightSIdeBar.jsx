import { Button, ListGroup } from "react-bootstrap";

const RightSIdeBar = () => {
    return (
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Google
      </Button>
      <Button variant="secondary" size="lg">
       Facebook
      </Button>

      <ListGroup >
      <ListGroup.Item action href="#link1">
        Coming
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Last Month
      </ListGroup.Item>
      <ListGroup.Item action>
        Future
      </ListGroup.Item> <ListGroup.Item action>
        Next
      </ListGroup.Item> <ListGroup.Item action>
        Last Week
      </ListGroup.Item> <ListGroup.Item action>
        Trends
      </ListGroup.Item>
    </ListGroup>
    </div>
    )
};

export default RightSIdeBar;