export type APIError = {
  error: string
  details?: Array<{
    message: string
  }>
}

export const formatAPIError = ({ error, details }: APIError) => {
  const errorDetailsParsed = details?.map(({ message }) => message)

  return `${error}. ${errorDetailsParsed?.join(', ') ?? ''}`
}
