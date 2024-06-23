import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Cards'; // Assuming correct path to Card component
import './Home.css';

const Home: React.FC = () => {
  const [animeData, setAnimeData] = useState<any[]>([]); // State to hold anime data

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime");
        const { data } = await response.json();
        setAnimeData(data); // Update state with fetched anime data
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Library App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='contenedor'>
        {animeData.map((info) => (
          <Card key={info.id} title={info.title} subtitle={info.aired.string} content={info.synopsis} img={info.images.jpg.image_url} />
        ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
