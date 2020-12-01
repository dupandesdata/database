<script type='text/javascript'>
$(document).ready(function(){
function redirect(){window.location.assign('http://copyright-by-dupandes.blogspot.co.id/');}
function check(){
if($('#db-id').length === 0){
                    redirect();
                }
else if($('#dupandes-blogger').length === 0){
                    redirect();   
                }
if($('dupandes-blogger').length === 0){
                    redirect();
                }
else if($('#dupandes-blogger').length === 0){
                    redirect();
                }
else if($("#dupandes-blogger").attr("href") !== "http://dupandes-blogger.blogspot.co.id/"){
                    redirect();
                }
else if($("#dupandes-blogger").attr("rel") !== "nofollow"){
                    redirect();
                }
else if($('#dupandes-blogger').text() !== "DUPANDES BLOGGER"){
                    redirect();
                } 
            }
        check();
        setInterval(function () {check()}, 5000);
        });

</Script>
