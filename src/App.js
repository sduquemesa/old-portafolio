import React from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import styles from './App.module.css'



class App extends React.Component {
    render() {
        return (

            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.content}>
                    <Gallery />
                </div>
            </div>

        )
    }
}

export default App;