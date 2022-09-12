import {MessageItem} from "./MessageItem";
import {SearchInput} from "../SearchInput";

export const DialogsList = () => {


  type PropTypes = {
    senderName: string,
    messageAmount: number,
    active: boolean
  }

  const mockData: PropTypes[] = [
    {senderName: "Walter", messageAmount: 4, active: false},
    {senderName: "Faust", messageAmount: 2, active: true},
    {senderName: "Fever", messageAmount: 0, active: false},
    {senderName: "Skyrog", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
    {senderName: "Walter", messageAmount: 1, active: false},
  ]

  return (
    <div className="dialog-list-container">
      {
        mockData.length !== 0 ?
          mockData.map(({senderName, messageAmount, active}) => {
            return <MessageItem key={senderName} senderName={senderName} messageAmount={messageAmount} active={active} />
          })
          : null
      }
    </div>
  );
}
