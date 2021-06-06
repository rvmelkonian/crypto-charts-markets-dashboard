import Select from 'react-select'

const DropdownCoinList = ({ setCoin, filteredCoins, coin, firstUpdate}) => {

  const customStyles = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: 'black',
        }
    }
}

  const handleChange = (e) => {
    setCoin(e.value);
    console.log('./Dropdown: coin is', e.value )
  }

  const options = filteredCoins.map((coin) => {
    return {
        value: coin.id,
        label: coin.name
    }
  });



    return (
      <Select
      options={options}
      onChange={e => handleChange(e)} isSearchable
      styles={customStyles}
      theme={theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'hotpink',
        primary: 'black',
      },
    })

      }>
      </Select>
    )
}

export default DropdownCoinList
