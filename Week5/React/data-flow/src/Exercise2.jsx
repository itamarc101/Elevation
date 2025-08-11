import React, { useState } from "react";

function Contact({ name, onClick }) {
  return (
    <li
      style={{ cursor: "pointer", padding: "8px", borderBottom: "1px solid #ccc" }}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

function List({ contacts, onSelect }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contacts.map((contact) => (
          <Contact key={contact} name={contact} onClick={() => onSelect(contact)} />
        ))}
      </ul>
    </div>
  );
}

function Conversation({ convo, sender, onBack }) {
  return (
    <div>
      <button className="back" onClick={onBack} style={{ marginBottom: 20 }}>
        Back
      </button>

      {convo.map((msg, i) => (
        <div key={i}>
          <span className="sender" style={{ fontWeight: "bold", marginRight: 8 }}>
            {msg.sender === "self" ? "Me" : sender}:
          </span>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
}

export default function Exercise2() {
  const [displayConversation, setDisplayConversation] = useState(null);

  const [conversations] = useState([
    {
      with: "Laura",
      convo: [
        { text: "Hi", sender: "self" },
        { text: "You there?", sender: "self" },
        { text: "Yeah, hi, what's up?", sender: "other" },
      ],
    },
    {
      with: "Dad",
      convo: [
        { text: "Have you finished your school work yet?", sender: "other" },
        { text: "Yes.", sender: "self" },
        { text: "What do you mean, yes?", sender: "other" },
        { text: "??", sender: "self" },
      ],
    },
    {
      with: "Shoobert",
      convo: [
        { text: "Shoobert!!!", sender: "self" },
        { text: "Dude!!!!!!!!", sender: "other" },
        { text: "Shooooooooo BERT!", sender: "self" },
        { text: "You're my best friend", sender: "other" },
        { text: "No, *you're* my best friend", sender: "self" },
      ],
    },
  ]);

  const contacts = conversations.map((conv) => conv.with);

  // Find convo array for selected contact
  const selectedConvo = conversations.find((c) => c.with === displayConversation);

  return (
    <div>
      {displayConversation === null ? (
        <List contacts={contacts} onSelect={setDisplayConversation} />
      ) : (
        <Conversation
          convo={selectedConvo?.convo || []}
          sender={displayConversation}
          onBack={() => setDisplayConversation(null)}
        />
      )}
    </div>
  );
}
