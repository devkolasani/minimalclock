import React, { Component } from "react";
import styles from "./Clock.module.scss";

class Clock extends Component {
    state = {
        time: '',
        offset : ''
    };

    componentDidMount() {
        setInterval(() => {
            const clock = new Date();
            const time = clock.toTimeString();
            const timeNow = time.slice(0, 8);
            const circumference = 2 * 3.1415927 * 35;
            const offsetNow = (((60 - parseInt(time.slice(6, 8))) / 60) * circumference) + '%';
            this.setState({
                time: timeNow,
                offset : offsetNow
            });
        }, 1000);
    };

    // Render Component
    render() {
        return (
            <div className={styles.component} >
                <svg className={styles.circles}>
                    <linearGradient id='clock-color-gradient' x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EE018B" />
                        <stop offset="100%" stopColor="#ECA312" />
                    </linearGradient>
                    <circle className={styles.circle} style={{strokeDashoffset : this.state.offset}}/>
                    <circle className={styles.background} />
                </svg>
                <div className={styles.time}>{this.state.time}</div>
            </div>
        );
    }
}

export default Clock;
