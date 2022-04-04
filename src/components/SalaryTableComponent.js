import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";
import {Breadcrumb, BreadcrumbItem, Card, CardBody} from "reactstrap";
import {baseUrl} from "../shared/baseUrl";

const SalaryTable = () => {

	const [sortBy, setSortBy] = useState(0);
	const [staffs, setStaffs] = useState([]);

	useEffect(() => {
		fetch(`${baseUrl}/staffsSalary`)
			.then(res => {
				if (res.ok) return res;
				else throw Error(`${res.status}: ${res.statusText}`);
			})
			.then(res => res.json())
			.then(data => setStaffs(data))
			.catch(e => console.log(e));
	}, []);

	let sortedStaffs = [...staffs];

	if (sortBy === 1) {
		sortedStaffs.sort((a, b) => a.salary - b.salary);
	} else if (sortBy === 2) {
		sortedStaffs.sort((a, b) => b.salary - a.salary);
	}

	const props = useSpring({
		to: { opacity: 1, x: 0, scale: 1},
		from: { opacity: 0, x: -100, scale: 0.1},
		config: { delay: 200, duration: 2000 }
	});

	const staffsElement = sortedStaffs.map(
		({id, name, salaryScale, overTime, salary}) => {
			return (
				<animated.div style={props} key={id} className="item col-12 col-md-6 col-lg-4">
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
				</animated.div>
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
