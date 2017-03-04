import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { color_map } from '../config';

class Answer extends React.Component {
	get_button() {
		let { handleKeyDown } = this.props;

		return ['←', '↑', '→', '↓'].map((item, i) => {
			let button_style = {
				backgroundColor: color_map[i].name
			};

			return (
				<Col key={i} md={2} xs={2} onClick={() => { handleKeyDown(37 + i); }} style={button_style}>
					{item}
				</Col>
			);
		});
	}

	render() {
		let { handleRestart, handleRule } = this.props;

		let button_style = {
			backgroundColor: '#ccc'
		};

		return (
			<Row className="answer">
				<Col md={2} xs={2} onClick={handleRestart} style={button_style}>
					開始
				</Col>
				<Col md={2} xs={2} onClick={handleRule} style={button_style}>
					規則
				</Col>
				{this.get_button()}
			</Row>
		);
	}
}

export default Answer;