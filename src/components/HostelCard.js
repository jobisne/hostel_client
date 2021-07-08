import React from 'react'
import { Link } from "react-router-dom";

import { Card} from "semantic-ui-react";


function HostelCard({ hostel:{ hostelName, hostelMaster, hostelImage, hostelNo}}) {
    return (
        <Card>
        <img src={hostelImage} alt='hostel' />
        <Card.Content>
          <Card.Header>{hostelName}</Card.Header>
          <Card.Meta>{hostelMaster}</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
       
      </Card>
    )
}

export default HostelCard

