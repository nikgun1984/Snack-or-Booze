import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

function Menu({ items, title, content }) {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">
						{title} Menu
					</CardTitle>
					<CardText>{content}</CardText>
					<ListGroup>
						{items.map((item) => (
							<Link to={`/drinks/${item.id}`} key={item.id}>
								<ListGroupItem>{item.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
		</section>
	);
}

export default Menu;
