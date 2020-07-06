import React, { useState } from "react";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { singInApi, setTokenApi } from "../../api/auth";

import "./SingInForm.scss";
import { Form, Button, Spinner } from "react-bootstrap";

export default function SingInForm(props) {
  const [formData, setFormData] = useState(initialFormValue());
  const [singInLoading, setSingInLoading] = useState(false);
  const { setShowModal, setRefreshCheckLogin } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    let validCount = 0;

    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      toast.warning("Faltan campos por rellenar");
    } else if (!isEmailValid(formData.email)) {
      toast.warning("No es un email valido");
    } else {
      setSingInLoading(true);
      singInApi(formData)
        .then((response) => {
          if (response.message) {
            toast.warning(response.message);
          } else {
            setTokenApi(response.token);
            setRefreshCheckLogin(true);
          }
        })
        .catch(() => {
          toast.error("Error del servidor");
        })
        .finally(() => {
          setSingInLoading(false);
          setFormData(initialFormValue);
          setShowModal(false);
        });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sing-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control type="email" placeholder="Correo" name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {!singInLoading ? "Entrar" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
