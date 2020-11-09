import React from 'react';
import HeaderForm from './HeaderForm';

function Header(props) {
  // console.log('Header: me han clicado');

  return (
    <div>
      <header className="col2 mb-1">
        <div>
          <h1 className="title">
            <span className="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>

        <HeaderForm
          handleInboxFilter={props.handleInboxFilter}
          handleDeleteFilter={props.handleDeleteFilter}
          handleTextFilter={props.handleTextFilter}
        />
        {/* mediante estas dos funciones se conectan la funcion de headerform con app, y así a través de las props se manda la info de nieta a abuela PUENTE/BYPASS*/}
      </header>
    </div>
  );
}

export default Header;
