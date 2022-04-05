import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "../components/HeaderComponent";
import StaffList from "../components/StaffListComponent";
import StaffDetail from '../components/StaffDetailComponent';
import Footer from "../components/FooterComponent";
import DepartmentList from "../components/DepartmentListComponent";
import SalaryTable from "../components/SalaryTableComponent";
import {addStaff, deleteStaff, editStaff, fetchDepartments, fetchStaffs} from '../redux/actionCreators';

class Main extends Component {

    constructor(props) {
        super(props);
		this.onAddStaff = this.onAddStaff.bind(this);
		this.onEditStaff = this.onEditStaff.bind(this);
    }

	componentDidMount() {
		this.props.fetchStaffs();
		this.props.fetchDepartments();
	}

	onAddStaff(staff) {
		staff.id = this.props.staffs.length;
		staff.departmentId = this.props.departments[staff.department].id;
		this.props.addStaff(staff);
	}

	onEditStaff(staff) {
		staff.departmentId = this.props.departments[staff.department].id;
		this.props.editStaff(staff);
	}

    render() {

        const { staffs, departments, deleteStaff } = this.props;

        const StaffWithId = (props) => {
            const { id } = useParams();
			return <StaffDetail deleteStaff={deleteStaff} 
				staff={staffs.filter(staff => staff.id === parseInt(id))[0]} 
				departments={departments} editStaff={this.onEditStaff} />
        }

		const DepartmentWithId = () => {
			const { id } = useParams();
			return <StaffList 
				departments={departments} onAddStaff={this.onAddStaff}
				staffs={staffs.filter(staff => staff.departmentId === id)} />
		}

        return (
            <div>
                <Header />
                <Routes>
					<Route path="/nhanvien"
						element={<StaffList staffs={staffs} departments={departments} onAddStaff={this.onAddStaff} />} />
                    <Route path="/phongban" element={<DepartmentList departments={departments} />} />
                    <Route path="/nhanvien/:id" element={<StaffWithId />} />
					<Route path="/phongban/:id" element={<DepartmentWithId />} />
                    <Route path="/bangluong" element={<SalaryTable />} />
                    <Route path="*" element={<Navigate to='/nhanvien' />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
	staffs: state.staffs,
	departments: state.departments
})
const mapStateToDispatch = dispatch => ({
	fetchStaffs: () => dispatch(fetchStaffs()),
	fetchDepartments: () => dispatch(fetchDepartments()),
	addStaff: staff => dispatch(addStaff(staff)),
	deleteStaff: id => dispatch(deleteStaff(id)),
	editStaff: staff => dispatch(editStaff(staff))
})

export default connect(mapStateToProps, mapStateToDispatch)(Main);
