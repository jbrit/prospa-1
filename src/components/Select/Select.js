import React from 'react';

export default function Select() {
  return (
    <select
      name='number'
      onChange={(text) => this.handleText('number', text)}
      value={this.state.input.number}
    >
      <option value='+232'>+232</option>
      <option value='+233'>+233</option>
      <option value='+234'>+234</option>
    </select>
  );
}
