import { cookies } from 'next/headers'

export const getAuthorized = () => !!cookies().get('token')
