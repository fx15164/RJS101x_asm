import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from "../components/HeaderComponent";
import StaffList from "../components/StaffListComponent";
import StaffDetail from '../components/StaffDetailComponent';
import Footer from "../components/FooterComponent";
import DepartmentList from "../components/DepartmentListComponent";
import SalaryTable from "../components/SalaryTableComponent";
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
		this.onAddStaff = this.onAddStaff.bind(this);
    }

	onAddStaff(staff) {
		staff.id = this.state.staffs.length;
		this.setState({ staffs: this.state.staffs.concat(staff)});
	}

    render() {

        const { staffs, departments } = this.state;

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

export default App;
