import React, { useState } from 'react';

import { Button, Card, CardSubtitle, CardTitle, Modal, ModalTitle } from 'components';
import { DashboardContentStyled, DashboardSplitContentStyled } from '../Dashboard/styles';
import { CreditCardStyled } from './styles';

const Trading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card hasPadding={true} size='medium'>
      <DashboardSplitContentStyled>
        <Button color='grey'>Vender</Button>
        <Button color='white'>Comprar</Button>
      </DashboardSplitContentStyled>
      <DashboardContentStyled>
        <CreditCardStyled>
          <CardSubtitle textAlign='center' isBold>
            Tarjeta Tauros
          </CardSubtitle>
        </CreditCardStyled>
      </DashboardContentStyled>
      <DashboardContentStyled>
        <Button onClick={() => setIsModalOpen(true)} size='large'>
          Comprar
        </Button>
      </DashboardContentStyled>
      <Modal isOpen={isModalOpen} onModalClose={onModalClose}>
        <CardTitle textAlign='center'>Estás comprando</CardTitle>
        <ModalTitle textAlign='center'>0.0189</ModalTitle>BTC
        <DashboardContentStyled>
          <p>Precio</p>
          <p>Cantidad</p>
        </DashboardContentStyled>
        <DashboardContentStyled>
          <Button size='large' onClick={() => setIsModalOpen(false)}>
            Confirmar
          </Button>
          <Button size='large' onClick={() => setIsModalOpen(false)} color='white'>
            Cancelar
          </Button>
        </DashboardContentStyled>
      </Modal>
    </Card>
  );
};

export default Trading;
