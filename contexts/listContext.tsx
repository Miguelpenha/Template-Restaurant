import { IItemList } from '../types'
import { Dispatch, SetStateAction, createContext, FC, useState, useContext } from 'react'

interface IListContext {
    list: IItemList[]
    setItem: (item: IItemList) => void
    removeItem: (itemID: string) => void
    getItem: (itemID: string) => IItemList | null
    setList: Dispatch<SetStateAction<IItemList[]>>
}

export const ListContext = createContext<IListContext>({} as IListContext)

export const ListProvider: FC = ({ children }) => {
    const [list, setList] = useState<IItemList[]>([])

    function removeItem(itemID: string) {
        const listNew = []

        list.map(itemMap => itemID !== itemMap._id && listNew.push(itemMap))

        setList(listNew)
    }

    function setItem(item: IItemList) {
        setList(list => list.map(itemMap => item._id === itemMap._id ? item : itemMap))
    }

    function getItem(itemID: string): IItemList | null {
        let exists: IItemList | null = null

        list.map(itemMap => {
            if (itemID === itemMap._id) {
                exists = itemMap
            }
        })

        return exists
    }

    return (
        <ListContext.Provider value={{list, setItem, setList, getItem, removeItem}}>
           {children}
        </ListContext.Provider>
    )
}

export function useList() {
    return useContext(ListContext)
}

export default useList