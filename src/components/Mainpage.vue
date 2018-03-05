<template>
  <div  id="mainpage" v-on:mouseover="someMethod" class="col-lg-9 col-md ">
    <div class="header"> 
      <h1> I'm glad you found me :) </h1>
    </div>
    <br></br>
    <div class="text-header">
      <h4> Things of interest </h4>
      <p> Conceptualizing ideas, data analyses and visualization, designing in various adobe programs and developing web applications.
      </p>
      <br></br>
      <h4> Projects I am envolved in </h4>
      <p>
      Master Business Informatics at <a href="https://dcspine.nl"> Utrecht University</a>. Within this programme I am following the Applied Data Science profile. I am currently working on my thesis.</p>
      <p style="white-space: pre-line;">Front end engineering at <a href="https://dcspine.nl">DCSpine</a>. Creating web applications with Vue.js and data visualizations in D3.js</p>
      <p> Webdevelopment at <a href="https://toekies.nl"> Toekies </a>. I helped setup the webshop and lead the crowdfunding campagne. </p> 
    </div>
  </div>
</div>
</template>

<script>

export default{
methods:{
  someMethod(event) {
        // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
        console.log(event.clientX); // x coordinate
        console.log(event.clientY); // y coordinate

        // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
        console.log(event.pageX); 
        console.log(event.pagey); 

        // screenX/Y gives the coordinates relative to the screen in device pixels.
        console.log(event.screenX);
        console.log(event.screenY);
    }
  }
}

</script>

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
