import { useState } from "react";
import Button from "./button";

export default function FormAddFriend({ setFriends, setOpen }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (name.replace(/\s/g, "") === "" || image.replace(/\s/g, "") === "") {
        return;
      }
      const id = crypto.randomUUID();
      const newFriend = {
        id,
        name,
        image: `${image}?u=${id}`,
        balance: 0,
      };
      setFriends((currentFriend) => [...currentFriend, newFriend]);
      setName("");
      setImage("https://i.pravatar.cc/48");
      setOpen((open) => !open);
    }
    return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>🧑‍🤝‍🧑 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🖼️ Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
  
        <Button>Add</Button>
      </form>
    );
  }