import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './factPage.css';
import { LinkBtn, Loader } from '../../components';
import { UserInput } from '../../widgets';

const FactPage = () => {
    const location = useLocation();
    const [fact, setFact] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const number = queryParams.get('number');
    const month = queryParams.get('month');
    const day = queryParams.get('day');

    const getFact = useCallback(async () => {
        setIsLoading(true);

        let url = '';
        if (type === 'date' && month && day) {
            url = `http://numbersapi.com/${month}/${day}/${type}`;
        } else if (number) {
            url = `http://numbersapi.com/${number}/${type}`;
        } else {
            setFact('No fact available with current parameters.');
            setIsLoading(false);
            return;
        }
        try {
            if (url) {
                const response = await fetch(url);
                const data = await response.text();
                setFact(data);
            }
        } catch (error) {
            setFact('Failed to fetch fact.');
        } finally {
            setIsLoading(false);
        }
    }, [type, number, month, day]);

    useEffect(() => {
        if ((type === 'date' && month && day) || number) {
            getFact();
        }
    }, [getFact]);

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            }
        }
    };

    return (
        <div className='fact-page'>
            <UserInput number={number} type={type} day={day} month={month} />
            <motion.div
                className='fact-page--container'
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ ...itemVariants.visible.transition, delay: 0.1 }}
            >
                {isLoading ? (
                    <div className='fact-page--loader'> <Loader /></div>
                ) : (
                    <p className='fact-page--fact'>{fact}</p>
                )}
                <motion.div
                    className='fact-page--btns'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...itemVariants.visible.transition, delay: 0.3 }}
                >
                    <LinkBtn title={'Go Back'} link={'/'} />
                    <button className='fact-page--btn' onClick={getFact}>New Fact</button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FactPage;