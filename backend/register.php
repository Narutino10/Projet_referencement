<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!empty($username) && !empty($password)) {
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        try {
            $stmt->execute([$username, $passwordHash]);
            echo "Utilisateur enregistré";
        } catch (PDOException $e) {
            echo "Erreur lors de l'enregistrement de l'utilisateur" . $e->getMessage();
        }
} else {
    echo "Veuillez remplir tous les champs";
}
}



?>