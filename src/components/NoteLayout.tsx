import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const NoteLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 5 });
  const n = searchParams.get("n");
  const number = n ? parseInt(n, 10) : 5;

  return (
    <>
      <br />
      <Link to="/note/1">Note 1</Link>
      <br />
      <Link to="/note/2">Note 2</Link>
      <br />
      <Link to="/note/new">New Note</Link>
      <br />

      <Link to={`/note/${number}`}>Note {number}</Link>
      <br />

      <Outlet context={{ hello: "World" }} />

      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value.toString() })}
      />
    </>
  );
};

export default NoteLayout;
