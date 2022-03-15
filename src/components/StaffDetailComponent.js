import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import dateFormat from 'dateformat';
import { Link } from "react-router-dom";

class StaffDetail extends Component {

    render() {

        const { staff } = this.props;
        if (!staff) {
            return <></>;
        }

        const { name, doB, startDate, department, annualLeave, overTime } = staff;

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem>{name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 col-lg-3">
                        <img style={{ width: '100%', height: 'auto' }} src="../assets/images/alberto.png" />
                    </div>
                    <div className="col-12 col-sm-8 col-lg-9">
                        <h4>Họ và tên: {name}</h4>
                        <p>Ngày sinh: {dateFormat(doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty: {dateFormat(startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban: {department.name}</p>
                        <p>Số ngày nghỉ còn lại: {annualLeave}</p>
                        <p>Số ngày đã làm thêm: {overTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffDetail;