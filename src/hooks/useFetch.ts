import { useQuery } from "react-query"

const useFetch = (name: string, dep: any[], func: any) => {
  const { isLoading, isError, isSuccess, data } = useQuery([name, ...dep], func)
  if (isError) return { isLoading, isError, isSuccess, data }
}

export default useFetch
