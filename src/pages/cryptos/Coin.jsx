
import { useState, useEffect } from 'react';
import axios from 'axios';

const Coin = () => {
    const [price, setPrice] = useState(null);
    const coinId = 'bitcoin';
    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await axios.get(`8bcdec7e-e1b0-4feb-a03a-4ed2bda6d8a8`);
                setPrice(response.data.bitcoin.usd);
            } catch (error) {
                console.error('Error fetching Bitcoin price:', error);
            }
        };

        fetchBitcoinPrice();
        const interval = setInterval(fetchBitcoinPrice, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Bitcoin Price: {price ? <p>${price}</p> : <p>Loading...</p>}</h2>  
        </div>
    );
};

export default Coin;
