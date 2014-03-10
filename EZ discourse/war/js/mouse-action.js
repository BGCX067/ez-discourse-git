$(document).ready(function() {
	
	// create a wrapper around native canvas element
	var canvas = new fabric.Canvas('main_canvas', { width: $(window).width()-10, height: $(window).height()-110 });

	// create a rectangle object
	var rect = new fabric.Rect({ 
		left: 100, top: 100, fill: 'red', width: 40, height: 40
	});

	// "add" rectangle onto canvas
	canvas.add(rect);

		window.onload = function() {
			$('#layer1,#layer2').attr({ 	
				width : $(window).width() - 10,
				height : $(window).height() - 110
			});
			$('#layer1,#layer2').css();
//			drawImage();
//			drawCircle(circle);
			
			// 	add action on item
//			element = document.getElementById('layer2');
//			element.addEventListener('mousedown', startDragging, false);
//			element.addEventListener('mousemove', drag, false);
//			element.addEventListener('mouseup', stopDragging, false);
//			element.addEventListener('mouseout', stopDragging, false);
		}

		$(window).resize(function() {
			canvas.renderAll();
			$('#layer1,#layer2').attr({
				width : $(window).width() - 10,
				height : $(window).height() - 110
			});
			$('#main_canvas').attr({
				width : $(window).width() - 10,
				height : $(window).height() - 110,
			});
//			drawImage();
//			drawCircle(circle);
		});

		$("#submit-url").click(function() {
			var img = $("<img style='width: 400px' />").attr("src", $("#url").val()).load(function() {
				if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
					console.log('broken image!');
				} else {
					drawCircle(circle);
					$(".layer-image").append(img);
					console.log('load image!');
				}
			});
		});

		$("#addText").click(function() {
			console.log("add Text");
		});

		var Point = function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		}

		var Circle = function(point, radius) {
			this.point = point;
			this.radius = radius;
			this.isInside = function(pt) {
				return Math.pow(pt.x - point.x, 2) + Math.pow(pt.y - point.y, 2) < Math.pow(radius, 2);
			};
			return this;
		}

		function startDragging(e) {
			var p = new Point(mouseX(e), mouseY(e));
			if (circle.isInside(p)) {
				deltaCenter = new Point(p.x - circle.point.x, p.y - circle.point.y);
			}
		}

		function drag(e) {
			if (deltaCenter != null) {
				circle.point.x = (mouseX(e) - deltaCenter.x);
				circle.point.y = (mouseY(e) - deltaCenter.y);
//				drawImage();
				drawCircle(circle);
			}
		}

		function stopDragging(e) {
			deltaCenter = null;
		}

		function mouseX(e) {
			return e.clientX - element.offsetLeft;
		}

		function mouseY(e) {
			return e.clientY - element.offsetTop;
		}

		function drawCircle(circle) {
			var canvas = document.getElementById('layer2');
			var ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.arc(circle.point.x, circle.point.y, circle.radius, 0, Math.PI * 2, true);
			ctx.fill();
		}

		function drawImage() {
			var canvas = document.getElementById('layer1');
			var ctx = canvas.getContext('2d');

			img = new Image();
			img.src = $("#url").val();
			
			// set scale canvas
			var scale_w = img.width / $('#layer1').width();
			var scale_h = img.height / $('#layer1').height();
			
			var margin_h = ($('#layer1').height() - (img.height/scale_w))/2;
			var margin_w = ($('#layer1').width() - (img.width/scale_h))/2;

			img.onload = function() {
				if (scale_w >= scale_h) {
					ctx.drawImage(img, 0, 0, img.width, img.height, 0, margin_h, $(window).width() - 10, img.height / scale_w);
				} else {
					ctx.drawImage(img, 0, 0, img.width, img.height, margin_w, 0, img.width / scale_h, $(window).height() - 110);
				}
			}
		}

		var element;
		var circle = new Circle(new Point(30, 40), 25);
		var deltaCenter = null;

	});