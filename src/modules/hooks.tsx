import { useSelector, shallowEqual } from 'react-redux'
import type { RootState } from 'reducers'

// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<typeof RootState> = useSelector
export function useAppSelector<TReturn>(
  selector: (state: RootState) => TReturn
) {
  return useSelector(selector, shallowEqual)
}
