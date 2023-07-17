import { IonInput, IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <IonInput label="Username" name="username" labelPlacement="stacked" />
        <IonInput label="Password" name="password" type="password" labelPlacement="stacked" />
        <IonButton type="submit">Submit</IonButton>
      </form>
    </div>
  );
};

export default ExploreContainer;
