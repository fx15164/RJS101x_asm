import Reac, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from "./components/StaffListComponent";
import { STAFFS } from './shared/staffs';

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
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={staffs} />
      </div>
    )
  }

}

export default App;