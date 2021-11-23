import { useQuery } from "react-query"

const useFetch = (name: string, func: any, dep: any[]) => {
  const { isLoading, isError, isSuccess, data } = useQuery([name, ...dep], func)
  if (isError) return { isLoading, isError, isSuccess, data }
}

export default useFetch
