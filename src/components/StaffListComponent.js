import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';


class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: 0,
            keyword: ''
        }
    }

    changeColumn(column) {
        this.setState({ column });
    }

    render() {

        const { staffs } = this.props;
        const { column, keyword } = this.state;

        const itemClass = parseInt(column) !== 0 ? `col-${12 / column}` : 'col-6 col-md-4 col-lg-2';
        let filteredStaffs = staffs;
        if (keyword) {
            filteredStaffs = staffs.filter(staff => staff.name.toUpperCase().search(keyword.toUpperCase()) !== -1)
        }

        function RenderStaff({ staff }) {
            return (
                <Card className="m-1">
                    <Link to={`/nhanvien/${staff.id}`} style={{ textDecoration: 'none' }}>
                        <CardImg src="assets/images/alberto.png" />
                        <CardBody>
                            <CardTitle className="text-center">{staff.name}</CardTitle>
                        </CardBody>
                    </Link>
                </Card>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <h4>Nhân viên</h4>
                    <div className="m-2 border-bottom"></div>
                </div>
                <div className="row m-1">
                    <div className="col-12 col-md-6 d-flex">
                        <label className="p-2">Sắp sếp: </label>
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
                    <div className="col-12 col-md-6 d-flex">
                        <input type="text" className="form-control" placeholder="Tìm kiếm" 
                            value={keyword} onChange={e => this.setState({ keyword: e.target.value })}
                        />
                    </div>
                </div>

                <div className="row">
                    {filteredStaffs.map(staff => (
                        <div key={staff.id} className={itemClass}>
                            <RenderStaff staff={staff} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}
export default StaffList;