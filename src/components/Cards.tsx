import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Card.css'

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
  img: string;
}

const Cards: React.FC<CardProps> = ({ title, subtitle, content, img }) => {
  return (
    <IonCard>
      <img src={img ? img : ""}></img>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>


      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
}

export default Cards;
