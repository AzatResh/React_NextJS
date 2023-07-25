import { useState } from 'react';
import { Button, Htag, Rating } from '../components';
import { Paragraph } from '../components';
import { Tag } from '../components';

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>();

  return (
    <div>
      <Htag tag='h1'>Hello world</Htag>
      <Button buttonType = 'primary' arrow='right'>Кнопка</Button>
      <Button buttonType = 'ghost' arrow='down'>Кнопка</Button>
      <Paragraph> Средний </Paragraph>
      <Paragraph size='s'> Маленький </Paragraph>
      <Paragraph size='l'> Большой </Paragraph>
      <Tag>Ссылка</Tag>
      <Tag size='s' color='red'>Ссылка</Tag>
      <Tag size='m' color='green'>Ссылка</Tag>
      <Tag color='primary'>Ссылка</Tag>
      <Rating rating={4} isEditable={true} setRating={setRating}/>
    </div>
  );
}
