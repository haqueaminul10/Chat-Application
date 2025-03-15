import { io } from 'socket.io-client';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import SignUp from './components/signup';
import Chat from './components/chat';
import Input from './components/input';

const socket = io('http://localhost:4000');
function App() {
  const user = useRef('a');

  return (
    <>
      <div>
        {user.current ? (
          <>
            <Chat />
            <Input />
          </>
        ) : (
          <SignUp />
        )}
      </div>
    </>
  );
}

export default App;
