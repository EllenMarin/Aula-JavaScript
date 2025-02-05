CUSTOM DATE FIELD = atributo 'data' para esconder informação no backend na página
ex.
<tr data-product_id="123">
    <td>' .$item["name"]. '</td>
    <td>' .$item["quantity"]. '</td>
    <td>' .$item["price"]. '€</td>
    <td>' .$subtotal. '€</td>
    <td> 
        <button type="button"> X </button>
    </td>

</tr>
-//
Para se aceder a um data field = dataset
ex.
    console.log(tr.dataset.product_id);
-//
Headers:
content-type:application/json, //como a requisisção esta a ocorrer
