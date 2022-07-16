type StyleContainerProps = {
  style: React.CSSProperties;
};

function StyleContainer(props: StyleContainerProps) {
  return (
    <>
      <div style={props.style}>my name is khan</div>
    </>
  );
}

export default StyleContainer;
