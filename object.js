/*
 object => has method() , properties , function/object   [ objects ::  window    ,   document ] 
                                                                        location 
                                                                         history
    
    * window's methods();
        alert('message') ->  print message from widow
        confirm('message')-> print message from widow + it's return boolean true/false
        prompt('message' , input-filed)-> print message from widow + input-filed

        setTimeout(function , millisecond)-> run the function that passed after specific time 
        clearTimeout(id of the setTimeout)-> clear the setTime method

        setInterval(function , millisecond)-> run the function that passed repeat every specific time 
        clearInterval(id of the setTimeout)-> clear the setInterval method

    * window's properties;
        [inner,outer]hight;-> get the hight of the window (window.innerHight;)
        [inner,outer]width;-> get the width of the window (window.innerWidth;)

        scrollX;-> get the distance scrolled i X direction /similar to pageXOffset
        scrollY;-> get the distance scrolled i Y direction /similar to pageYOffset
 ______________________________________________________________________________________________________________________________________________________

    * window's function/object;  ( location / history /navigator / screen )  [ window.location.href=""; ] 

        --*location's properties 

            href -> show the link of current web page location / window.location.href
                    take URL and move to it / window.location.href = 'https://www.youtube.com'
                    hash id '#' within page /window.location.href = '#footer' 
            hash -> show the 'hash' link of web page that you are currently at
                    
            protocol     -> show the type of protocol of web page / http , https , file , mailto  
            host/hostname-> show the name of 'host' link of web page that you are currently at 'name of website'  
            Domain       -> .com .org .net .edu .gov .info .india .co .mill
            pathname     -> show the path that after host name
            search       -> show the query string after pathname

            || location.protocol + location.hostname + location.pathname + location.search ||

            https://std.eng.cu.edu.eg/login.aspx
            proto ,     host        , pathname
            https://www.youtube.com/results?search_query=+Resistance+-+Retribution
            proto ,     host      , pathname,search

        --*location's methods()
            assign('')  work in browser history assign new web history
            replace('') ,, ,,  ,,  ,,  ,,  ,, replace the currant web history by new one
            reload('')  ,, ,,  ,,  ,,  ,,  ,, take boolean expiration
 ______________________________________________________________________________________________________________________________________________________

        --*history's methods()      /   window.history.(back forward go)

            go() -> take values / 1 = go forward one page / -1 go backward on page 
 ______________________________________________________________________________________________________________________________________________________
      
        --*navigator properties;

            onLine        -> show if the user online or not / true if he is online and false if he is not
            cookieEnabled -> show if the user enabled cookie or not / true if he is online and false if he is not
 ______________________________________________________________________________________________________________________________________________________

        --*screen properties; /it's work or operate on the device not the web page

            hight                 -> get the 'hight' of the device
            width                 -> get the 'width' of the device
            colorDepth/pixelDepth -> get the 'color Depth' of the device
            
            










 
 ClassList => you can "Add , remove ,toggle" class from elements
    element.classList.add()
    element.classList.toggle()
    
   
  

        

 





























 Animation =>
    translate: X Y ;  move elements from stat to new coordinate X,Y
    rotate: 180deg ;  rotate elements from stat to new orientation
    scale: 1 ;        default value is '1' , < 1 = small element > 1 big element 
                 All       1s         linear       1s
    transition: property duration timing-function delay ;
            -property to be transition , width / color.......
            -duration how long it taKes to perform changes 

 Version Control => 
    Word >
        repository = Project that contain all files/folder
    Commands >
        Clone : Bring files from remote repo to Local Machine
        add   : add files to Git for tracking changes
        Commit: save files that has been changed
        Push  : push/upload files to remote repo 'Github'
        Pull  : pulling/download files that has been chang from remote repo to your machine 

 <ul>
        <li>
          <a href="" id="Home">Home</a>
        </li>

        <li>
          <a class="has_sub_menu" href="#">donuts</a>

          <ul class="second_ul">
            <li>cupcake</li>
            <li>chocolate</li>
            <li>mango</li>
            <li>banana</li>
          </ul>
        </li>

        <li>
          <a class="has_sub_menu" href="#">ice cream</a>

          <ul class="second_ul">
            <li>vanilla</li>
            <li>chocolate</li>
            <li>mango</li>
            <li>banana</li>
          </ul>
        </li>

        <li><a href="#">Social</a></li>
      </ul>

      <h1>Desert</h1>
      <img src="#" />
      <div id="header_info"></div>


*/
