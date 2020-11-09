import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';

const renderEmails = () => {
  return emails.map((email) => {
    return (
      <EmailItem
        key={email.id}
        from={email.fromName}
        subject={email.subject}
        time={email.date}
      />
    );
  });
};

function App() {
  const handleInboxFilter = () => {
    console.log('App:me han clicado en Recibidos');
  };
  const handleDeleteFilter = () => {
    console.log('App:me han clicado en Papelera');
  };
  const handleTextFilter = (data) => {
    console.log('App:me han clicado en el Input', data);
  };
  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader
        subject={emails[0].subject}
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        body={emails[0].body}
      />
    </div>
  );
}

export default App;
