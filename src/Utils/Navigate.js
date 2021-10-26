import { createRef } from 'react'

export const nav = createRef()
export const navigate = (name, params) => {
    nav.current?.navigate(name, params)

}