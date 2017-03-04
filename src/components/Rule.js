import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class Rule extends React.Component {
	render() {
		return (
			<Modal {...this.props}>
				<Modal.Header>
					<Modal.Title>規則</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5>玩法</h5>
					<ul>
						<li>每一格圖皆有三種顏色：格子的背景色、文字本身的顏色、文字代表的顏色。</li>
						<li>右下角答案四選一，選「不屬於」格子所擁有的顏色。</li>
						<li>手機版直接觸碰點擊答案，電腦版可使用鍵盤上下左右鍵。</li>
						<li>按開始則時間開始倒數，時間到即遊戲停止。</li>
					</ul>
					<h5>計分標準</h5>
					<ul>
						<li>答對一題，得分+3。</li>
						<li>答錯一題，得分-1。</li>
						<li>每連擊5次，可多5秒的遊戲時間。</li>
					</ul>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>懂了</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default Rule;