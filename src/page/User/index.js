import React from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";

import "./index.scss";

export default function User() {
  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>Servio</h2>
      </div>
      <div>Banner de usuario</div>
      <div>Info Usuario</div>
      <div className="user__tweets">Lista de tweets</div>
    </BasicLayout>
  );
}
