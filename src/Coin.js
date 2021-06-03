
import './coin.css'

 const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {

   const formatPercent = number => {
     let string = number.toFixed(2).toString();
     string += '%';
     return string;
 }

     return (
       <div className='coin-container'>
         <div className='coin-row'>
           <div className='coin'>
             <img src={image} alt='crypto' />
             <h1>{name}</h1>
             <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
            <p className='coin-price'>${price}</p>
            <p className='coin-volume'>${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
            <p className='coin-percent red'>{formatPercent(priceChange)}</p>
            ) : (
            <p className='coin-percent green'>{formatPercent(priceChange)}</p>
            )}
            <p className='coin-marketcap'>
            Mkt Cap : ${marketcap.toLocaleString()}
            </p>
        </div>
      </div>
    </div>
);
};

 export default Coin
