// import React from "react";

function ChaiList({ 
  entries = [], //storing entries in an empty array
  onDelete = () => {} }) {
  if (entries.length === 0) { //while there are no entries/or when they're deleted, a prompt is displayed at the bottom
    return <div>
      What feeling did that cup of chai give you?
    </div>;
  }

  return (
    // rendering list-key organization: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    <ul className = "list" >
      {entries.map((chaiCard) => (
        <li key = {chaiCard.id} className = "card" >
          <div>
            {chaiCard.style}
          </div>
          <div>
            {/* math to make sure the arrangement of the stars stays up to the length ===5, and as the suer rates the cup, subtracting that from 5 to replace it with empty arrays. sourced from somewhere (unable to find) */}
            {"*".repeat(chaiCard.rating)}{"-".repeat(5 - chaiCard.rating)}
          </div>
          <div className>
            {chaiCard.notes}
          </div>
          <div>
          <button onClick ={() => onDelete(chaiCard.id)}>
              Delete
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChaiList;