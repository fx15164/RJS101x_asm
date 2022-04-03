import React, {Component} from "react";
import {Modal, ModalBody} from "reactstrap";
import {DEPARTMENTS} from "../shared/staffs";

class StaffForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			doB: '',
			salaryScale: 1,
			startDate: '',
			department: 0,
			annualLeave: 0,
			overTime: 0,
			touch: {
				name: false,
				doB: false,
				startDate: false
			}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleInputChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleBlur(e) {
		this.setState({touch: {...this.state.touch, [e.target.name]: true}})
	}

	handleSubmit(e) {
		e.preventDefault();
		const {name, doB, salaryScale, startDate, department, annualLeave, overTime} = this.state;
		this.props.addStaff({
			name, doB, salaryScale, startDate, annualLeave, overTime,
			department: DEPARTMENTS[department],
			image: '/assets/images/alberto.png'
		});
		this.props.toggle();
		this.setState({
			name: '',
			doB: '',
			salaryScale: 1,
			startDate: '',
			department: DEPARTMENTS[0],
			annualLeave: 0,
			overTime: 0,
			touch: {
				name: false,
				doB: false,
				startDate: false
			}
		})
	}

	validate() {
		const {name, doB, startDate, touch} = this.state;
		const errors = {
			name: '',
			doB: '',
			startDate: '',
		}
		if (touch.name) {
			if (!name) {
				errors.name = "Yêu cầu nhập";
			} else if (name.length <= 2) {
				errors.name = "Yêu cầu nhập nhiều hơn 2 kí tự";
			} else if (name.length >= 30) {
				errors.name = "Yêu cầu nhập ít hơn 30 kí tự";
			}
		}
		if (touch.doB && !doB) {
			errors.doB = "Yêu cầu nhập";
		}
		if (touch.startDate && !startDate) {
			errors.startDate = "Yêu cầu nhập";
		}
		return errors;
	}

	render() {
		const {isOpen, toggle} = this.props;
		const {name, doB, salaryScale, startDate, department, annualLeave, overTime, touch} = this.state;

		const errors = this.validate();
		const submitable = !touch.name || errors.name || !touch.doB || errors.doB || !touch.startDate || errors.startDate

		return (
			<Modal isOpen={isOpen} toggle={toggle}>
				<ModalBody>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Tên</label>
							<div className="col-sm-9 form-control-sm">
								<input
									className="form-control" type="text"
									name="name"
									value={name}
									onChange={this.handleInputChange}
									onBlur={this.handleBlur}
								/>
								{errors.name && <div className="text-danger">{errors.name}</div>}
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Ngày sinh</label>
							<div className="col-sm-9 form-control-sm">
								<input
									className="form-control" type="date"
									name="doB"
									value={doB}
									onChange={this.handleInputChange}
									onBlur={this.handleBlur}
								/>
								{errors.doB && <div className="text-danger">{errors.doB}</div>}
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Ngày vào công ty</label>
							<div className="col-sm-9 form-control-sm">
								<input
									className="form-control" type="date"
									name="startDate"
									value={startDate}
									onChange={this.handleInputChange}
									onBlur={this.handleBlur}
								/>
								{errors.startDate && <div className="text-danger">{errors.startDate}</div>}
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Phòng ban</label>
							<div className="col-sm-9 form-control-sm">
								<select
									className="form-control" type="select"
									name="department"
									value={department}
									onChange={this.handleInputChange}
								>
									{DEPARTMENTS.map((department, i) => <option key={i} value={i}>{department.name}</option>)}
								</select>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Hệ số lương</label>
							<div className="col-sm-9 form-control-sm">
								<input
									className="form-control" type="number"
									min="1"
									step="0.1"
									name="salaryScale"
									value={salaryScale}
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Số ngày nghỉ còn lại</label>
							<div className="col-sm-9 form-control-sm">
								<input className="form-control" type="number"
									min="0"
									name="annualLeave"
									value={annualLeave}
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Số ngày làm thêm</label>
							<div className="col-sm-9 form-control-sm">
								<input className="form-control" type="number"
									min="0"
									name="overTime"
									value={overTime}
									onChange={this.handleInputChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col offset-3">
								<button className="btn btn-primary" type="submit" disabled={submitable}>Thêm</button>
							</div>
						</div>
					</form>
				</ModalBody>
			</Modal>
		)
	}
}

export default StaffForm;
