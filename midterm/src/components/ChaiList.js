// import React from "react";
// not being used in this file

function ChaiList({ 
  entries = [], //storing entries in an empty array
  onDelete = () => {} }) {
  if (entries.length === 0) { //while there are no entries/or when they're deleted, a prompt is displayed at the bottom
    return <div className= "subtext" >
      What feeling did that cup of chai give you?
    </div>;
  }

  return (
    // rendering list-key organization: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    <ul className= "list" >
      {entries.map((chaiCard) => (
        <li key={chaiCard.id} className= "card" >
          <div>
            {chaiCard.style}
          </div>
          <div>
            {"*".repeat(chaiCard.rating)}{"-".repeat(5 - chaiCard.rating)}
          </div>
          <div className= "subtext" >
            {chaiCard.notes}
          </div>
          <div>
          <button onClick={() => onDelete(chaiCard.id)}>
              Delete
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChaiList;