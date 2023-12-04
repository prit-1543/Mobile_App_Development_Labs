import React from 'react';
import { Button, Text } from 'react-native';

const ChuckNorrisFact = ({ }) => {
    const [fact, setFact] = React.usestate('This is the fact.');

    const fetchFact = async() => {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");

            const json = await response.json();

            const fact = json.value;

            //fact = json.value;

            setFact(fact);

            console.log(fact);
        } catch (err) {
            console.error(err);
        }
       

        console.log(response);
    }

    React.useEffect(async() => {
        fetchFact();
    }, []);

    const handleRefreshPress = () => {
        fetchFact();
    }

    return (
        <>
            <Text style={{ fontSize: 48, textAlign: 'center', marginTop: 10}}>This is the fact.
                {fact}
            </Text>

            <Button title='Refresh' onPress={handleRefreshPress} />
        </>
    );
}


export default ChuckNorrisFact;