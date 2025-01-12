import React from "react";
import Button from "../../button/Button";
import { useIAStore } from "../IAstore";

const Message = (credits) =>
  `¿Estás seguro que quieres redimir ${credits} créditos?`;

const HTML = <></>;

const Options = ({ handleUserMessage, set, options }) => {
  const { setIsvisible } = useIAStore();
  const handleClick = () => {
    setIsvisible(false);
    options.form.current.requestSubmit();
  };
  return (
    <Button color="blue" type="submit" realistic onClick={handleClick}>
      Redimir
    </Button>
  );
};

export { HTML, Message, Options };
