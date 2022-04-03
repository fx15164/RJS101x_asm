import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap';
import StaffForm from './StaffFormComponent';

function RenderStaff({staff}) {
	return (
		<Card className="m-1">
			<Link to={`/nhanvien/${staff.id}`} style={{textDecoration: 'none'}}>
				<CardImg src="assets/images/alberto.png" />
				<CardBody>
					<CardTitle className="text-center">{staff.name}</CardTitle>
				</CardBody>
			</Link>
		</Card>
	)
}


function StaffList({staffs, onAddStaff}) {

	const [column, setColumn] = useState(0);
	const [isFormOpen, setFormOpen] = useState(false);
	const [keyword, setKeyword] = useState('');
	const searchInput = useRef();

	const list = staffs.filter(staff => {
		const name = staff.name.toUpperCase();
		return name.search(keyword.toUpperCase()) != -1;
	});


	const itemClass = parseInt(column) !== 0 ? `col-${12 / column}` : 'col-6 col-md-4 col-lg-2';

	const handleSearch = (e) => {
		e.preventDefault();
		setKeyword(searchInput.current.value);
	}

	const toggleForm = () => setFormOpen(!isFormOpen);

	return (
		<div className="container">
			<StaffForm isOpen={isFormOpen} toggle={toggleForm} addStaff={onAddStaff} />
			<div className="row">
				<div className="d-flex p-2">
					<h4>Nhân viên</h4>
					<button className="btn btn-secondary mx-4" onClick={toggleForm}>
						<i className="fa fa-plus"></i>
					</button>
				</div>
				<div className="m-2 border-bottom"></div>
			</div>
			<div className="row m-1">
				<div className="col-12 col-md-6 d-flex">
					<label className="p-2">Sắp sếp: </label>
					<select className="form-select w-auto"
						value={column}
						onChange={e => setColumn(e.target.value)}
					>
						<option value="0">Mặc định</option>
						<option value="1">1 Cột</option>
						<option value="2">2 Cột</option>
						<option value="3">3 Cột</option>
					</select>
				</div>
				<form className="col-12 col-md-6 d-flex" onSubmit={handleSearch}>
					<input type="text" className="form-control"
						placeholder="Tìm kiếm"
						name="keyword"
						ref={searchInput}
					/>
					<button className="btn btn-primary" type="submit">Tìm</button>
				</form>
			</div>
			<div className="row">
				{list.map(staff => (
					<div key={staff.id} className={itemClass}>
						<RenderStaff staff={staff} />
					</div>
				))}
			</div>
		</div>
	)
}

export default StaffList;
