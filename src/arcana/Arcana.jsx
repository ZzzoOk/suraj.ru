import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Arcana.module.css';

const Arcana = () => {
	const [date, setDate] = useState('');
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [next, setNext] = useState('');
	const arcana = {
		1: 'I Маг', 2: 'II Жрица', 3: 'III Императрица', 4: 'IV Император', 5: 'V Иерофант',
		6: 'VI Влюблённые', 7: 'VII Колесница', 8: 'VIII Справедливость', 9: 'IX Отшельник', 10: 'X Колесо Фортуны',
		11: 'XI Сила', 12: 'XII Повешенный', 13: 'XIII Смерть', 14: 'XIV Умеренность', 15: 'XV Дьявол',
		16: 'XVI Башня', 17: 'XVII Звезда', 18: 'XVIII Луна', 19: 'XIX Солнце', 20: 'XX Суд',
		21: 'XXI Мир', 22: 'XXII Шут'
	};

	const collapse = (num) => {
		num = num + '';
		while (+num > 22) {
			let sum = 0;
			for (let i = 0; i < num.length; ++i) {
				sum += +num[i];
			}
			num = sum.toString();
		}

		return num;
	}

	useEffect(() => {
		if (!date) {
			return;
		}

		let y = collapse(date.split('-')[0]);
		let m = date.split('-')[1];
		let d = collapse(date.split('-')[2]);

		setYear(y);
		setMonth(m);
		setDay(d);
		setNext(collapse((+y) + (+m) + (+d)));
	}, [date])

	return (
		<>
			<header>
				<h1><NavLink to='/'>suraj</NavLink></h1>
				<style>{'body { background-color: #c1d3e3; }'}</style>
			</header>
			<main>
				<input type="date" max="9999-12-31" value={date} onChange={e => setDate(e.target.value)}></input><br /><br />
				<div>
					<p>1) {arcana[+day]}</p>
					<p>2) {arcana[+month]}</p>
					<p>3) {arcana[+year]}</p>
					<p>4) {arcana[+next]}</p>
				</div>
			</main>
			<footer>
				<a href='https://t.me/ZzzoOk'>ZzzoOk</a>
			</footer>
		</>
	);
}

export default Arcana;