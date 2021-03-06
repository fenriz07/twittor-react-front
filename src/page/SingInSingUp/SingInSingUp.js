import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SingUpForm from "../../components/SingUpForm";
import SingInForm from "../../components/SingInForm";
import LogoWhiteTwittor from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";

import "./SingInSingUp.scss";

export default function SingInSingUp(props) {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const { setRefreshCheckLogin } = props;

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="singin-singup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="singin-singup__left" xs={6}>
      <img src={LogoTwittor} alt="LogoTwittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Enterate de qué esta hablando la gente
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Unete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal, setRefreshCheckLogin } = props;

  return (
    <Col className="singin-singup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwittor} />
        <h2>Mira lo que esta pasando en el mundo en etse momento</h2>
        <h3>Unete a Twittor en este momento</h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SingUpForm setShowModal={setShowModal} />)}
        >
          Regístrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() =>
            openModal(
              <SingInForm
                setShowModal={setShowModal}
                setRefreshCheckLogin={setRefreshCheckLogin}
              />
            )
          }
        >
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}
