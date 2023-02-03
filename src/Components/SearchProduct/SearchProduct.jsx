import React, { useState } from 'react'
import {ImSearch} from 'react-icons/im'
import { ButtonAdd, InputSearch, SearchButton } from '../../style/buttons'

export default function SearchProduct({setSearch}) {
    const [searchValue, setSearchValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSearch(searchValue);


        setSearchValue("")

    }

  return (
    <form onSubmit={submit}>
        <InputSearch type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <SearchButton type='submit'><ImSearch/></SearchButton>
        
        


    </form>
  )
}
