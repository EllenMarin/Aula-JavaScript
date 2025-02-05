<?php
    require("config.php");

    if(isset($_POST["send"]) && intval($_POST["quantity"]) > 0) {
        
        $query = $db->prepare("
            SELECT product_id, name, price, stock
            FROM products
            WHERE product_id = ?
              AND stock >= ?
        ");

        $query->execute([
            $_POST["product_id"],
            $_POST["quantity"]
        ]);

        $product = $query->fetch( PDO::FETCH_ASSOC );

        if(!empty($product)) {

            $_SESSION["cart"][ (int)$product["product_id"] ] = [
                "product_id" => $product["product_id"],
                "quantity" => intval($_POST["quantity"]),
                "name" => $product["name"],
                "price" => $product["price"],
                "stock" => $product["stock"]
            ];
        }

        /* forçar que o utilizador entre na página
           novamente mas por GET em vez de POST */
        header("Location: cart.php");
    }
?>
<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="utf-8">
    <title>Carrinho</title>
    <link rel="stylesheet" href="../shop/style/style.css">
</head>
<script>
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByTagName("button");

    function updateTotalPrice(){
        /*calcular totoal final, selecionar todos os subtotais */
        var total = 0;
            const subtotals = document.querySelectorAll(".subtotal");
            for(let subtotal of subtotals){
                total = total + Number(subtotal.textContent);//cast
            }
            document.getElementById("total").textContent = total.toFixed(2);
        
    }

    for (let button of buttons) {

        button.addEventListener("click", () => {
            const tr = button.parentElement.parentElement;

            fetch("requests.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "request=removeProduct&product_id=" + tr.dataset.product_id
                })
                .then(response => response.json())
                .then(result => {
                    tr.remove();
                    updateTotalPrice();
                });

        });
    }
    /*obter todos os campos de quantidade e aplicar o controle de evento de "onchange" a cada um deles para obter assim o valor apos alteração do campo */
    const inputs = document.querySelectorAll('td input[name="quantity"]');

    for (let input of inputs) {

        input.addEventListener("change", () => {
            const tr = input.parentElement.parentElement;
            const product_id = tr.dataset.product_id;

            fetch("requests.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "request=changeQuantity&product_id=" + product_id + "&quantity=" + input.value
                })
                .then(response => response.json())
                .then(result => {
                    
                    //falta mostrar essa informação na página
                    const subtotal = (input.value * tr.dataset.price).toFixed(2);
                    tr.children[3].firstElementChild.textContent = subtotal;
                    
                    updateTotalPrice();
                });
        })
    }

})
</script>

<body>
    <?php
    if( !empty($_SESSION["cart"]) ) {
?>
    <table>
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Subtotal</th>
            <th>Remover</th>
        </tr>
        <?php
        $total = 0;

        foreach($_SESSION["cart"] as $item) {

            $subtotal = $item["price"] * $item["quantity"];
            $total += $subtotal;

            echo '
                <tr data-product_id=" '. $item["product_id"] .' " data-price=" ' . $item["price"] . ' ">
                    <td>' .$item["name"]. '</td>
                    <td> 
                    <input
                    type="number"
                    name="quantity"
                    required
                    min="1"
                    max="' .$item["stock"]. '"
                    value="' .$item["quantity"]. '"
                >
                        

                    </td>
                    <td>' .$item["price"]. '€</td>
                    <td>
                        <span class="subtotal"> ' .$subtotal. '</span> 
                    €</td>
                    <td> 
                        <button type="button"> X </button>
                    </td>

                </tr>
            ';
        }
?>
        <tr>
            <td colspan="3">TOTAL</td>
            <td colspan="2" > <span id="total"> <?php echo $total; ?> </span> €</td>
        </tr>
    </table>
    <?php
    }
    else {
        echo "<p>Ainda não tem nada no carrinho</p>";
    }
?>
    <nav>
        <a href="./">Voltar à Home</a>
        <a href="checkout.php">Efectuar Encomenda</a>
    </nav>
</body>

</html>