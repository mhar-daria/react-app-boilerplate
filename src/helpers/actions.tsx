export function actionPayload<T = any, M = Record<string, string>>(
  payload: T,
  meta?: M
) {
  return { payload, meta }
}
