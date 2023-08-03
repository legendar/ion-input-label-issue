import {useEffect, useState} from "react";

import {IonToast} from "@ionic/react";

export default function InlineToast({
  isOpen,
  ...otherProps
}): JSX.Element {
  const [isOpenInternal, setIsOpenInternal] = useState(false);

  useEffect(() => {
    // setTimeout is needed because sometimes the toast shadowDom is not ready
    setTimeout(() => {
      setIsOpenInternal(isOpen);
    }, 10);
  }, [isOpen]);

  return (
    <IonToast
      isOpen={isOpenInternal}
      {...otherProps}
    />
  );
}
