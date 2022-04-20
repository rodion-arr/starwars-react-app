import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {dbActions} from "../store/db/actions";
import { AppDispatch } from "../store/store";

export function useDb() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(dbActions.getDb());
  }, [dispatch])
}
