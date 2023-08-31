import { IonButton, useIonModal } from "@ionic/react";
import ModalRoot from "./ModalRoot";

export default function ModalContainer({onComplete}) {
  const [presentRootModal, dismissRootModal] = useIonModal(ModalRoot, {
    onDismiss: () => {
      dismissRootModal()
    },
    onComplete: () => {
      dismissRootModal()
      onComplete()
    }
  })
  return (
    <IonButton color="secondary" onClick={() => presentRootModal()}>Open Root Modal</IonButton>
  )
}