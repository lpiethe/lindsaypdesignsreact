import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle,
} from 'reactstrap';
import Camellia_2 from '../images/camelliaPhoto.jpg';
import Camellia_3 from '../images/Camellia Card.jpg';
import Camellia_1 from '../images/camelliaFinal.jpg';

const DesignCard = (props) => {
  return (
    <div className="row">
        <div className="col-4">
      <Card>
        <CardImg top width="100%" src={Camellia_2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Photograph</CardTitle>
        </CardBody>
      </Card>
      </div>
      <div className="col-4">
      <Card>
        <CardImg top width="100%" src={Camellia_3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Edit</CardTitle>
        </CardBody>
      </Card>
      </div>
      <div className="col-4">
      <Card>
        <CardImg top width="100%" src={Camellia_1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Print</CardTitle>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default DesignCard;