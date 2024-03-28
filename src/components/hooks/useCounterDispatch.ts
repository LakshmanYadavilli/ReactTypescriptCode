import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { dispatchType, rootState } from "../store/store";
type useDispatchType = () => dispatchType;

export let useCounterDispatch: useDispatchType = useDispatch;
export let useCounterSelector: TypedUseSelectorHook<rootState> = useSelector;
