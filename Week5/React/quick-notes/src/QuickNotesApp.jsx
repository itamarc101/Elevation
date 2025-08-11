import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./QuickNotesApp.css";

Modal.setAppElement("#root");

// Step 8: Categories and their colors
const categories = {
  Personal: "#fef3c7",  // light yellow
  Work: "#dbeafe",      // light blue
  Shopping: "#fcd5ce",  // light red/pink
  Others: "#d1fae5",    // light green
};

export default function QuickNotesApp() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal"); // Step 8: selected category

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Step 9: Search and filter
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Load notes from localStorage with date parsing
  useEffect(() => {
    const savedNotes = localStorage.getItem("quickNotes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      const notesWithDates = parsedNotes.map((note) => ({
        ...note,
        createdAt: new Date(note.createdAt),
      }));
      setNotes(notesWithDates);
    }
  }, []);

  // Save notes to localStorage on change
  useEffect(() => {
    localStorage.setItem("quickNotes", JSON.stringify(notes));
  }, [notes]);

  // Auto-resize textarea handler (Step 3.1)
  const handleTextChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const addNote = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    const trimmedTitle = title.trim();
    if (!trimmed) return;

    const newNote = {
      id: Date.now(),
      title: trimmedTitle || null,
      text: trimmed,
      category,
      createdAt: new Date(),
    };

    setNotes((prev) => [newNote, ...prev]);
    setTitle("");
    setText("");
    setCategory("Personal"); // reset to default
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    }
  };

  const formatDate = (dateObj) => {
    return dateObj.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // Filter and search notes (Step 9)
  const filteredNotes = notes.filter((note) => {
    if (filterCategory !== "All" && note.category !== filterCategory) return false;
    const search = searchText.toLowerCase();
    const title = (note.title || "").toLowerCase();
    const text = note.text.toLowerCase();
    return title.includes(search) || text.includes(search);
  });

  return (
    <div className="app-container">
      <h1>QuickNotes</h1>

      {/* Step 9: Search input + category filter */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <div className="filter-buttons">
          <button
            className={filterCategory === "All" ? "active" : ""}
            onClick={() => setFilterCategory("All")}
          >
            All
          </button>
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={filterCategory === cat ? "active" : ""}
              onClick={() => setFilterCategory(cat)}
              style={{ backgroundColor: categories[cat] }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Note form */}
      <form onSubmit={addNote} className="note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          className="note-title-input"
        />

        {/* Category selector */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          value={text}
          onChange={handleTextChange}
          rows={4}
          placeholder="Write a note..."
          style={{ resize: "none" }}
        />
        <div className="form-footer">
          <span>{text.length} characters</span>
          <button type="submit" disabled={!text.trim()}>
            Add Note
          </button>
        </div>
      </form>

      {/* Notes grid */}
      {filteredNotes.length === 0 ? (
        <div className="empty">No notes match your search/filter.</div>
      ) : (
        <div className="notes-grid">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="note-card"
              onClick={() => setSelectedNote(note)}
              style={{
                backgroundColor: categories[note.category] || "#fff",
                cursor: "pointer",
              }}
            >
              <div className="note-date">{formatDate(note.createdAt)}</div>
              {note.title && <div className="note-title">{note.title}</div>}
              <p className="note-text">{note.text}</p>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal for viewing/editing note */}
      <Modal
        isOpen={!!selectedNote}
        onRequestClose={() => setSelectedNote(null)}
        contentLabel="View Note"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedNote && (
          <ModalNoteEditor
            note={selectedNote}
            onClose={() => setSelectedNote(null)}
            onSave={(updatedNote) => {
              setNotes((notes) =>
                notes.map((n) => (n.id === updatedNote.id ? updatedNote : n))
              );
              setSelectedNote(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
}

// Modal editor for note (with category editing)
function ModalNoteEditor({ note, onClose, onSave }) {
  const [editTitle, setEditTitle] = useState(note.title || "");
  const [editText, setEditText] = useState(note.text);
  const [editCategory, setEditCategory] = useState(note.category || "Personal");

  // Dynamic textarea resize
  const handleTextChange = (e) => {
    setEditText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div>
      <div className="modal-header">
        <input
          className="modal-title-input"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Title (optional)"
          style={{ fontSize: "1.5em", width: "100%", marginBottom: 8 }}
        />
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <select
        value={editCategory}
        onChange={(e) => setEditCategory(e.target.value)}
        className="category-select"
        style={{ marginBottom: 12 }}
      >
        {Object.keys(categories).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="modal-date">
        {note.createdAt
          ? formatDate(note.createdAt)
          : ""}
      </div>
      <textarea
        value={editText}
        onChange={handleTextChange}
        style={{ width: "100%", resize: "none", minHeight: 60, marginTop: 8 }}
      />
      <div style={{ marginTop: 12, textAlign: "right" }}>
        <button
          onClick={() =>
            onSave({
              ...note,
              title: editTitle.trim() || null,
              text: editText,
              category: editCategory,
            })
          }
          style={{ marginRight: 8 }}
        >
          Save
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

// Helper formatDate outside components
function formatDate(dateObj) {
  return dateObj.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
