import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';

const Main = () => {
    const [hidden, hide] = useState(true);

    return (
        <>
            <header>
                <h1>suraj</h1>
                <style>{'body { background-color: white; }'}</style>
            </header>
            <main id={styles.main}>
                <div>
                    <a href='http://www.thght.ru/'>мой блог</a>
                </div>
                <div>
                    <a href='http://arith.ru/'>упражнения для ума</a>
                </div>
                <div onClick={() => hide(!hidden)}>
                    <a href='#'>упражнения для памяти</a>
                </div>
                <div id={hidden ? styles.hidden : null}>
                    <NavLink to='/imt'>матрица памяти</NavLink>&nbsp;
                    <NavLink to='/nback'>задача n-назад</NavLink><br /><br />
                    <NavLink to='/simon'>саймон</NavLink>
                </div>
                <div>
                    <a href='/eye-test'>eye test</a>
                </div>
            </main>
            <footer>
                <a href='https://t.me/ZzzoOk'>ZzzoOk</a>
            </footer>
        </>
    );
}

export default Main;