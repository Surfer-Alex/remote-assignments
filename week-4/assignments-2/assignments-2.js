function ajax(url) {
    return fetch(url, { method: 'get' })
        .then(res => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .catch(err => err)// your code here
}
function render(data) {
    const domPlace = data.map(items => {
        return`<ul>
            <li>
                <p>描述：${items.description}</p>
                <p>品名：${items.name}</p>
                <p>價格：${items.price}</p>
            </li>
        </ul>`

    })
    document.getElementsByClassName("here")[0].innerHTML = domPlace;// your code here
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
    render(data);
});

