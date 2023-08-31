import { useState } from 'react';
import { IonInput, IonButton, IonToast, useIonModal, useIonRouter } from '@ionic/react';
import './ExploreContainer.css';
import InlineToast from './InlineToast';
import ModalResult from './ModalResult';
import WizardContainer from './WizardContainer';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const {push} = useIonRouter()
  const [isWizardMounted, setIsWizardMounted] = useState(true);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  const [presentResultModal] = useIonModal(ModalResult)

  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <IonInput label="Username" name="username" labelPlacement="stacked" />
        <IonInput label="Password" name="password" type="password" labelPlacement="stacked" />
        <IonButton type="submit">Submit</IonButton>
        {/*<IonToast
          message="Your settings have been saved."
          position="top"
          isOpen={true}
          animated={false}
        />*/}
      </form>
      <WizardContainer
        onComplete={() => {
          push('/results')
          presentResultModal();
        }}
      />
      <IonButton routerLink="/results">push</IonButton>
    </div>
  );
};

export default ExploreContainer;
