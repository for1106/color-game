import React from 'react';
import { Grid } from 'react-bootstrap';
import { shuffle } from '../config';
import Status from './Status.js';
import Question from './Question.js';
import Answer from './Answer.js';
import Rule from './Rule.js';

class App extends React.Component {

	constructor() {
		super();
		this.state = this.init();
	}

	init() {
		return {
			start: false,
			time: 30,
			combo: 0,
			correct: 0,
			index: 2,
			questions: [
				{
					color: [4, 4, 4, 4],
					flag: null
				},{
					color: [4, 4, 4, 4],
					flag: null
				},
				this.new_question(),
				this.new_question(),
				this.new_question(),
			],
			show: false
		};
	}

	new_question() {
		return {
			color: shuffle([0, 1, 2, 3]),
			flag: null
		};
	}

	check_question(answer) {
		let { time, correct, combo, index, questions } = this.state;
		let now_question = questions[index];

		if (now_question.color[3] === answer) {
			now_question.flag = true;
			correct++;
			combo++;

			if (combo % 5 === 0) {
				time += 5;
			}
		} else {
			now_question.flag = false;
			combo = 0;
		}

		index++;
		questions.push(this.new_question());

		this.setState({
			time: time,
			correct: correct,
			combo: combo,
			index: index,
			questions: questions
		});
	}

	handleKeyDown(keyCode) {
		let { start } = this.state;

		if (!start) {
			return false;
		}

		if ([37, 38, 39, 40].indexOf(keyCode) === -1) {
			return false;
		}

		this.check_question(keyCode - 37);
	}

	handleRestart() {
		let store = this.init();
		store.start = true;

		this.setState(store);

		if (this.timer) {
			clearInterval(this.timer);
		}

		this.timer = setInterval(() => {
			let { start, time } = this.state;

			if (time === 1) {
				clearInterval(this.timer);
				start = false;
			}

			this.setState({
				start: start,
				time: time - 1,
			});
		}, 1000);
	}

	handleRule(flag) {
		this.setState({
			show: flag
		})
	}

	render() {
		let { time, correct, combo, index, questions, show } = this.state;
		let handleKeyDown = this.handleKeyDown.bind(this);
		let handleRestart = this.handleRestart.bind(this);
		let handleRule = this.handleRule.bind(this);

		return (
			<Grid>
				<Status index={index} correct={correct} combo={combo} time={time} />
				<Question index={index} questions={questions} combo={combo}/>
				<Answer handleKeyDown={handleKeyDown} handleRestart={handleRestart} handleRule={() => { handleRule(true); }} />
				<Rule show={show} onHide={() => { handleRule(false); }}/>
			</Grid>
		);
	}

	componentDidMount() {
		document.addEventListener('keydown', (event) => {
			this.handleKeyDown(event.keyCode);
		});
	}
}

export default App;