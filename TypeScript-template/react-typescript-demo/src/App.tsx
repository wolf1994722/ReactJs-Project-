import "./App.css";
import UseReducerTSX from "./components/$10UseReducerTSX";
import UseReducerActionRestrict from "./components/$11UseReducerActionRestrict";
import UseContextThemeConsumer from "./components/$12UseContextThemeConsumer";
import UseContextThemeProvider from "./components/$12UseContextThemeProvider";
import AdvanceUseContextConsumer from "./components/$13AdvanceUseContextConsumer";
import AdvanceUseContextProvider from "./components/$13AdvanceUseContextProvider";
import DOMref from "./components/$14DOMref";
import MutableRef from "./components/$14MutableRef";
import ClassBased from "./components/$15classBased";
import { Private, Profile } from "./components/$16component";
import List from "./components/$17List";
import RandomNumber from "./components/$18RandomNumber";
import PostionCombo from "./components/$19PostionCombo";
import TypeProps from "./components/$1TypeProps";
import DataTypeProps from "./components/$2DataTypeProps";
import { Status, Heading, Oscar, Optional } from "./components/$3Advance";
import { FuctionTag, ButtonTag, InputTag } from "./components/$4Event";
import StyleContainer from "./components/$5StyleContainer";
import CleanCode from "./components/$6CleanCode";
import UseStateHook from "./components/$7UseStateHook";
import RandomUseState from "./components/$8RandomUseState";
import TypeAssertion from "./components/$9TypeAssertion";
import {
  CustomComponentButton,
  CustomComponentInput,
} from "./components/$20CustomComponent";
import ExtractingComponent from "./components/$21ExtractingComponent";
import PolymorphicComponent from "./components/$22PolymorphicComponent";

const person = {
  fname: "Wade",
  lname: "Dave",
};

const personList = [
  {
    fname: "Seth",
    lname: "Ivan",
  },
  {
    fname: "Seth",
    lname: "Ivan",
  },
  {
    fname: "Riley",
    lname: "Gilbert",
  },
  {
    fname: "Jorge",
    lname: "Dan",
  },
];

function App() {
  return (
    <div className="App">
      <TypeProps name="vishal"></TypeProps>
      <DataTypeProps
        obj={person}
        count={10}
        isLoggedIn={true}
        personList={personList}
      ></DataTypeProps>
      <Status status="success"></Status>
      <Heading>this is children props</Heading>
      <Oscar>
        <Heading>This is nesting of tag</Heading>
      </Oscar>
      <Optional fname="vishal"></Optional>
      <FuctionTag
        handleClickEvent={() => {
          console.warn("woow");
        }}
      ></FuctionTag>
      <ButtonTag
        handleClickEvent={(e, id) => {
          console.warn("button tager", id);
        }}
      ></ButtonTag>
      <InputTag
        value="vishal"
        handleClickEvent={(e) => {
          console.log(e.target.value);
        }}
      ></InputTag>
      <StyleContainer
        style={{ border: "1px solid #458e", color: "#85de" }}
      ></StyleContainer>
      <CleanCode personList={personList}></CleanCode>
      <UseStateHook></UseStateHook>
      <RandomUseState></RandomUseState>
      <TypeAssertion></TypeAssertion>
      <UseReducerTSX></UseReducerTSX>
      <UseReducerActionRestrict></UseReducerActionRestrict>
      <UseContextThemeProvider>
        <UseContextThemeConsumer></UseContextThemeConsumer>
      </UseContextThemeProvider>
      <AdvanceUseContextProvider>
        <AdvanceUseContextConsumer></AdvanceUseContextConsumer>
      </AdvanceUseContextProvider>
      <DOMref></DOMref>
      <MutableRef></MutableRef> <br />
      <ClassBased message="this is the value of it"></ClassBased>
      <Private isLoggedIn={true} Component={Profile}></Private>
      {/* <List
        items={["batsman", "superman", "spiderman"]}
        onClick={(item) => console.log(item)}
      ></List>
      <List
        items={[10,21,32]}
        onClick={(item) => console.log(item)}
      ></List> */}
      <List
        items={[
          { first: "this", last: "know" },
          { first: "woo", last: "boom" },
          { first: "they", last: "clumsy" },
        ]}
        onClick={(item) => console.log(item)}
      ></List>
      <RandomNumber value={10} isPositive={true} />
      <RandomNumber value={-10} isNegative={true} />
      <RandomNumber value={0} isZero={true} />
      <PostionCombo position="center"></PostionCombo>
      <PostionCombo position="left-bottom "></PostionCombo>
      <CustomComponentButton variants="primary">
        this is the conetnt of button
      </CustomComponentButton>
      <CustomComponentInput></CustomComponentInput>
      <ExtractingComponent
        obj={person}
        count={10}
        isLoggedIn={true}
        personList={personList}
      ></ExtractingComponent>
      <PolymorphicComponent as="h1" size="lg" color="primary">heading h1</PolymorphicComponent>
      <PolymorphicComponent as="h2" size="md" color="primary">heading h2</PolymorphicComponent>
      <PolymorphicComponent as="label" size="sm" color="secondary">
        label
      </PolymorphicComponent>
    </div>
  );
}

export default App;
