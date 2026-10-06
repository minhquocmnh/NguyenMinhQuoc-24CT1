import React, { useState } from 'react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

export const AuthModal = ({ isOpen, onClose, onShowToast }) => {
  const [isLoginTab, setIsLoginTab] = useState(true);

  if (!isOpen) return null;

  if (isLoginTab) {
    return (
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        onShowToast={onShowToast}
        onSwitchToRegister={() => setIsLoginTab(false)}
      />
    );
  }

  return (
    <RegisterModal
      isOpen={isOpen}
      onClose={onClose}
      onShowToast={onShowToast}
      onSwitchToLogin={() => setIsLoginTab(true)}
    />
  );
};

export { LoginModal, RegisterModal };
