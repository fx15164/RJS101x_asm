import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';


class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: 0
        }
    }

    changeColumn(column) {
        this.setState({ column });
    }

    render() {

        const { staffs } = this.props;
        const { column } = this.state;

        const itemClass = column != 0 ? `col-${12 / column}` : 'col-6 col-sm-4 col-lg-2';

        return (
            <div className="container">
                <div className="row">
                    <h4>Nhân viên</h4>
                    <div className="m-2 border-bottom"></div>
                </div>
                <div className="row m-1">
                    <select className="form-select w-auto"
                        value={column}
                        onChange={e => this.changeColumn(e.target.value)}
                    >
                        <option value="0">Mặc định</option>
                        <option value="1">1 Cột</option>
                        <option value="2">2 Cột</option>
                        <option value="3">3 Cột</option>
                    </select>
                </div>

                <div className="row">
                    {staffs.map(staff => (
                        <div key={staff.id} className={itemClass}>
                            <Card className="m-1">
                            <Link to={`/nhanvien/${staff.id}`} style={{textDecoration: 'none'}}>
                                    <CardImg src="assets/images/alberto.png" />
                                    <CardBody>
                                        <CardTitle className="text-center">{staff.name}</CardTitle>
                                    </CardBody>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}
export default StaffList;