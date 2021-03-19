import React from 'react'
import {Form}from 'react-bootstrap';
const SearchBar = ({search,setSearch}) => {
    return (
        <div className="col col-sm-4">
            <Form>
             <Form.Group controlId="formBasicText">
                <Form.Control value={search} onChange={
                    (e)=>setSearch(e.target.value)} type="text" placeholder="Enter Movie Name" />
            </Form.Group>
           </Form>
        </div>
    )
}

export default SearchBar
