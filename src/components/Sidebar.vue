<template>	
	<div id="sidebar" class="col-3">
		<div class="sidebar">
			<div><img class="logo" src="https://image.ibb.co/ccLuXF/logo.png"></div>
			<ul>
				<li><a class="link" href="#"><strong>Home</strong></a></li>
				<li><a class="link" href="#"><strong>Services</strong></a></li>
				<li><a class="link" href="#"><strong>Contact</strong></a></li>
			</ul>
		</div>
	</div>
</template>



<style scoped>

ul, li{
	list-style: none;
	text-align: center;
	padding:0px;
	font-weight: 100;
	text-decoration: underline;
	font-size: 0.94em;
	position: relative;
	top: 25%;
	-webkit-transform: translateY(-25%);
	-ms-transform: translateY(-25%);
	transform: translateY(-25%);
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
	font-size: 40px;
}


@media(max-width:990px){
#sidebar {
	display:none;
}


}
</style>