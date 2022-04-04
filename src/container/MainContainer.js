import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "../components/HeaderComponent";
import StaffList from "../components/StaffListComponent";
import StaffDetail from '../components/StaffDetailComponent';
import Footer from "../components/FooterComponent";
import DepartmentList from "../components/DepartmentListComponent";
import SalaryTable from "../components/SalaryTableComponent";
import {fetchDepartments, fetchStaffs} from '../redux/actionCreators';

class Main extends Component {

    constructor(props) {
        super(props);
		this.onAddStaff = this.onAddStaff.bind(this);
    }

	componentDidMount() {
		this.props.fetchStaffs();
		this.props.fetchDepartments();
	}

	onAddStaff(staff) {
		staff.id = this.props.staffs.length;
		staff.department = this.props.departments[staff.department];
		this.props.addStaff(staff);
	}

    render() {

        const { staffs, departments } = this.props;

        const StaffWithId = (props) => {
            const { id } = useParams();
            return <StaffDetail staff={staffs.filter(staff => staff.id === parseInt(id))[0]} />
        }

		const DepartmentWithId = () => {
			const { id } = useParams();
			return <StaffList staffs={staffs.filter(staff => staff.departmentId === id)} />
		}

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/nhanvien" element={<StaffList staffs={staffs} onAddStaff={this.onAddStaff} />} />
                    <Route path="/nhanvien/:id" element={<StaffWithId />} />
                    <Route path="/phongban" element={<DepartmentList departments={departments} />} />
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
	addStaff: staff => dispatch({ type: 'ADD_STAFF', payload: staff })
})

export default connect(mapStateToProps, mapStateToDispatch)(Main);
