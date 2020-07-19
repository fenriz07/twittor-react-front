import React from "react";
import moment from "moment";
import localization from "moment/locale/es";
import "./index.scss";
import Location from "../../../assets/png/location.svg";
import DateBirth from "../../../assets/png/date-birth.svg";
import Link from "../../../assets/png/link.svg";

export default function index(props) {
  const { user } = props;
  return (
    <div className="info-user">
      <h2 className="name">
        {user?.nombre} {user?.apellidos}
      </h2>

      <p className="email">{user?.email}</p>
      {user?.biografia && <div className="description">user.biografia</div>}
      <div className="more-info">
        {user?.ubication && <p>{user.ubication}</p>}
        {user?.sitioWeb && (
          <a
            href={user.sitioWeb}
            alt={user.sitioWeb}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.sitioWeb}
          </a>
        )}
        {user?.fechaNacimiento && (
          <p>
            {moment(user.fechaNacimiento)
              .locale("es", localization)
              .format("LL")}
          </p>
        )}
      </div>
    </div>
  );
}
