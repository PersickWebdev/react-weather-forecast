import React from 'react';
import styles from './App.module.scss';
import { Header, Footer } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from './routes/routes';
import { setIsLogged, setUser } from './redux/Auth/authActionCreators';

// TODO: Implement responsive layout.

const App = () => {
    const dispatch = useDispatch();
    const { generateRoutes } = useRoutes();
    const { user, isLogged } = useSelector((state) => state.authData);
    const { temperature } = useSelector((state) => state.weatherData);
    const routes = generateRoutes(isLogged, user);

    const signOutHandler = () => {
        dispatch(setIsLogged(false));
        dispatch(setUser({}));
    }

    return (
        <div className={`
                ${styles['app']} 
                ${temperature === 'isCold' ? styles['app-cold'] : ''}
                ${temperature === 'isWarm' ? styles['app-warm'] : ''}
                ${temperature === 'isHot' ? styles['app-hot'] : ''}
        `}>
            <Header
                signOutHandler={signOutHandler}
            />
            <div className={styles['content']}>
                <div className={styles['content-overlay']}>
                    <div className={styles['container']}>
                        {routes}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;