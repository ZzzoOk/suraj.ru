import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nback.module.css';

let items, interval;
let iOrder, pOrder;
let score, iOk, pOk;
let scoreTimer, itemTimer;
let nback;

const Nback = () => {
	const check = () => {
		let isItem = this.id === 'item';
		let order = isItem ? iOrder : pOrder;
		let n = order.length - 1;

		if (order[n] === order[n - nback]) {
			changeScore(1);

			if (isItem) {
				document.getElementById('item').disabled = true;
				iOk = true;
			}
			else {
				document.getElementById('position').disabled = true;
				pOk = true;
			}
		} else {
			changeScore(-1);
		}
	}

	const changeScore = (d) => {
		score += d;
		document.getElementById(styles.score).innerText = 'Score: ' + score;
		document.getElementById(styles.score).style.color = d > 0 ? 'green' : 'red';

		scoreTimer.push(setTimeout(() => {
			document.getElementById(styles.score).style.color = 'black';
			scoreTimer.shift();
		}, 1000));
	}

	useEffect(() => {
		scoreTimer = []; itemTimer = [];
		nback = document.getElementById('nback').value
		let useNums = document.getElementById('numbers').checked;
		items = useNums ? [1, 2, 3, 4, 5, 6, 7, 8, 9] :
			['red', 'green', 'blue', 'yellow',
				'magenta', 'cyan', 'orange', 'grey', 'black'];

		document.getElementById(styles.field).innerHTML = '';
		document.getElementById(styles.score).innerText = 'Score: 0';
		document.getElementById('item').disabled = true;
		document.getElementById('position').disabled = true;

		clearInterval(interval);

		let field = document.getElementById(styles.field);
		for (let i = 0; i < 3; ++i) {
			let row = field.insertRow(i);
			for (let j = 0; j < 3; ++j) {
				let cell = row.insertCell(j);
				cell.id = 'i' + (3 * i + j + 1);
			}
		}

		let timeleft = 4;
		let cCell = document.getElementById('i5');
		cCell.innerText = '4';
		cCell.style.color = '#cccccc';
		let timer = setInterval(() => {
			cCell.innerText = --timeleft;

			if (timeleft <= 0) {
				clearInterval(timer);
				cCell.innerText = '';
				cCell.style.color = 'black';
			}
		}, 1000);

		score = 0;
		iOrder = []; pOrder = [];
		let instance = this;
		interval = setInterval(function () {
			let n = iOrder.length - 1;
			if (n - nback >= 0) {
				if (!iOk && iOrder[n] === iOrder[n - nback]) {
					debugger;
					instance.changeScore(-1);
				}
				if (!pOk && pOrder[n] === pOrder[n - nback]) {
					debugger;
					instance.changeScore(-1);
				}
			}

			let pos = Math.floor(Math.random() * 9) + 1;
			let item = Math.floor(Math.random() * 9);

			iOrder.push(item);
			pOrder.push(pos);

			document.getElementById('item').disabled = false;
			document.getElementById('position').disabled = false;

			if (useNums) {
				document.getElementById('i' + pos).innerText = items[item];
			} else {
				document.getElementById('i' + pos).style.backgroundColor = items[item];
			}

			itemTimer.push(setTimeout(function () {
				document.getElementById('i' + pos).innerText = '';
				document.getElementById('i' + pos).style.backgroundColor = 'white';
				itemTimer.shift();
			}, 1500));

			iOk = pOk = false;
		}, 4000);

		return () => {
			scoreTimer.forEach(clearTimeout);
			itemTimer.forEach(clearTimeout);
			clearInterval(interval);
		}
	})

	return (
		<>
			<header>
				<h1><NavLink to='/'>suraj</NavLink></h1>
				<style>{'body { background-color: #c1d3e3; }'}</style>
			</header>
			<main id={styles.main}>
				<table>
					<caption>
						<button id={styles.new} onClick={useEffect}>NEW</button>
						<label for='nback'>N-back:</label>
						<input id='nback' type='number' value='2' min='2' max='99' onChange={useEffect} />&nbsp;
						<label for='numbers'>Numbers:</label>
						<input id='numbers' type='checkbox' onChange={useEffect} />
						<label id={styles.score}>Score: 0</label>
					</caption>
					<tbody id={styles.field}></tbody>
				</table>
				<button id='item' class={styles.bottom} onClick={check}>ITEM</button>&nbsp;
				<button id='position' class={styles.bottom} onClick={check}>POSITION</button>
			</main>
			<footer>
				<a href='https://t.me/ZzzoOk'>ZzzoOk</a>
			</footer>
		</>
	);
}

export default Nback;