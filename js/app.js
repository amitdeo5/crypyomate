const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype = form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');    
    fetchPrice(ctype);

});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    showPrice(r.data.coin);
}


const showPrice = (coinData)=>{
    const price = coinData.price;
    const vol = coinData.volume;
    const change = coinData.priceChange1d;
    const coin = coinData.name;
    const rank = coinData.rank;
    const icon = coinData.icon;
    const symbol = coinData.symbol;
    const marketcap = coinData.marketCap;
    
    const curr = 'USD';
    var col= "green";
    if(change<0){
        col = "red";
    }
    res.innerHTML =    
   
    
    `  <th>
  <div style="padding:20px">  <p style="color:${col};">Rank : ${rank}  <p style="color:black;"> Symbol : ${symbol} </p> </p>
  <td>  <img src= "${icon}"> </img>  </td>
  <div>
    </th>
      

<tr class="bg-primary" style="color: white; width: 200px;">
   
<td>${coin}</td>
    <td>
        Current Value
    </td>
</tr>
<tr>
    <td>Price</td>
    <td style="color:${col};"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td>Volume (24hrs)</td>
    <td>${vol}</td>
</tr>

<tr>
    <td>MarketCap</td>
    <td>${marketcap}</td>
</tr>

<tr>
    <td>Change (24hrs)</td>
    <td style="color:${col};">${change} ${curr}</td>
</tr>`;
};
