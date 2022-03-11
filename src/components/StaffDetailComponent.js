import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

class StaffDetail extends Component {
    render() {
        const { name, doB, startDate, department, annualLeave, overTime } = this.props.staff;
        return (
            <div className="col-12 col-sm-6 col-lg-4 m-1">
                <Card>
                    <CardBody>
                        <h4>HỌ và tên: {name}</h4>
                        <p>Ngày sinh: {dateFormat(doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty: {dateFormat(startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban: {department.name}</p>
                        <p>Số ngày nghỉ còn lại: {annualLeave}</p>
                        <p>Số ngày đã làm thêm: {overTime}</p>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default StaffDetail;