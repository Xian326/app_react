
<?php
//include("auth.php");
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <!-- jQuery v1.9.1 -->
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <!-- DataTables v1.10.16 -->
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet" />
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">

    <title>訂單管理</title>
  </head>
  <body>

 <?php

//echo "歡迎 $username!!";

?>


    <h1>訂單資料維護</h1>

    <div class="container">

  <?php
  
  function display_form($op,$orderid)
  {

      if ($op==3)
      {
        $orderid="";
        $empid="";
        $custid="";
        $orderdate="";
        $descript="";
        $op=4;

      }
      else
      {
              include("connectdb.php");
              $sql = "SELECT orderid,empid,custid,orderdate,descript FROM salesorder where orderid='$orderid'";

              $result =$connect->query($sql);

              /* fetch associative array */
              if ($row = $result->fetch_assoc()) {
                  $orderid=$row['orderid'];
                  $empid=$row['empid'];
                  $custid=$row['custid'];
                  $orderdate=$row['orderdate'];
                  $descript=$row['descript'];
              }
                $op=2;
      }


      echo "<form action=salesorder.php method=post>";
      echo "<input type=hidden name=op value=$op>";
      echo "<div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>訂單代號</label>
              <input type='text' class='form-control' name=orderid id='orderid' placeholder='請輸入訂單代號' value=$orderid>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>員工代號</label>
              <input type='text' class='form-control' name=empid id='empid' placeholder='請輸入員工代號' value=$empid>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>供應商代號</label>
              <input type='text' class='form-control' name=custid id='custid' placeholder='請輸入供應商代號' value=$custid>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>訂單日期</label>
              <input type='text' class='form-control' name=orderdate id='orderdate' placeholder='請輸入訂單日期' value=$orderdate>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>備註</label>
              <input type='text' class='form-control' name=descript id='descript' placeholder='請輸入備註' value=$descript>
            </div>";
      echo " <div class='col-auto'>
              <button type='submit' class='btn btn-primary mb-3'>儲存</button>           
              <button type='reset' class='btn btn-primary mb-3'>reset</button>                            
            </div>";
      echo "</form>";

  }


    if(isset($_REQUEST['op']))
    {
      $op=$_REQUEST['op'];   

      
      switch ($op)
      {
        case 1:  //修改
              $orderid=$_REQUEST['orderid']; 
               display_form($op,$orderid);
              break;      
        case 2:  //修改資料
              $orderid=$_REQUEST['orderid'];
              $empid=$_REQUEST['empid'];
              $custid=$_REQUEST['custid'];
              $orderdate=$_REQUEST['orderdate'];
              $descript=$_REQUEST['descript'];

                  $sql="update salesorder 
                          set orderid='$orderid',
                              empid='$empid',
                              custid='$custid'
                              orderdate='$orderdate',
                              descript='$descript'
                        where orderid='$orderid'";
                  include("connectdb.php");
                  include('dbutil.php');
                  execute_sql($sql);
              break;
        case 3: //新增
               $orderid="";
                display_form($op,$orderid);
              break;
        case 4: //新增資料
            $orderid=$_REQUEST['orderid'];
            $empid=$_REQUEST['empid'];
            $custid=$_REQUEST['custid'];
            $orderdate=$_REQUEST['orderdate'];
            $descript=$_REQUEST['descript'];;

              $sql="insert into salesorder (orderid,empid,custid,orderdate,descript) values ('$orderid','$empid','$custid','$orderdate','$descript')";
              include("connectdb.php");
              include('dbutil.php');
              execute_sql($sql);
              break;      
        case 5: //刪除資料              
              $orderid=$_REQUEST['orderid'];              
            
              $sql="delete from salesorder where orderid='$orderid'";
              include("connectdb.php");
              include('dbutil.php');
              execute_sql($sql);
              break;

      }      
  
    }
  ?>


    <p align=right>
    <a href=salesorder.php?op=3><button type='button' class='btn btn-success'>新增 <i class='bi bi-alarm'></i></button></a>  </p>
    <table class="example">
  	<thead>
  		<tr>
  			<td> 訂單代號</td>
             <td>員工代號</td>
             <td>供應商代號</td>  
             <td>日期</td>  
             <td>備註</td>  
             <td> edit</td>			
             <td> delete</td>			
  		</tr>
  	</thead>
  	<tbody>

    <?php


    
    include("connectdb.php");
    $sql = "SELECT orderid,empid,custid,orderdate,descript FROM salesorder";

    $result =$connect->query($sql);

    /* fetch associative array */
    while ($row = $result->fetch_assoc()) {
        //printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
        $orderid=$row['orderid'];
                  $empid=$row['empid'];
                  $custid=$row['custid'];
                  $orderdate=$row['orderdate'];
                  $descript=$row['descript'];

        echo "<tr><TD>$orderid<td> $empid<TD>$custid<TD>$orderdate<TD>$descript";    
        echo "<TD><a href=salesorder.php?op=1&orderid=$orderid><button type='button' class='btn btn-primary'>修改 <i class='bi bi-alarm'></i></button></a>";
        echo "<TD><a href=\"javascript:if(confirm('確實要刪除[$orderid]嗎?'))location='salesorder.php?orderid=$orderid&op=5'\"><button type='button' class='btn btn-danger'>刪除 <i class='bi bi-trash'></i></button>";
    }    

    
    ?>


</tbody>
  </table>


  </div>
  <script>
  	$( ".example" ).DataTable();
  </script>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>