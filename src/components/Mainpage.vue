<template>
  <div id="mainpage"class="col-lg-9 col-md ">
    <div class="header"> 
      <h1> I'm glad you found me. </h1>
    </div>
    <br></br>
    <div class="text-header">
      <h4> Things of interest </h4>
      <p> Conceptualizing ideas, data analyses and visualization, designing in various adobe programs and developing web applications.
        <br></br>
        <h4> Projects I am currently envolved in </h4>
        Master Business Informatics at<a href="https://dcspine.nl"> Utrecht University</a>. Within this programme I am following the applied Data Science profile. Front end engineer at <a href="https://dcspine.nl">DCspine</a>.
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>

#mainpage{
  margin:0px;
}

@media(max-width:770px){
  h2{
  }
  .header{
    padding-top:100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
  }

  .text-header{
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media(min-width:770px){
  h2{
  }
  .header{
    padding: 100px;
  }

  .text-header{
    padding-left: 100px;
    padding-right: 100px;
  }
}


@media(min-width:992px){

  #mainpage{
    margin-top: 80px;
  }

  .header{
    padding: 20px;
    text-align: center;
  }

  .text-header{
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 20px;
  }
}

@media(min-width:1240px){

  #mainpage{
    margin-top: 80px;
  }

  .header{
    padding: 30px 10px ;
    text-align: center;
  }

  .text-header{
    padding-left: 100px;
    padding-right: 100px;
  }
}



</style>
