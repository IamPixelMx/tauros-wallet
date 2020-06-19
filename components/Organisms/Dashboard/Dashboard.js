import React, { useState } from 'react';

import { Balance, Button, Card, CardSubtitle, CardTitle, Modal, ModalTitle } from 'components';
import { DashboardContentStyled, DashboardSplitCardsStyled } from './styles';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <DashboardSplitCardsStyled>
        <Balance />
        <Card size='medium'>
          <DashboardContentStyled>
            <Button disabled>Vender</Button>
            <Button color='white'>Comprar</Button>
          </DashboardContentStyled>

          <CardTitle>Vender / Comprar</CardTitle>
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
        <Card hasPadding={false}>
          <Card size='item'>
            <CardTitle textAlign='left' isBold>
              Últimas transacciones
            </CardTitle>
            <CardSubtitle textAlign='right' isBold>
              Ver completo
            </CardSubtitle>
          </Card>
          {/* <Button onClick={() => setIsModalOpen(true)}>Checar balance</Button> */}
        </Card>
      </DashboardSplitCardsStyled>
    </React.Fragment>
  );
};

export default Dashboard;
