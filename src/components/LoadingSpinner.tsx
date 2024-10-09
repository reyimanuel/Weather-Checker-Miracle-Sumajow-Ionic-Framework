import React from 'react';
import { IonSpinner } from '@ionic/react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <IonSpinner name="crescent" />
    </div>
  );
};

export default LoadingSpinner;
