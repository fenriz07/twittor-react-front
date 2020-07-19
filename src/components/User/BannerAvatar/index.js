import React from "react";
import { Button } from "react-bootstrap";
import { API_HOST } from "../../../utils/constant";
import avatarNotFound from "../../../assets/png/avatar-no-found.png";
import "./index.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;

  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerBanner?id=${user.id}`
    : null;

  const avatarUrl = user?.avatar
    ? `${API_HOST}/obtenerAvatar?id=${user.id}`
    : avatarNotFound;

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      ></div>
      {user && (
        <div className="options">
          {loggedUser._id === user.id && <Button>Editar perfil</Button>}

          {loggedUser._id !== user.id && <Button>Seguir</Button>}
        </div>
      )}
    </div>
  );
}
