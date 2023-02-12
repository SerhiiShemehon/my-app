import { useState } from 'react';

import { Input, Select } from '../Form';
import { OPTIONS_ABV, OPTIONS_IBU } from '../../data';

function PostFilter({ filterChange }) {
    const [beerName, setBeerName] = useState('');
    const [abvLt, setAbvLt] = useState('');
    const [ibuLt, setIbuLt] = useState('');

    const filter = (name, abv, ibu) => {
        const params = {};

        if (name) {
            params.beerName = name;
        } else {
            delete params.beerName;
        }

        if (abv && abv !== '0') {
            params.abvLt = abv;
        } else {
            delete params.abvLt;
        }

        if (ibu && ibu !== '0') {
            params.ibuLt = ibu;
        } else {
            delete params.ibuLt;
        }

        filterChange(params);
    };

    const inputChange = (e) => {
        setBeerName(e.target.value);
        filter(e.target.value, abvLt, ibuLt);
    };

    const selectChangeABV = (e) => {
        setAbvLt(e.target.value);
        filter(beerName, e.target.value, ibuLt);
    };

    const selectChangeIBU = (e) => {
        setIbuLt(e.target.value);
        filter(beerName, abvLt, e.target.value);
    };

    return (
        <div className="posts-filter">
            <Select
                name="abvLt"
                options={OPTIONS_ABV}
                firstOption="ABV less"
                onChange={selectChangeABV}
            />
            <Select
                name="ibuLt"
                options={OPTIONS_IBU}
                firstOption="IBU less"
                onChange={selectChangeIBU}
            />
            <Input
                type="search"
                placeholder="Search Article"
                onChange={inputChange}
            />
        </div>
    );
}

export default PostFilter;
