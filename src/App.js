import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import StaffList from "./components/StaffListComponent";
import StaffDetail from './components/StaffDetailComponent';
import Footer from "./components/FooterComponent";
import DepartmentList from "./components/DepartmentListComponent";
import { STAFFS, DEPARTMENTS } from './shared/staffs';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    }
  }

  render() {

    const { staffs, departments } = this.state;

    const StaffWithId = (props) => {
      const { id } = useParams();
      return <StaffDetail staff={staffs.filter(staff => staff.id === parseInt(id))[0]} />
    }

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/nhanvien" element={<StaffList staffs={staffs} />} />
            <Route path="/nhanvien/:id" element={<StaffWithId />} />
            <Route path="/phongban" element={<DepartmentList departments={departments} />} />
            <Route path="*" element={<Navigate to='/nhanvien' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;