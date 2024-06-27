<?php
$host = "localhost";
$db = "zorglux";
$user = "root";
$password = "root";
$charset = "utf8mb4";

$dsn = "pgsql:host=$host;dbname=$db;user=$user;password=$password";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>