import React, {useEffect, useState} from "react";
import {Input, Select} from "components/Form";
import {OPTIONS_ABV, OPTIONS_IBU} from 'data';

function PostFilter({
  filterChange
}) {

  const [beer_name, setBeerName] = useState('');
  const [abv_lt, setAbvLt] = useState('');
  const [ibu_lt, setIbuLt] = useState('');

  const filter = (name, abv, ibu) => {
    const params = {};
    name
      ? params.beer_name = name
      : delete params.beer_name

    abv && abv !== '0'
      ? params.abv_lt = abv
      : delete params.abv_lt

    ibu && ibu !== '0'
      ? params.ibu_lt = ibu
      : delete params.ibu_lt

    filterChange(params)
  }

  const inputChange = (value) => {
    setBeerName(value);
    filter(value, abv_lt, ibu_lt)
  }

  const selectChangeABV = (value) => {
    setAbvLt(value);
    filter(beer_name, value, ibu_lt)
  }

  const selectChangeIBU = (value) => {
    setIbuLt(value);
    filter(beer_name, abv_lt, value)
  }


  return (
    <div className='posts-filter'>
      <Select
        name="abv_lt"
        options={OPTIONS_ABV}
        firstOption='ABV less'
        handleChange={selectChangeABV}
      />
      <Select
        name="ibu_lt"
        options={OPTIONS_IBU}
        firstOption='IBU less'
        handleChange={selectChangeIBU}
      />
      <Input
        type='search'
        placeholder='Search Article'
        handleChange={inputChange}
      />
    </div>
  )
}

export default PostFilter