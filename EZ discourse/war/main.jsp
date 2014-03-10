<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no" />
<script src="/js/jquery-2.1.0.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="js/mouse-action.js"></script>
<script src="js/fabric.js"></script>
<link rel="stylesheet" href="/css/main.css" />
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<title>EZ Discourse</title>
<script>
	
</script>

</head>
<body>
	<!-- Navbar top position -->
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header pull-left">
				<a class="navbar-brand" href="#">Ez Discourse</a>
			</div>
		</div>
	</nav>

	<!--  Main container -->
<!-- 		<div class="center-view"> -->
<!-- 	<div style="position: relative;"> -->
		<canvas id="main_canvas"></canvas>
		<!-- 		<canvas id="layer1" style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas> -->
		<!-- 		<canvas id="layer2" style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas> -->
		<!-- 		<div id="image-layer" style="z-index: 0"></div> -->
<!-- 	</div> -->
	<!-- 		<div class="container"> -->
	<!-- 			<div class="main-frame"> -->
	<!-- 			<div class="image-frame"> -->
	<!-- 				<div class="preview-image"> -->
	<!-- 				<canvas id="canvas" width="300" height="300"></canvas> -->
	<!-- 				</div> -->
	<!-- 			</div> -->
	<!-- 			</div> -->
	<!-- 		</div> -->
<!-- 		</div> -->


	<!-- 	Navbar bottom position -->
	<nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">Insert <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#" id="addText">+ Text</a></li>
							<li class="divider"></li>
							<li><a href="#" id="addImg">+ Image</a></li>
						</ul></li>
				</ul>
				<div class="navbar-form navbar-right">
					<div class="form-group">
						<input type="email" id="url" class="form-control" id="url"
							placeholder="Enter Url"
							value="http://www.picdee.com/images/2014/02/27/boxE0f6m.png" />
					</div>
					<button type="submit" id="submit-url" class="btn btn-default">Load</button>
				</div>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>

</body>
</html>