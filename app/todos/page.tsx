'use client';
import React from 'react';
import { useState } from 'react';

interface ListItem {
  id: number;
  value: string;
};


export default function ToDoPage() {

  const [userInput, setUserInput] = useState<string>('');
  const [list, setList] = useState<ListItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null >(null);  // which item to edit 

  const updateInput = (value: string) => {
    setUserInput(value);
  };

  const handleAction = () => {
    if (userInput.trim() === "") return;
    if (editIndex !== null) {
      const updatedList = list.map((item, index) =>
        index === editIndex ? { ...item, value: userInput } : item);
      setList(updatedList);
      setEditIndex(null);
    } else {
      const newItem = {
        id: Math.random(),
        value: userInput
      };
      setList([...list, newItem]);
    }
    setUserInput("");
  };

  const deleteItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const startEdit = (index: number) => {
    setUserInput(list[index].value);
    setEditIndex(index);
  };


  return (
    <div>
         <input
        type="text"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
      />
      <button onClick={handleAction}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => startEdit(index)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
};
