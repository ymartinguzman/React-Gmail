import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';

let info = emails[0].subject;

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

function App(props) {
  return (
    <div>
      <Header />

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
