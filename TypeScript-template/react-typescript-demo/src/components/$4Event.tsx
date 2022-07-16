import React from "react";

type FuctionTagProps = {
  handleClickEvent: () => void;
};

type ButtonTagProps = {
  handleClickEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

type InputTagProps = {
  value: string
  handleClickEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FuctionTag(props: FuctionTagProps) {
  return (
    <>
      <button onClick={props.handleClickEvent}>click me</button>
    </>
  );
}

function ButtonTag(props: ButtonTagProps) {
  return (
    <>
      <button onClick={(event) => props.handleClickEvent(event, 100)}>
        click me
      </button>
    </>
  );
}

function InputTag(props: InputTagProps) {
  return (
    <>
      <input type="text" value={props.value} onChange={(e)=>props.handleClickEvent(e)} />
    </>
  );
}

export { FuctionTag, ButtonTag, InputTag };
