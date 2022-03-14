import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from './shared/staffs';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }

  render() {

    const { staffs } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/nhanvien" element={<StaffList staffs={staffs} />} />
            <Route path="*" element={<Navigate to='/nhanvien' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;