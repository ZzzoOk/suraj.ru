import React from 'react';
import styles from './Main.module.css';
import { NavLink } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
    }

    toggleHidden = () => {
        this.setState({ hidden: !this.state.hidden });
    };

    render() {
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
                        <a href='http://math.suraj.ru/'>упражнения для ума</a>
                    </div>
                    <div onClick={this.toggleHidden}>
                        <a href='#'>упражнения для памяти</a>
                    </div>
                    <div id={this.state.hidden ? styles.hidden : null}>
                        <NavLink to='/imt'>матрица памяти</NavLink>&nbsp;
                        <NavLink to='/nback'>задача n-назад</NavLink><br /><br />
                        <NavLink to='/simon'>саймон</NavLink>
                    </div>
                    <div>
                        <a href='/eye-test'>eye-test</a>
                    </div>
                </main>
                <footer>
                    <a href='https://t.me/ZzzoOk'>ZzzoOk</a>
                </footer>
            </>
        );
    }
}

export default Main;