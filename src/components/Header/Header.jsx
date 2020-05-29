import React from "react";
import styles from './Header.module.css';
import { SocialIcon } from 'react-social-icons';



const Header = () => {

    return  (
        <div className={styles.headerContainer}>
            <div className={styles.titleContainer}>
                <a className={styles.title}>Sebastián Duque Mesa</a>
            </div>
            <hr className={styles.line}></hr>
            <nav className={styles.navbar}>
                <div className={styles.navlinks}>
                    <ul>
                        <li className={styles.link}>Trabajos</li>
                        <li className={styles.link}>Acerca de</li>
                    </ul>
                </div>
                <div className={styles.sociallinks}>
                    <ul>
                        <li><SocialIcon url="https://www.instagram.com/sduquemesa/" target="_blank" bgColor="#FEFEFE" fgColor="#000000" style={{ height: 40, width: 40 }}/></li>
                        <li><SocialIcon url="https://twitter.com/sduquemesa" target="_blank" bgColor="#FEFEFE" fgColor="#000000" style={{ height: 40, width: 40 }}/></li>
                        <li><SocialIcon url="https://github.com/sduquemesa" target="_blank" bgColor="#FEFEFE" fgColor="#000000" style={{ height: 40, width: 40 }}/></li>
                        <li><SocialIcon url="https://www.flickr.com/photos/52253556@N04/" target="_blank" bgColor="#FEFEFE" fgColor="#000000" style={{ height: 40, width: 40 }}/></li>
                        <li><SocialIcon url="mailto: sduquemesa@gmail.com" network="email" target="_blank" bgColor="#FEFEFE" fgColor="#000000" style={{ height: 40, width: 40 }}/></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
};

export default Header;