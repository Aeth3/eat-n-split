import { useState } from "react";
import FriendList from "./friendlist";
import Button from "./button";
import FormAddFriend from "./formAddFriend";
import FormSplitBill from "./formSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend() {
    setOpen((open) => !open);
  }

  function handleSpitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          setSelectedFriend={setSelectedFriend}
          friends={friends}
          selectedFriend={selectedFriend}
          setOpen={setOpen}
        />
        {isOpen && <FormAddFriend setFriends={setFriends} setOpen={setOpen} />}
        <Button onClick={handleAddFriend}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSpitBill={handleSpitBill}
        />
      )}
    </div>
  );
}
