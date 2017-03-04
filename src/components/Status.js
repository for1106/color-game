import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Status extends React.Component {
	render() {
		let { index, correct, combo, time } = this.props;
		index -= 2;

		let score = correct*3 - (index - correct);
		if (score < 0) {
			score = 0;
		}

		return (
			<Row className="status">
				<Col md={2} xs={2}>
					<label>答題</label>
					<span>{index}</span>
				</Col>
				<Col md={2} xs={2}>
					<label>正確</label>
					<span>{correct}</span>
				</Col>
				<Col md={2} xs={2}>
					<label>連擊</label>
					<span>{combo}</span>
				</Col>
				<Col md={2} xs={2}>
					<label>時間</label>
					<span>{time}</span>
				</Col>
				<Col md={4} xs={4}>
					<label>得分</label>
					<span>{score}</span>
				</Col>
			</Row>
		);
	}
}

export default Status;