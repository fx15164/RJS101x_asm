import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const DepartmentList = ({ departments }) => (
    <div className="container">
        <div className="row">
            {departments.map(department => (
                <div key={department.id} className="col-12 col-sm-6 col-lg-4">
                    <Card className="m-1">
                        <CardBody>
                            <h4>{department.name}</h4>
                            <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    </div>
)

export default DepartmentList;