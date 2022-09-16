import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Imt.module.css';

const Imt = () => {
	let n;
	const [qty, setQty] = useState(5);
	const [numbers, setNumbers] = useState([]);
	const [isHidingDisabled, setHidingDisabled] = useState(false);
	const [tableData, setTableData] = useState(`<tr><td id="i1"></td><td id="i2"></td><td id="i3"></td><td id="i4"></td><td id="i5"></td><td id="i6"></td><td id="i7"></td><td id="i8"></td><td id="i9"></td><td id="i10"></td></tr>
	<tr><td id="i11"></td><td id="i12"></td><td id="i13"></td><td id="i14"></td><td id="i15"></td><td id="i16"></td><td id="i17"></td><td id="i18"></td><td id="i19"></td><td id="i20"></td></tr>
	<tr><td id="i21"></td><td id="i22"></td><td id="i23"></td><td id="i24"></td><td id="i25"></td><td id="i26"></td><td id="i27"></td><td id="i28"></td><td id="i29"></td><td id="i30"></td></tr>
	<tr><td id="i31"></td><td id="i32"></td><td id="i33"></td><td id="i34"></td><td id="i35"></td><td id="i36"></td><td id="i37"></td><td id="i38"></td><td id="i39"></td><td id="i40"></td></tr>
	<tr><td id="i41"></td><td id="i42"></td><td id="i43"></td><td id="i44"></td><td id="i45"></td><td id="i46"></td><td id="i47"></td><td id="i48"></td><td id="i49"></td><td id="i50"></td></tr>
	<tr><td id="i51"></td><td id="i52"></td><td id="i53"></td><td id="i54"></td><td id="i55"></td><td id="i56"></td><td id="i57"></td><td id="i58"></td><td id="i59"></td><td id="i60"></td></tr>`);

	const hide = () => {
		setHidingDisabled(true);
		n = 0;
	}

	const pick = (event) => {
		let target = event.currentTarget;
		target.classList.remove(styles.hidden);
		for (let i = 0; i < numbers.length; ++i) {
			if (numbers[i] === target.id.replace('i', '')) {
				if (i !== n) {
					if (target.innerText === '') {
						target.classList.add(styles.wrong);
					}
				} else {
					while (n < numbers.length - 1
						&& document.getElementById('i' + numbers[++n]).classList.contains(styles.wrong));
				}

				target.innerText = i + 1;

				return;
			}
		}
	}

	const newGame = () => {
		let nums = [];
		do {
			let num = Math.floor(Math.random() * 60) + 1;
			if (!nums.includes(num)) {
				nums.push(num);
			}
		}
		while (nums.length < qty);

		let rows = '';
		for (let i = 0; i < 6; ++i) {
			rows += '<tr>';
			for (let j = 0; j < 10; ++j) {
				let id = 10 * i + j + 1;
				let cell = `<td id="i${id}"></td>`;

				if (nums.includes(id)) {
					cell = `<td id="i${id}" class="${styles.numbers}">${nums.indexOf(id) + 1}</td>`;
				}

				rows += cell;
			}
			rows += '</tr>';
		}

		setNumbers(nums);
		setTableData(rows);
		setHidingDisabled(false);
	}

	useEffect(() => {
		newGame();
	}, [])

	return (
		<>
			<header>
				<h1><NavLink to='/'>suraj</NavLink></h1>
				<style>{'body { background-color: #c1d3e3; }'}</style>
			</header>
			<main>
				<table>
					<caption>
						<button id={styles.new} onClick={newGame}>NEW</button>
						<label for='qty'>Qty:</label>
						<input id='qty' type='number' min='1' max='60' value={qty} onChange={e => setQty(e.target.value)} />
						<button id={styles.hide} onClick={hide} disabled={isHidingDisabled}>HIDE</button>
					</caption>
					<tbody id={styles.imt} dangerouslySetInnerHTML={{ __html: tableData }}></tbody>
				</table>
			</main>
			<footer>
				<a href='https://t.me/ZzzoOk'>ZzzoOk</a>
			</footer>
		</>
	);
}

export default Imt;