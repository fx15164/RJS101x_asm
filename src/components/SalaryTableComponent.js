import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";

const SalaryTable = ({ staffs }) => {

    const [sortBy, setSortBy] = useState(0);

    // Cal salary
    for (let i in staffs) {
        const { salaryScale, overTime } = staffs[i];
        staffs[i].salary = Math.round(salaryScale * 3000000 + (overTime / 8) * 200000);
    }

    let sortedStaffs = [...staffs];

    if (sortBy === 1) {
        sortedStaffs.sort((a, b) => a.salary - b.salary);
    } else if (sortBy === 2) {
        sortedStaffs.sort((a, b) => b.salary - a.salary);
    }

    const staffsElement = sortedStaffs.map(
        ({ id, name, salaryScale, overTime, salary }) => {
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
        })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row m-1">
                <div className="col-12 col-md-6 d-flex">
                    <label className="p-2">Sắp sếp: </label>
                    <select className="form-select w-auto"
                        value={sortBy}
                        onChange={e => setSortBy(parseInt(e.target.value))}
                    >
                        <option value="0">Mã nhân viên</option>
                        <option value="1">Mức Lương (A-Z)</option>
                        <option value="2">Mức Lương (Z-A)</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {staffsElement}
            </div>
        </div>
    )
}

export default SalaryTable;