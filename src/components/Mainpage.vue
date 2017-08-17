<template>
  <div id="mainpage"class="col-lg-9 col-md ">
    <div class="header"> 
      <h1> Glad you found me. </h1>
    </div>
    <div class="text-header">
      <p> I can help you with conceptualizing ideas, data analyses and visualization, designing in various adobe programs and developing web applications.
        <br></br>
      I am currently enrolled in the Master Business Informatics at Utrecht University. Within this programme I am following the applied Data Science profile.  </p>
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
h1{
  font-size: 50px;
}
p{
  font-size:25px ;
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
  padding:100px;
}
h1{
  font-size: 100px;
}
p{
  font-size:34px ;
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

h1{
  font-size: 78px;
}
p{
  font-size:28px;
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

h1{
  font-size: 80px;
}
p{
  font-size:30px;
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
