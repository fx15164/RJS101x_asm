import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Modal, ModalBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import dateFormat from 'dateformat';
import StaffForm from "./StaffFormComponent";

function StaffDetail({ staff, departments, deleteStaff, editStaff}) {
	const navigate = useNavigate();
	const [isFormOpen, setFormOpen] = useState(false);

    if (!staff) {
        return <></>;
    }

    const { id, name, doB, startDate, annualLeave, overTime, departmentId, salaryScale } = staff;

	let department = departments.filter(department => department.id === departmentId)[0];
	if (!department) {
		department = departments[0];
	}
	department.index = departments.findIndex(department => department.id === departmentId);
	

	const handleDelete = () => {
		deleteStaff(id);
		navigate('../');
	}

	const toggleForm = () => setFormOpen(!isFormOpen);

	const handleEditSubmit = (staff) => {
		editStaff(staff);
		toggleForm();
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
					<button className="btn btn-primary mx-2" onClick={toggleForm}>Chỉnh sửa</button>
					<button className="btn btn-danger mx-2" onClick={handleDelete}>Xóa bỏ</button>
				</div>
			</div>
			<Modal isOpen={isFormOpen} toggle={toggleForm}>
				<ModalBody>
					<StaffForm departments={departments} 
						action="Sửa"
						initialValues={{
							id, name, salaryScale, annualLeave, overTime,
							department: department.index,
							doB: dateFormat(doB, 'yyyy-mm-dd'),
							startDate: dateFormat(startDate, 'yyyy-mm-dd'),
						}} 
						onSubmit={handleEditSubmit}
					/>
				</ModalBody>
			</Modal>
        </div>
    )
}

export default StaffDetail;
