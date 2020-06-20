import React, { useState } from 'react';

import { Button, Card, CardSubtitle, CardTitle, Modal, ModalTitle } from 'components';
import { DashboardContentStyled, DashboardSplitCardsStyled } from '../Dashboard/styles';

const Trading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card hasPadding={true} size='medium'>
      <Button color='grey'>Vender</Button>
      <Button color='white'>Comprar</Button>
      <DashboardContentStyled>
        <CardSubtitle textAlign='center' isBold>
          Tarjeta Tauros
        </CardSubtitle>
      </DashboardContentStyled>
      <DashboardContentStyled>
        <Button onClick={() => setIsModalOpen(true)} size='large'>
          Comprar
        </Button>
      </DashboardContentStyled>
      <Modal isOpen={isModalOpen} onModalClose={onModalClose}>
        <CardTitle textAlign='center'>Estás comprando</CardTitle>
        <ModalTitle textAlign='center'>0.0189</ModalTitle>BTC
        <div>
          <p>Precio</p>
          <p>Cantidad</p>
        </div>
        <DashboardContentStyled>
          <Button onClick={() => setIsModalOpen(false)}>Confirmar</Button>
          <Button onClick={() => setIsModalOpen(false)} color='white'>
            Cancelar
          </Button>
        </DashboardContentStyled>
      </Modal>
    </Card>
  );
};

export default Trading;
