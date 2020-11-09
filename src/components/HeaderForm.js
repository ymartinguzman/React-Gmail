import React from 'react';

function HeaderForm(props) {
  const handleInboxFilter = (ev) => {
    ev.preventDefault();
    props.handleInboxFilter();
  };
  const handleDeleteFilter = (ev) => {
    ev.preventDefault();
    props.handleDeleteFilter();
  };
  const handleTextFilter = (ev) => {
    ev.preventDefault();
    props.handleTextFilter(ev.target.value);
  };
  return (
    <form className="text-align-right">
      <button className="form__btn" onClick={handleInboxFilter}>
        <span className="fas fa-inbox"></span>
        Recibidos
      </button>
      <button className="form__btn" onClick={handleDeleteFilter}>
        <span className="fas fa-trash"></span>
        Papelera
      </button>
      <input
        className="form__input-text"
        type="text"
        placeholder="Buscar un correo"
        onKeyUp={handleTextFilter}
      />
    </form>
  );
}

export default HeaderForm;
