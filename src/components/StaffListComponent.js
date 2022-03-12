import React, { Component } from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import StaffDetail from "./StaffDetailComponent";


class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: 0,
            selectedStaff: null
        }
    }

    selectStaff(staff) {
        this.setState({ selectedStaff: staff });
    }

    render() {
        const { column, selectedStaff } = this.state;
        const { staffs } = this.props;

        return (
            <div className="container">
                <div className="row m-1">
                    <select className="form-select w-auto" value={column}
                        onChange={e => {}}
                    >
                        <option value="0">Mặc định</option>
                        <option value="1">1 Cột</option>
                        <option value="2">2 Cột</option>
                        <option value="3">3 Cột</option>
                    </select>
                </div>

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

                <p className="m-1">Bấm vào tên nhân viên để thêm thông tin</p>

                <div className="row">
                    {selectedStaff ? <StaffDetail staff={selectedStaff} /> : ''}
                </div>
            </div>
        )
    }

}
export default StaffList;