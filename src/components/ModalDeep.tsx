import { IonButton, IonPage, IonContent, IonToolbar, IonBackButton, useIonViewWillLeave} from "@ionic/react";
import { useEffect } from "react";

export default function ModalDeep({onComplete, onDissmiss}) {
    useEffect(() => {
        return () => {
            console.log('unmounted')
        }
    }, [])

    const closeAndGoToResults = () => {
        onComplete()
        /*new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 0)
        }).then(onComplete)*/
    }

  return (
    <IonPage>
      <IonToolbar>
        <IonButton onClick={onDissmiss}>close</IonButton>
      </IonToolbar>
      <IonContent>
        modal deep
        <IonButton onClick={closeAndGoToResults} color="danger">close and go to results</IonButton>
      </IonContent>
    </IonPage>
  )
}