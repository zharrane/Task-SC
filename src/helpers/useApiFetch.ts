import { useQuery } from "react-query"
import axios, { Method } from "axios"
import CONST from "./constants"

export const fetcher = async (
  url: string,
  requestType: Method,
  datas?: any
) => {
  try {
    const { data } = await axios.request({
      method: requestType,
      baseURL: CONST.BASE_URL,
      url,
      data: datas,
    })
    return data
  } catch (error: any) {
    error.response.status === 401 && localStorage.clear()
    return []
  }
}

const useApiFetch = (
  queryKeys: any,
  url: string,
  requestType: Method,
  datas: any,
  doOnSuccess: any
) => {
  const { isLoading, isSuccess, isError, data } = useQuery(
    [...queryKeys],
    async () => fetcher(url, requestType, datas),
    { onSuccess: (data) => doOnSuccess(data) }
  )
  return { isLoading, isSuccess, isError, data }
}
export default useApiFetch
