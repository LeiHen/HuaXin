<li class="news_list">
             <time class="time">[field:pubdate function=MyDate('y-m-d',@me)/]</time>
             <h1 class="title">[field:title/]</h1>
             <a href="[field:arcurl/]" class="more">查看更多<span class="icon_right"></span></a>
             <span class="line_bottom"></span>
          </li>
          {/dede:liarclistst}



          <!--   <li class="news_page">
                <a href="#"><span class="icon_left"></span></a>
                <a href="#"><span class="icon_right"></span></a>
            </li> -->


           <!--  <li class="mod_page">
                <a href="#" ><span class="icon_left"></span></a>
                <a href="#" class="hover">1</a>
                <a href="#">2</a>
                <a href="#"><span class="icon_right"></span></a>
            </li> -->
            {dede:pagelist listitem='info,pre,next' listsize='5' typeid='5'/}
            {dede:page pagesize="10"/}

       </ul>
       
       <ul class="news_detail">
            {dede:arclist typeid="6" row='10'}
            <li class="news_list">
               <time class="time">[field:pubdate function=MyDate('y-m-d',@me)/]</time>
               <h1 class="title">[field:title/]</h1>
               <a href="[field:arcurl/]" class="more">查看更多<span class="icon_right"></span></a>
               <span class="line_bottom"></span>
            </li>