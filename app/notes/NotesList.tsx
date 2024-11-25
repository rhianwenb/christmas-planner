'use client';
import React from 'react';
import { useState } from 'react';
import Note from './Note';



export default function NotesList() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  return (
    <div>NotesList</div>
  )
};
