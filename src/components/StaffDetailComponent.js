import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

class StaffDetail extends Component {
    render() {
        const { name } = this.props.staff;
        return (
            <div className="col-12 col-sm-6 col-lg-4 m-1">
                <Card>
                    <CardBody>
                        <h4>HỌ và tên: {name}</h4>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default StaffDetail;