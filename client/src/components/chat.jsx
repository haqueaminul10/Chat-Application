const Chat = () => {
  return (
    <>
      <div className='chat-container'>
        <div className='chat-message'>
          <Messeage content='hellow world' own={true} />
          <Messeage content='hi' own={false} />
        </div>
      </div>
    </>
  );
};

const Messeage = ({ content, own }) => {
  return (
    <>
      <div className={`${own && '.own'}`}>
        <span className={`${own ? 'own-message' : 'reciever-message'}`}>
          {content}
        </span>
      </div>
    </>
  );
};

export default Chat;
