import { IonPage, IonContent, IonButton, useIonModal } from "@ionic/react";
import ModalDeep from "./ModalDeep";

export default function ModalRoot({onDismiss, onComplete}) {
  const [presentDeepModal, dismissDeepModal] = useIonModal(ModalDeep, {
    onDissmiss: () => {
      dismissDeepModal()
    },
    onComplete: () => {
      dismissDeepModal()
      onComplete()
    }
  })

  const closeAndGoToResults = () => {
    /*new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 0)
    }).then(onComplete)*/
    onComplete()
  }

  return (
    <IonPage>
      <IonContent>
        modal root
        <IonButton onClick={() => presentDeepModal()}>open deep modal</IonButton> 
        <IonButton onClick={closeAndGoToResults}>close and go to results</IonButton>
      </IonContent>
    </IonPage>
  )
}