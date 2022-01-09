<?php
include("auth.php");
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

    <title>部門管理</title>
  </head>
  <body>
<?php
  echo "歡迎: $username!!";
  if($gender==1) echo "先生";
  else          echo "小姐";


?>



    <h1>部門資料維護</h1>

    <div class="container">

  <?php
  
  function display_form($op,$deptid)
  {

      if ($op==3)
      {
        $deptid="";
        $deptname="";
        $managername="";
        $op=4;

      }
      else
      {
              include("connectdb.php");
              include('dbutil.php');
              $sql = "SELECT deptid,deptname,managername FROM dept where deptid='$deptid'";

              $result =$connect->query($sql);

              /* fetch associative array */
              if ($row = $result->fetch_assoc()) {
                  $deptid=$row['deptid'];
                  $deptname=$row['deptname'];
                  $managername=$row['managername'];
              }
                $op=2;
      }


      echo "<form action=dept.php method=post>";
      echo "<input type=hidden name=op value=$op>";
      echo "<div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>部門代號</label>
              <input type='text' class='form-control' name=deptid id='deptid' placeholder='請輸入部門代號' value=$deptid>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>部門名稱</label>
              <input type='text' class='form-control' name=deptname id='deptname' placeholder='請輸入部門名稱' value=$deptname>
            </div>
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>主管姓名</label>
              <input type='text' class='form-control' name=managername id='managername' placeholder='請輸入主管姓名' value=$managername>
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
              $deptid=$_REQUEST['deptid']; 
               display_form($op,$deptid);
              break;      
        case 2:  //修改資料
                $deptid=$_REQUEST['deptid'];
              $deptname=$_REQUEST['deptname'];
              $managername=$_REQUEST['managername'];

                  $sql="update dept 
                          set deptid='$deptid',
                              deptname='$deptname',
                              managername='$managername'
                        where deptid='$deptid'";
                  include("connectdb.php");
                  include('dbutil.php');
                  execute_sql($sql);
              break;
        case 3: //新增
               $deptid="";
                display_form($op,$deptid);
              break;
        case 4: //新增資料
              $deptid=$_REQUEST['deptid'];
              $deptname=$_REQUEST['deptname'];
              $managername=$_REQUEST['managername'];

              $sql="insert into dept (deptid,deptname,managername) values ('$deptid','$deptname','$managername')";
              include("connectdb.php");
              include('dbutil.php');
              execute_sql($sql);
              break;      
        case 5: //刪除資料              
              $deptid=$_REQUEST['deptid'];              
            
              $sql="delete from dept where deptid='$deptid'";
              include("connectdb.php");
              include('dbutil.php');
              execute_sql($sql);
              break;
        case 6: //返回主頁面
          
          break;
      }      
  
    }
  ?>


    <p align=right>
    <a href=dept.php?op=3><button type='button' class='btn btn-success'>新增 <i class='bi bi-alarm'></i></button></a>
    <a href=home.php><button type='button' class='btn btn-info'>首頁 <i class='"bi bi-house'></i></button></a>  </p>
    <table class="table">
  	<thead class="table-dark">
  		<tr>
  			<td>部門代號<i class="bi bi-layout-text-sidebar"></i></i></td>
             <td>部門名稱<i class="bi bi-people-fill"></i></td>
             <td>主管姓名<i class="bi bi-person"></i></td>  
             <td>&nbsp&nbsp&nbsp修改<i class="bi bi-pencil"></i></td>			
             <td>&nbsp&nbsp&nbsp刪除<i class='bi bi-trash'></i></td>			
  		</tr>
  	</thead>
  	<tbody>

    <?php


    
    include("connectdb.php");
    
    $sql = "SELECT deptid,deptname,managername FROM dept";

    $result =$connect->query($sql);

    /* fetch associative array */
    while ($row = $result->fetch_assoc()) {
        //printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
        $deptid=$row['deptid'];
        $deptname=$row['deptname'];
        $managername=$row['managername'];

        echo "<tr><TD>$deptid<td> $deptname<TD>$managername";    
        echo "<TD><a href=dept.php?op=1&deptid=$deptid><button type='button' class='btn btn-primary'>修改 <i class='bi bi-alarm'></i></button></a>";
        echo "<TD><a href=\"javascript:if(confirm('確實要刪除[$deptname]嗎?'))location='dept.php?deptid=$deptid&op=5'\"><button type='button' class='btn btn-danger'>刪除 <i class='bi bi-trash'></i></button>";
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