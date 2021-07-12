import React from 'react';
import styles from './Imt.module.css';
import { NavLink } from 'react-router-dom';

var nums, n;

class Imt extends React.Component {
	constructor(props) {
		super(props);
	}

	hide = () => {
		var number = document.getElementsByClassName('number');

		for (var i = 0; i < number.length; ++i) {
			number[i].classList.add(styles.hidden);
			number[i].innerText = '';
			number[i].onclick = this.pick;
		}

		n = 0;
		document.getElementById(styles.hide).disabled = true;
	}

	pick = (event) => {
		let target = event.currentTarget;
		target.classList.remove(styles.hidden);
		for (var i = 0; i < nums.length; ++i) {
			if (nums[i] == target.id.replace('i', '')) {
				if (i != n) {
					if (target.innerText == '') {
						target.classList.add(styles.wrong);
					}
				} else {
					while (n < nums.length - 1
						&& document.getElementById('i' + nums[++n]).classList.contains(styles.wrong));
				}

				target.innerText = i + 1;

				return;
			}
		}
	}

	componentDidMount() {
		document.getElementById(styles.imt).innerHTML = '';
		var imt = document.getElementById(styles.imt);
		var qty = document.getElementById('qty').value;

		nums = [];
		do {
			var num = Math.floor(Math.random() * 60) + 1;
			if (!nums.includes(num)) {
				nums.push(num);
			}
		}
		while (nums.length < qty);

		for (var i = 0; i < 6; ++i) {
			var row = imt.insertRow(i);
			for (var j = 0; j < 10; ++j) {
				var cell = row.insertCell(j);
				var id = 10 * i + j + 1;

				cell.id = 'i' + id;

				if (nums.indexOf(id) >= 0) {
					cell.innerText = nums.indexOf(id) + 1;
					cell.classList.add('number');
				}
			}
		}

		document.getElementById(styles.hide).disabled = false;
	}

	render() {
		return (
			<>
				<header>
					<h1><NavLink to='/'>suraj</NavLink></h1>
					<style>{'body { background-color: #c1d3e3; }'}</style>
				</header>
				<main>
					<table>
						<caption>
							<button id={styles.new} onClick={this.componentDidMount}>NEW</button>
							<label for='qty'>Qty:</label>
							<input id='qty' type='number' value='5' min='1' max='60' onChange={this.componentDidMount} />
							<button id={styles.hide} onClick={this.hide}>HIDE</button>
						</caption>
						<tbody id={styles.imt}></tbody>
					</table>
				</main>
				<footer>
					<a href='https://t.me/ZzzoOk'>ZzzoOk</a>
				</footer>
			</>
		);
	}
}

export default Imt;