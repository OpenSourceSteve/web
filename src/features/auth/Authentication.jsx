import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import { logger } from '../../utils/logger';

const Logger = logger();

export const Authentication = ({ children }) => {
    const navigate = useNavigate()

    try {
        // currentSession() automatically updates accessToken when it expires (by exchanging refreshToken for a new one)
        Auth.currentSession().then(data => {
            // do nothing
        }).catch(error => {
            Logger.error("Getting current session 1", error)
            navigate("/login");
        })
    } catch (error) {
        Logger.error("Getting current session 2", error)
    }

    return children;
}