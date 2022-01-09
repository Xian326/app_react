<?php

function closedb()
{
    global $connect;
    $connect->close();
}


function execute_sql($sql)
{
    global $connect;

    if ($connect->query($sql) === TRUE) {
        echo "<script>alert('成功');</script>";
        } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
        }

}


?>