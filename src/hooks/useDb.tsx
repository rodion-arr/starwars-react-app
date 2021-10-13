import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {dbActions} from "../store/db/actions";

export function useDb() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dbActions.getDb());
  }, [dispatch])
}
