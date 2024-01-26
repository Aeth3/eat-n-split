import Friend from "./friend";


export default function FriendList({ setSelectedFriend, friends, selectedFriend, setOpen }) {
    return (
      <ul>
        {friends.map((f) => (
          <Friend
            key={f.id}
            friend={f}
            setSelectedFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
            setOpen={setOpen}
          />
        ))}
      </ul>
    );
  }