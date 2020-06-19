import React, { useState } from 'react';

import { Button, Card, CardSubtitle, CardTitle, Modal, ModalTitle } from 'components';
import { DashboardContentStyled, DashboardSplitCardsStyled } from '../Dashboard/styles';

const Trading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card size='medium'>
      <DashboardSplitCardsStyled>
        <Button disabled>Vender</Button>
        <Button color='white'>Comprar</Button>
      </DashboardSplitCardsStyled>
      <DashboardContentStyled>
        <CardSubtitle textAlign='center' isBold>
          Tarjeta Tauros
        </CardSubtitle>
      </DashboardContentStyled>
      <Button onClick={() => setIsModalOpen(true)}>Comprar</Button>
      <Modal isOpen={isModalOpen} onModalClose={onModalClose}>
        <CardTitle textAlign='center'>Estás comprando</CardTitle>
        <ModalTitle textAlign='center'>0.0189</ModalTitle>BTC
        <DashboardContentStyled>
          Precio <br />
          Cantidad
        </DashboardContentStyled>
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
