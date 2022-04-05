import React from "react";
import {reduxForm, Field} from "redux-form";

const renderField = ({input, label, info, children, meta: {touched, error}}) => (
	<div className="form-group row">
		<label className="col-sm-3 col-form-label col-form-label-sm">{label}</label>
		<div className="col-sm-9 form-control-sm">
			{info.type !== 'select' &&
				<input
					className="form-control" {...info} {...input}
				/>}
			{info.type == 'select' &&
				<select className="form-control" {...input}>{children}</select>
			}
			{touched && error && <div className="text-danger">{error}</div>}
		</div>
	</div>

)

const required = value => !value ? "Yêu cầu nhập" : undefined;
const maxLength = max => value =>
  value && value.length >= max ? `Yêu cầu nhập ít hơn ${max} kí tự` : undefined;
const minLength = min => value =>
	!value || value.length <= min ? `Yêu cầu nhập nhiều hơn ${min} kí tự` : undefined;
const minLength2 = minLength(2);
const maxLength30 = maxLength(30);

const StaffForm = ({ handleSubmit, submitting, departments, action}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field name="name" label="Tên" 
				info={{type: 'text'}}
				component={renderField}
				validate={[required, minLength2, maxLength30]}
			/>
			<Field name="doB" label="Ngầy sinh" 
				info={{type: 'date'}}
				component={renderField}
				validate={required}
			/>
			<Field name="startDate" label="Ngày vào công ty" 
				info={{type: 'date'}} 
				component={renderField}
				validate={required}
			/>
			<Field name="department" label="Phòng ban" 
				info={{type: 'select'}} component={renderField}
			>
				{departments.map((department, i) => <option key={i} value={i}>{department.name}</option>)}
			</Field>
			<Field name="salaryScale"
				label="Hệ số lương"
				info={{type: 'number', min: '1', step: '0.1'}}
				component={renderField} 
				validate={required}
			/>
			<Field name="annualLeave"
				label="Số ngày nghỉ còn lại"
				info={{type: 'number', min: '0'}}
				component={renderField} 
				validate={required}
			/>
			<Field name="overTime"
				label="Số ngày làm thêm"
				info={{type: 'number', min: '0'}}
				component={renderField} 
				validate={required}
			/>
			<div className="form-group row">
				<div className="col offset-3">
					<button className="btn btn-primary" type="submit" disabled={submitting}>{action ? action : 'Thêm'}</button>
				</div>
			</div>
		</form>
	)
}


export default reduxForm({
	form: 'staff',
	initialValues: {
		name: '',
		doB: '',
		startDate: '',
		department: '0',
		salaryScale: '1',
		annualLeave: '0',
		overTime: '0'
	}
})(StaffForm);

