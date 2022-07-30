import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/welcome";
import { HelloJsx, Hellojsx } from "./components/HelloJSX";
import Message from "./components/message";
import Incre from "./components/Counter";
import { Welcome1, Message1 } from "./components/destructuring";
import { Event1, Event2 } from "./components/clickEvent";
import EventBind from "./components/EventBind";
import ParentChildComponent from "./components/$15ParentChildComponent";
import UserGreeting from "./components/$16UserGreeting";
import NameList from "./components/$17NameList";
import ListName from "./components/$19NameList";
import StyleSheet from "./components/$20StyleSheet";
import FormMethod from "./components/$21Form";
import LifeCycleA from "./components/$23LifeCycle";
import UpdateLifeCycleA from "./components/$24UpdateLifeCycle";
import FragmentDemo from "./components/$25FragmentDemo";
import ParentPureComp from "./components/$26PureComponent";
import MemoComp from "./components/$27MemoComp";
import RefsDemo from "./components/$28RefsDemo";
import ParentRefs from "./components/$29ChildRefs";
import ForwardRefsParent from "./components/$30ForwardRefs";
import PortalsParent from "./components/$31Portals";
import ErrorChild from "./components/$32Error";
import ErrorBoundariesParent from "./components/$32ErrorBoundaries";
import { MouseClick, MouseHover } from "./components/$33HOCpt1";
import MouseClickpt2 from "./components/$34HOCpt2";
import MouseHoverpt2 from "./components/$34HOCpt22";
import { MyNameIs, BaseRenderC1, BaseRenderC2 } from "./components/$37Render";
import { UserProvider, BlockComponentC } from "./components/$39Context";
import PostListGetReq from "./components/$42PostList";
import PostForm from "./components/$43PostForm";
import FunctionHoook from "./components/$45FunctionHoook";
import HookCounter2 from "./components/$46HookCounter";
import HookCounter3 from "./components/$47HookCounter3";
import HookCounter4 from "./components/$48HookCounter4";
import UseEffectHook from "./components/$49UseEffectHook";
import ConditionalRun from "./components/$51ConditionalRun";
import ConditionalRun1 from "./components/$52ConditionalRun2";
import IncorrectDependices from "./components/$54IncorrectDependices";
import FetchingUseEffect from "./components/$55FetchingUseEffect";
import IdFetchHook from "./components/$56IdFetchHook";
import IdFetchHook11 from "./components/$57prevTuts";
import DealingWithoutContext from "./components/$58createContextwithoutHook";
import WithContext1 from "./components/$59WithContext1";
import UsingReducer from "./components/$62UsingReducer";
import ReducerUseses from "./components/$63reducerUseses";
import MultipleUseReducer from "./components/$64MultipleUseReducer";
import { createContext, useReducer } from "react";
import {
  ComponentReducerA,
  ComponentReducerB,
  ComponentReducerC,
} from "./components/$65ComponentReducer";
import FetchingdataUsingEffectState from "./components/$66FetchingdataUsingEffectState";
import DataFetchingHook from "./components/$67DataFetchingHook";
import ParentCBHook from "./components/$68CallbackHook";
import MemoUse from "./components/$70MemoUse";
import UnameUseRef from "./components/$71useRef1";
import { UseNameRef2AA, UseNameRef2BB } from "./components/$72UseNameRef2";
import {
  DocumentTitleCustomA,
  DocumentTitleCustomB,
} from "./components/$73CstomizedHookTitle";
import {
  CustomHookCounterA,
  CustomHookCounterB,
} from "./components/$74CustomHookCounter";
import UseFormCustomHook from "./components/$75UseFormCustomHook";
import ReReneringUseState from "./components/$76ReReneringUseState";
import ReRenderUseReducer from "./components/$78ReRenderUseReducer";
import {
  StateImutabilityArray,
  StateImutabilityObject,
} from "./components/$81StateImutabilityArrayObject";
import ParentChildRender from "./components/$82ParentChildRender";
import {
  ParentChildRender2,
  ChildRender2,
} from "./components/$83ParentChildRender2";
import ReactMemoParent from "./components/$84ReactMemoParent";
import ReactMemoParent2 from "./components/$85ReactMemoParent2";
import IncorrectMemowithImpureComponentParent from "./components/$86IncorrectMemowithImpureComponentParent";
import Parent55 from "./components/$87Parent55";
import Parent65 from "./components/$88parent65";
import UseContextParent75 from './components/$89useContextParent75'
import UseContextParent85 from "./components/$90useContextParent85";
import UseContextParent95 from "./components/$91useContextParent95";
import ObjectA from './components/$91useContextChild95'

