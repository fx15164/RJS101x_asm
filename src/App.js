import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import StaffList from "./components/StaffListComponent";
import StaffDetail from './components/StaffDetailComponent';
import { STAFFS } from './shared/staffs';
import './App.css';
import Footer from "./components/FooterComponent";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }

  render() {

    const { staffs } = this.state;

    const StaffWithId = (props) => {
      const { id } = useParams();
      return <StaffDetail staff={staffs.filter(staff => staff.id == id)[0]} />
    }

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/nhanvien" element={<StaffList staffs={staffs} />} />
            <Route path="/nhanvien/:id" element={<StaffWithId />} />
            <Route path="*" element={<Navigate to='/nhanvien' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;