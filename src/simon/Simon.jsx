import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Simon.module.css';

const Simon = () => {
	const [level, setLevel] = useState(0);
	const [isDisabled, setDisabled] = useState(true);
	const [redColor, setRedColor] = useState();
	const [greenColor, setGreenColor] = useState();
	const [blueColor, setBlueColor] = useState();
	const [yellowColor, setYellowColor] = useState();
	let queue = [];
	let processing = false;
	let timer = [];

	const red = () => {
		setRedColor('#f78b6e');

		timer.push(setTimeout(() => {
			setRedColor('#f45325');
			timer.shift();
		}, 500));
	}

	const green = () => {
		setGreenColor('#97df07');

		timer.push(setTimeout(() => {
			setGreenColor('#81bd06');
			timer.shift();
		}, 500));
	}

	const blue = () => {
		setBlueColor('#69cdfc');

		timer.push(setTimeout(() => {
			setBlueColor('#05a5ef');
			timer.shift();
		}, 500));
	}

	const yellow = () => {
		setYellowColor('#ffd466');

		timer.push(setTimeout(() => {
			setYellowColor('#ffba07');
			timer.shift();
		}, 500));
	}

	const check = (color) => {
		if (processing && queue.pop() !== color) {
			alert('GAME OVER!');

			setLevel(1);
			queue = [];
			processing = false;

			setLevel(0);

			return;
		}

		switch (color) {
			case 0:
				red();
				break;
			case 1:
				green();
				break;
			case 2:
				blue();
				break;
			case 3:
				yellow();
				break;
			default:
				break;
		}

		if (processing && queue.length < 1) {
			setLevel(level + 1);

			timer.push(setTimeout(() => {
				init();
				timer.shift();
			}, 1500));
		}
	}

	useEffect(() => {
		timer = [];

		timer.push(setTimeout(() => {
			setRedColor('#f45325');
			timer.shift();
		}, 500));
		timer.push(setTimeout(() => {
			setGreenColor('#81bd06');
			timer.shift();
		}, 1000));
		timer.push(setTimeout(() => {
			setYellowColor('#ffba07');
			timer.shift();
		}, 1500));
		timer.push(setTimeout(() => {
			setBlueColor('#05a5ef');
			timer.shift();
		}, 2000));
		timer.push(setTimeout(() => {
			setDisabled(false);
		}, 2500));

		return () => {
			timer.forEach(clearTimeout);
		}
	}, [])

	const init = () => {
		queue = [];
		processing = true;

		(function lightUp(i) {
			timer.push(setTimeout(() => {
				let color = Math.floor(Math.random() * 4);

				queue.push(color);

				switch (color) {
					case 0:
						red();
						break;
					case 1:
						green();
						break;
					case 2:
						blue();
						break;
					case 3:
						yellow();
						break;
					default:
						break;
				}

				if (--i) {
					lightUp(i);
				} else {
					queue = queue.reverse();
				}

				timer.shift();
			}, 1000));
		}(level));
	}

	const Cell = (props) => {
		return <td id={props.id} style={{ backgroundColor: props.color }} onMouseDown={() => check(+props.id)}></td>;
	}

	return (
		<>
			<header>
				<h1><NavLink to='/'>suraj</NavLink></h1>
				<style>{'body, table { background-color: #c1d3e3; }'}</style>
			</header>
			<main>
				<table>
					<caption>
						<button id={styles.new} onClick={init} disabled={isDisabled}>NEW</button>
						<label id={styles.level}>Level: {level}</label>
					</caption>
					<tbody>
						<tr>
							<Cell id='0' color={redColor} />
							<Cell id='1' color={greenColor} />
						</tr>
						<tr>
							<Cell id='2' color={blueColor} />
							<Cell id='3' color={yellowColor} />
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

export default Simon;