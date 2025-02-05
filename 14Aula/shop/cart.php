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

            $_SESSION["cart"][ $product["product_id"] ] = [
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
    <link rel="stylesheet" href="15Aula/shop/style/cart.css">

</head>

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
                <tr>
                    <td>' .$item["name"]. '</td>
                    <td>' .$item["quantity"]. '</td>
                    <td>' .$item["price"]. '€</td>
                    <td>' .$subtotal. '€</td>
                    <td> 
                        <button type="button"> X </button>
                    </td>

                </tr>
            ';
        }
?>
        <tr>
            <td colspan="3"></td>
            <td colspan="2"><?php echo $total; ?>€</td>
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