import React from 'react';

type searchProps = {
  location: string
}

export default function Search(props: searchProps) {
  return <h3>Searching {props.location}</h3>
}
