import { Button, Htag } from '../components';
import { Paragraph } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Hello world</Htag>
      <Button buttonType = 'primary' arrow='right'>Кнопка</Button>
      <Button buttonType = 'ghost' arrow='down'>Кнопка</Button>
      <Paragraph> Средний </Paragraph>
      <Paragraph size='s'> Маленький </Paragraph>
      <Paragraph size='l'> Большой </Paragraph>
    </div>
  );
}
