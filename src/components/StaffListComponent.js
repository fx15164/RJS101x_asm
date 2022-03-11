import React, { Component } from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';


class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }

    selectStaff(staff) {
        this.setState({ selectedStaff: staff });
        console.log(staff);
    }

    render() {
        const { staffs } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {staffs.map(staff => (
                        <div key={staff.id} className="col-12 col-sm-6 col-lg-4">
                            <Card onClick={() => this.selectStaff(staff)} className="m-1">
                                <CardBody>
                                    <CardTitle>{staff.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}
export default StaffList;