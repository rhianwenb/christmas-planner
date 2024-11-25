'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import NotesList from './NotesList';

export default function Notes() {

    const notesTemplate = [
        {
            id: 1,
            title: "", 
            content: "",
            important: false
        }
    ];

    const [notes, setNotes] = useState<{id: number;
        title: string;
        content: string;
        important: boolean;
    }[]>(notesTemplate);

    const deleteNote = (id: number) => {
      setNotes(notes.filter((note) => note.id !== id));
    };

  return (
    <div>
      Write it down and don't forget. 
        <NotesList  />
    </div>
  )
};
