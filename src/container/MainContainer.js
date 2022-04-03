import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from "../components/HeaderComponent";
import StaffList from "../components/StaffListComponent";
import StaffDetail from '../components/StaffDetailComponent';
import Footer from "../components/FooterComponent";
import DepartmentList from "../components/DepartmentListComponent";
import SalaryTable from "../components/SalaryTableComponent";
import {connect} from "react-redux";

class Main extends Component {

    constructor(props) {
        super(props);
		this.onAddStaff = this.onAddStaff.bind(this);
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

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/nhanvien" element={<StaffList staffs={staffs} onAddStaff={this.onAddStaff} />} />
                    <Route path="/nhanvien/:id" element={<StaffWithId />} />
                    <Route path="/phongban" element={<DepartmentList departments={departments} />} />
                    <Route path="/bangluong" element={<SalaryTable staffs={staffs} />} />
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
	addStaff: staff => dispatch({ type: 'ADD_STAFF', payload: staff })
})

export default connect(mapStateToProps, mapStateToDispatch)(Main);
