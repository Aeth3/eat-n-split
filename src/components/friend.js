import Button from "./button";

export default function Friend({ friend, setSelectedFriend, selectedFriend, setOpen }) {
  
    function handleSelectedFriend(friend) {
      setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
      setOpen(false);
    }
    const isSelected = selectedFriend?.id === friend.id;
    return (
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => handleSelectedFriend(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    );
  }