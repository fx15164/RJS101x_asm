import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";

const SalaryTable = ({ staffs }) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {staffs.map(
                    ({ id, name, salaryScale, overTime }) => {
                        const salary = Math.round(salaryScale * 3000000 + (overTime / 8) * 200000);

                        return (
                            <div key={id} className='col-12 col-md-6 col-lg-4'>
                                <Card>
                                    <CardBody>
                                        <h4>{name}</h4>
                                        <div className="m-2">
                                            <p>Mã nhân viên: {id}</p>
                                            <p>Hệ số lương: {salaryScale}</p>
                                            <p>Số giờ làm thêm: {overTime}</p>
                                            <p>Lương: <strong>{salary}</strong></p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default SalaryTable;