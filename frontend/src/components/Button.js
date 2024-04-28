import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Button = (props) => {
  return (
    <div>
      <button
        className={classNames(
          "shadowContainer mt-16 h-16 w-[11rem] rounded-[2rem] border-[0.1rem]",
          "",
        )}
      >
        <Link className={`text-[${props.textColor}]`} to={props.linkTo}>
          {props.textContent}
        </Link>
      </button>
    </div>
  );
};

export default Button;
