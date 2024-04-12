<?php
// router.php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    //return false; // Liefere die angefragte Ressource direkt aus
    echo "<p>Willkommen in PHP! WITH PREQ MATCH</p>";
} else {
    echo "<p>Willkommen in PHP!</p>";
}
?>
