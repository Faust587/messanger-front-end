export const Chat = () => {

  const mockData = [
    {
      from: "you",
      text: "Hi man!"
    },
    {
      from: "you",
      text: "How are u?"
    },
    {
      from: "another",
      text: "Hi, dude"
    },
    {
      from: "another",
      text: "I'm good man, thanks"
    },
    {
      from: "another",
      text: "What about u?"
    },
    {
      from: "you",
      text: "I am okay"
    }
  ];

  return (
    <div className="dialog-container">
      {
        mockData.map(({from, text}) => {
          return (
            from === "you" ? <h1>YOU</h1> : <h1>NOT U</h1>
          )
        })
      }
    </div>
  );
}
