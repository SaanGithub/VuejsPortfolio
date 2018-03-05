<template>	
	<div id="sidebar" class="col-3">
		<div class="sidebar">
			<div><img class="logo" src="https://image.ibb.co/ccLuXF/logo.png"></div>
			<ul>
				<li><a class="link" href="#"><strong>Home</strong></a></li>
				<li><a class="link" href="#"><strong>Blog</strong></a></li>
				<li><a class="link" href="#"><strong>Contact</strong></a></li>
			</ul>
		</div>
	</div>
</template>



<style scoped>


a {
  position: relative;
  color: #000;
  text-decoration: none;
}

a:hover {
  color: #000;
}

a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}


ul, li{
	list-style: none;
	text-align: center;
	padding:0px;
	font-weight: 100;
/*	text-decoration: underline;
*/	font-size: 0.94em;
	position: relative;
	top: 25%;
/*	-webkit-transform: translateY(-25%);
	-ms-transform: translateY(-25%);
	transform: translateY(-25%);*/
}

.sidebar{
	background-color:#FEF5FB;
	height:100vh;
	position: fixed;
}
#sidebar{
	padding-left: 0px;
}

.logo{
	width: 50%;
	display: block;
	margin: 0 auto;
	padding:20px;
}
a{
	color:#212529;
	font-size: 30px;
}


@media(max-width:990px){
#sidebar {
	display:none;
}


}
</style>