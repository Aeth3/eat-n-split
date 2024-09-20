import { useState } from "react";
import Button from "./button";

export default function FormSplitBill({ selectedFriend, handleSpitBill }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [payer, setPayer] = useState("user");
    const paidByFriend = bill ? bill - paidByUser : "";
    function handleSubmit(e) {
      e.preventDefault();
      if (!bill || !paidByUser) return;
  
      handleSpitBill(payer === "user" ? paidByFriend : -paidByUser);
    }
  
    return (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill Value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <label>🧍‍♂️ Your Expense</label>
        <input
          type="number"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
            )
          }
        />
        <label>🧑‍🤝‍👩 {selectedFriend.name}'s Expense</label>
        <input type="number" disabled value={paidByFriend} />
        <label>🤑 Who is paying the bill</label>
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
      </form>
    );
  }