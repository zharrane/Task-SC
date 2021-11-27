import { useQuery } from "react-query"
import axios, { Method } from "axios"
import CONST from "./constants"

export const fetcher = async (url: string, requestType: Method, data: any) => {
  try {
    return axios.request({
      method: requestType,
      baseURL: CONST.BASE_URL,
      url,
      data,
    })
  } catch (error: any) {
    error.response.status === 401 && localStorage.clear()
  }
}

const useApiFetch = (
  queryKeys: any,
  queryConfig?: any,
  enabled: any,
  onSuccess: any
) => {
  return useQuery([...queryKeys], () => fetcher, {
    enabled: enabled,
    onSuccess,
    ...queryConfig,
  })
}
export default useApiFetch
