const Login = () => {
  return <div>Please login to continue</div>;
};
type ProfilePros = {
    name : string
}
export const Profile = ({name}:ProfilePros) => {
  return <div>Private Profile component . Name is {name}</div>;
};
export const Component1 = ()=>{
  return <div>Component</div>;
}

type privateProps = {
    isLoggedIn : boolean
    Component: React.ComponentType<ProfilePros>
}

export const Private = ({ isLoggedIn, Component } : privateProps) => {
  if (isLoggedIn) return <Component name="vishal"></Component>;
  else return <Login></Login>;
};
