import React from 'react';
import styles from './Simon.module.css';
import { NavLink } from 'react-router-dom';

let level = 1;
let queue = [];
let processing = false;
let timer;

class Simon extends React.Component {
	constructor(props) {
		super(props);
	}

	red = () => {
		document.getElementById('red').style.backgroundColor = '#f78b6e';

		timer.push(setTimeout(() => {
			document.getElementById('red').style.backgroundColor = '#f45325';
			timer.shift();
		}, 500));
	}

	green = () => {
		document.getElementById('green').style.backgroundColor = '#97df07';

		timer.push(setTimeout(() => {
			document.getElementById('green').style.backgroundColor = '#81bd06';
			timer.shift();
		}, 500));
	}

	blue = () => {
		document.getElementById('blue').style.backgroundColor = '#69cdfc';

		timer.push(setTimeout(() => {
			document.getElementById('blue').style.backgroundColor = '#05a5ef';
			timer.shift();
		}, 500));
	}

	yellow = () => {
		document.getElementById('yellow').style.backgroundColor = '#ffd466';

		timer.push(setTimeout(() => {
			document.getElementById('yellow').style.backgroundColor = '#ffba07';
			timer.shift();
		}, 500));
	}

	check = (color) => {
		if (processing && queue.pop() != color) {
			alert('GAME OVER!');

			level = 1;
			queue = [];
			processing = false;

			document.getElementById(styles.level).innerText = 'Level: 0';

			return;
		}

		switch (color) {
			case 0:
				this.red();
				break;
			case 1:
				this.green();
				break;
			case 2:
				this.blue();
				break;
			case 3:
				this.yellow();
				break;
		}

		if (processing && queue.length < 1) {
			++level;

			timer.push(setTimeout(() => {
				this.init();
				timer.shift();
			}, 1500));
		}
	}

	componentDidMount() {
		document.getElementById(styles.new).disabled = true;

		timer = [];
		let td = document.getElementsByTagName('td');

		timer.push(setTimeout(() => {
			td[0].style.backgroundColor = '#f45325';
			timer.shift();
		}, 500));
		timer.push(setTimeout(() => {
			td[1].style.backgroundColor = '#81bd06';
			timer.shift();
		}, 1000));
		timer.push(setTimeout(() => {
			td[3].style.backgroundColor = '#ffba07';
			timer.shift();
		}, 1500));
		timer.push(setTimeout(() => {
			td[2].style.backgroundColor = '#05a5ef';
			timer.shift();
		}, 2000));
		timer.push(setTimeout(() => {
			document.getElementById(styles.new).disabled = false;
		}, 2500));
	}

	init = () => {
		document.getElementById(styles.level).innerText = 'Level: ' + level;

		queue = [];
		processing = true;

		let instance = this;
		(function lightup(i) {
			timer.push(setTimeout(() => {
				let color = Math.floor(Math.random() * 4);

				queue.push(color);

				switch (color) {
					case 0:
						instance.red();
						break;
					case 1:
						instance.green();
						break;
					case 2:
						instance.blue();
						break;
					case 3:
						instance.yellow();
						break;
				}

				if (--i) {
					lightup(i);
				} else {
					queue = queue.reverse();
				}

				timer.shift();
			}, 1000));
		}(level));
	}

	componentWillUnmount() {
		timer.forEach(clearTimeout);
	}

	render() {
		return (
			<>
				<header>
					<h1><NavLink to='/'>suraj</NavLink></h1>
					<style>{'body, table { background-color: #c1d3e3; }'}</style>
				</header>
				<main>
					<table>
						<caption>
							<button id={styles.new} onClick={this.init}>NEW</button>
							<label id={styles.level}>Level: 0</label>
						</caption>
						<tbody>
							<tr>
								<td id='red' onMouseDown={() => this.check(0)}></td>
								<td id='green' onMouseDown={() => this.check(1)}></td>
							</tr>
							<tr>
								<td id='blue' onMouseDown={() => this.check(3)}></td>
								<td id='yellow' onMouseDown={() => this.check(4)}></td>
							</tr>
						</tbody>
					</table>
				</main>
				<footer>
					<a href='https://t.me/ZzzoOk'>ZzzoOk</a>
				</footer>
			</>
		);
	}
}

export default Simon;