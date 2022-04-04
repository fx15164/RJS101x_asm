import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from 'dateformat';
import { Link, useNavigate } from "react-router-dom";

function StaffDetail({ staff, departments, deleteStaff }) {
	const navigate = useNavigate();

    if (!staff) {
        return <></>;
    }

    const { id, name, doB, startDate, annualLeave, overTime, departmentId } = staff;
	const department = departments.filter(departments => departments.id === departmentId)[0];


	const handleDelete = () => {
		deleteStaff(id);
		navigate('../');
	}

    return (
        <div className="container mb-2">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem>{name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <img style={{ width: '100%', height: 'auto' }}
                        src="../assets/images/alberto.png" alt={name} />
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <h4>Họ và tên: {name}</h4>
                    <p>Ngày sinh: {dateFormat(doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(startDate, "dd/mm/yyyy")}</p>
					{department && <p>Phòng ban: {department.name}</p>}
                    <p>Số ngày nghỉ còn lại: {annualLeave}</p>
                    <p>Số ngày đã làm thêm: {overTime}</p>
                </div>
            </div>
			<div className="row">
				<div className="col-12 text-center">
					<button className="btn btn-primary mx-2">Chỉnh sửa</button>
					<button className="btn btn-danger mx-2" onClick={handleDelete}>Xóa bỏ</button>
				</div>
			</div>
        </div>
    )
}

export default StaffDetail;
