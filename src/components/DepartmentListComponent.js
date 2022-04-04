import React from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardText} from "reactstrap";

const DepartmentList = ({departments}) => (
	<div className="container">
		<div className="row">
			{departments.map(department => (
				<div key={department.id} className="col-12 col-md-6 col-lg-4">
					<Link to={`/phongban/${department.id}`}>
						<Card className="m-1">
							<CardBody>
								<h4>{department.name}</h4>
								<CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
							</CardBody>
						</Card>
					</Link>
				</div>
			))}
		</div>
	</div >
)

export default DepartmentList;
