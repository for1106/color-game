import React from 'react';
import { color_map } from '../config';

class Block extends React.Component {
	render() {
		let { color, flag, combo } = this.props;

		let block = color_map[color[0]].cname;
		let block_style = {
			color: color_map[color[1]].name,
			backgroundColor: color_map[color[2]].name,
		};

		let icon = (flag === true)? '✔': (flag === false)? '✘': '';
		let icon_style = (flag === true)? {
			color: color_map[color[3]].name
		}: (flag === false)? {
			color: color_map[color[3]].name
		}: {};

		return (
			<div className="block" style={block_style}>
				{
					combo !== null &&
					<div className="combo">
						{combo}
					</div>
				}
				{block}
				{
					icon !== '' &&
					<span className="icon" style={icon_style}>
						{icon}
					</span>
				}
			</div>
		);
	}
}

class Question extends React.Component {
	get_block() {
		let { index, questions, combo } = this.props;

		return questions.map((item,i) => {
			let active = (i === index)? ' active': '';
			let temp = (active !== '')? combo: null;

			return (
				<div key={i} className={`mask${active}`}>
					<Block color={item.color} flag={item.flag} combo={temp} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="question">
				{this.get_block()}
			</div>
		);
	}
}

export default Question;