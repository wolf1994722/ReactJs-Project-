import React from "react";

// const btnprimary = {
//   color: "red",
//   background: "pink",
// };

type CustomComponentButtonProps = {
  variants: "primary" | "secondary";
  children: string;
} & React.ComponentProps<"button">;
// } & Omit<React.ComponentProps<"button">, children>;

type CustomComponentInputProps = React.ComponentProps<"input">;

function CustomComponentButton({
  variants,
  children,
  ...rest
}: CustomComponentButtonProps) {
  return (
    <button {...rest} className={`btn${variants}`}>
      {children}
    </button>
  );
}

function CustomComponentInput(props: CustomComponentInputProps) {
  return (
    <input type="text" {...props} name="" placeholder="Enter some text" id="" />
  );
}

export { CustomComponentButton, CustomComponentInput };
