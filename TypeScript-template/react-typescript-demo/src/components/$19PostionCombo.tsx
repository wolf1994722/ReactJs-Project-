type horizotalcomb = "left" | "right" | "center";
type vetricalcomb = "top" | "bottom " | "center";

type PostionComboProps = {
  position:
    | Exclude<`${horizotalcomb}-${vetricalcomb}`, "center-center">
    | "center";
};

function PostionCombo({ position }: PostionComboProps) {
  return <div>{position}</div>;
}

export default PostionCombo;
