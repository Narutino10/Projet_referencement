<?php
session_start();
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!empty($username) && !empty($password)) {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
        $stmt->execute([$username]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            // Démarrer une session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            echo "Connexion réussie";
        } else {
            echo "Nom d'utilisateur ou mot de passe incorrect";
        }
    } else {
        echo "Veuillez remplir tous les champs";
    }
}
?>
