// import React from "react";

function RatingStars({ value = 0, onChange = () => {}, max = 5 }) {
const buttons = [];
//using a simple for-loop to combat the functioning of the toggleable 'star' buttons and making sure the length of the rating scale stays till 5
for (let  i = 1; i <= max; i++ ){
  buttons.push(
    <button key = {i} type = "button" onClick = {() => onChange(i)}>
      {i <= value ? "*" : "-"}
    </button>
  );
}
return(
<div className = "stars">
  {buttons}
</div>
);
}

export default RatingStars;