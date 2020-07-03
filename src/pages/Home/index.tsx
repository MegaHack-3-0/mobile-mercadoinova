import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';

interface API {
  name: string;
  experience: number;
  stars: number;
  byts: number;
}

const Home: React.FC = () => {
  const [teste, setTest] = useState<API>({} as API);

  const data = {
    name: 'Johnny',
    experience: 10000,
    stars: 5,
    byts: 200000,
  };

  const dataString = JSON.stringify(data);

  useEffect(() => {
    function buscaAPI(): void {
      api
        .post('/', dataString, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          const apiData: API = response.data;
          console.log(response.status);
          setTest(apiData);
          return apiData;
        });
    }

    buscaAPI();
  }, []);

  return (
    <View>
      <Text>HOME</Text>
      <Text>{`Name: ${teste.name}`}</Text>
      <Text>{`XP: ${teste.experience}`}</Text>
      <Text>{`Byts: ${teste.byts}`}</Text>
      <Text>{`Stars: ${teste.stars}`}</Text>
    </View>
  );
};

export default Home;
