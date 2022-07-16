type StatusProps = {
  status: `loading` | `success` | `error`;
};

type HeadingProps = {
  children: string;
};

type OscarProps = {
  children: React.ReactNode;
};

type OptionalProps = {
  fname: string;
  lname?: string;
};

function Status(props: StatusProps) {
  let message = "";
  if (props.status === "loading") message = "Loading....";
  else if (props.status === "success") message = "Data Fetched sucessfully";
  else if (props.status === "error") message = "Error fetching data ";
  else message = "wrong input status";
  return <>{message}</>;
}

function Heading(props: HeadingProps) {
  return <>{props.children}</>;
}

function Oscar(props: OscarProps) {
  return <>{props.children}</>;
}
function Optional(props: OptionalProps) {
  // const {lname = '' } = props
  return (
    <>
      🤑 {props.fname} {props.lname}
    </>
  );
}

export { Status, Heading, Oscar, Optional };
