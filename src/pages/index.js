import React from 'react';

const Home = () => {
    const [data, setData] = React.useState([]);

    const get = endpoint => fetch(`http://localhost:3000/${endpoint}`);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = await get('pages');
                if (allData.ok) {
                    const data = await allData.json()
                    setData(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return (
        <>
            <h1>Hi :D</h1>
            <code>
                {data && JSON.stringify(data)}
            </code>
        </>
    );
};

export default Home;