export const WrapperContext = createContext();
const intialState = 0;
const reducer = (state, active) => {
  switch (active) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <Greet name="vishal" heroName="Papu">
        <p>this the children of Greet</p>
      </Greet>
      <Welcome name="vivek" heroName="taplu">
        <button>click me</button>
      </Welcome>

      <HelloJsx></HelloJsx>
      <Hellojsx />

      <Message name="chudi"></Message>
      <Incre></Incre>
      <Message1 name="xxx-tentaction" age="21"></Message1>
      <Welcome1 name="panda" age="20"></Welcome1>
      <Event1></Event1>
      <Event2></Event2>
      <EventBind></EventBind>

      <ParentChildComponent></ParentChildComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>

      <ListName></ListName>
      <StyleSheet heading={true}></StyleSheet>
      <FormMethod></FormMethod>
      <LifeCycleA></LifeCycleA>

      <UpdateLifeCycleA></UpdateLifeCycleA>
      <FragmentDemo></FragmentDemo>
      <ParentPureComp></ParentPureComp>
      <MemoComp></MemoComp>

      <RefsDemo></RefsDemo>
      <ParentRefs></ParentRefs>
      <ForwardRefsParent></ForwardRefsParent>
      <PortalsParent></PortalsParent>
      <ErrorBoundariesParent>
        <ErrorChild heroName="SpiderMan"></ErrorChild>
      </ErrorBoundariesParent>
      <ErrorBoundariesParent>
        <ErrorChild heroName="IronMan"></ErrorChild>
      </ErrorBoundariesParent>
      <ErrorBoundariesParent>
        <ErrorChild heroName="Joker"></ErrorChild>
      </ErrorBoundariesParent>
      <hr />

      <MouseHover></MouseHover>
      <MouseClick></MouseClick>
      <MouseClickpt2 name="vishal"></MouseClickpt2>
      <MouseHoverpt2 name="vivek"></MouseHoverpt2>
      <MyNameIs
        name={(isLoggedIn) => (isLoggedIn ? "vishal" : "Guest")}
      ></MyNameIs>
      <BaseRenderC1
        render={(count, incrementNo) => (
          <MouseHoverpt2
            Counting={incrementNo}
            count={count}
            name="vk"
          ></MouseHoverpt2>
        )}
      ></BaseRenderC1>
      <BaseRenderC1
        render={(count, incrementNo) => (
          <MouseClickpt2
            Counting={incrementNo}
            count={count}
            name="vk"
          ></MouseClickpt2>
        )}
      ></BaseRenderC1>
      <BaseRenderC2>
        {(count, incrementNo) => (
          <MouseClickpt2
            Counting={incrementNo}
            count={count}
            name="vk"
          ></MouseClickpt2>
        )}
      </BaseRenderC2>
      <UserProvider value="vishal">
        <BlockComponentC></BlockComponentC>
      </UserProvider>
      <BlockComponentC></BlockComponentC>
      <PostListGetReq></PostListGetReq>
      <PostForm></PostForm>

      <FunctionHoook></FunctionHoook>
      <HookCounter2></HookCounter2>
      <HookCounter3></HookCounter3>
      <HookCounter4></HookCounter4>
      <UseEffectHook></UseEffectHook>
      <ConditionalRun></ConditionalRun>
      <ConditionalRun1></ConditionalRun1>
      <IncorrectDependices></IncorrectDependices>
      <FetchingUseEffect></FetchingUseEffect>
      <IdFetchHook></IdFetchHook>
      <IdFetchHook11></IdFetchHook11>

      <DealingWithoutContext></DealingWithoutContext>
      <WithContext1></WithContext1>
      <UsingReducer></UsingReducer>
      <ReducerUseses></ReducerUseses>
      <MultipleUseReducer></MultipleUseReducer>
      <WrapperContext.Provider
        value={{ count: count, countDispathc: dispatch }}
      >
        count - {count}
        <ComponentReducerA></ComponentReducerA>
        <ComponentReducerB></ComponentReducerB>
        <ComponentReducerC></ComponentReducerC>
      </WrapperContext.Provider>
      <FetchingdataUsingEffectState></FetchingdataUsingEffectState>
      <DataFetchingHook></DataFetchingHook>
      <ParentCBHook></ParentCBHook>

      <MemoUse></MemoUse>
      <UnameUseRef></UnameUseRef>
      <UseNameRef2AA></UseNameRef2AA>
      <UseNameRef2BB></UseNameRef2BB>
      <DocumentTitleCustomA></DocumentTitleCustomA>
      <DocumentTitleCustomB></DocumentTitleCustomB>
      <CustomHookCounterA></CustomHookCounterA>
      <CustomHookCounterB></CustomHookCounterB>
      <UseFormCustomHook></UseFormCustomHook>
      <ReReneringUseState></ReReneringUseState>
      <ReRenderUseReducer></ReRenderUseReducer>
      <StateImutabilityArray></StateImutabilityArray>
      <StateImutabilityObject></StateImutabilityObject>
      <ParentChildRender></ParentChildRender>
      <ParentChildRender2>
        <ChildRender2></ChildRender2>
      </ParentChildRender2>
      <ReactMemoParent></ReactMemoParent>
      <ReactMemoParent2></ReactMemoParent2>
      <IncorrectMemowithImpureComponentParent></IncorrectMemowithImpureComponentParent>
      <Parent55></Parent55>
      <Parent65></Parent65>
      <UseContextParent75></UseContextParent75>
      <UseContextParent85></UseContextParent85>
      <UseContextParent95>
          <ObjectA></ObjectA>
      </UseContextParent95>

    </div>
  );
}

export default App;
