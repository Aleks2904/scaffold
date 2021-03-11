function pageslider(item, callback) {

	var $this			= item,
		$body			= document.body,
		$page			= $this.children,
		winH			= document.documentElement.clientHeight || window.innerHeight,
		location		= window.location,
		hash			= location.hash,
		nowWheel,
		nowHandle,
		lastCallWhile	= 0,
		lastCallHandle	= 0,
		pageActive		= 0,
		$pageActive		= $page[pageActive],
		$noActivePage,
		pageCount		= $page.length - 1,
		pageLength		= $this.children.length,
		pageCenter		= Math.round(pageLength/2),
		delta,
		clientTopMove,
		childrenBtPos,
		direction,
		deltaPrev		= 0,
		clientTopStart,
		touchStartPoint,
		touchMovePoint,
		touchNowPoint,
		yAbs,

		animationTime	= .7,
		delayTime		= animationTime * 1000,
		
		loop			= false,
		navKeyloop		= true,

		$toTop			= document.getElementById('pageslider__to-top'),
		$navLi			= document.getElementById('pageslider__nav').children, // id of main nav > li
		$textBlock		= document.getElementById('pageslider__for-text'),

		$prev			= document.getElementById('b-navkey__prev'),
		$next			= document.getElementById('b-navkey__next'),

		textArray		= ['You can...', '... add some text ...', '... which depends of ...', '... slide ...', 'Oliw Page Slider'],
		hrefArray		= 'layout';


		if (hrefArray == 'layout') { // add hashes from nav
			hrefArray = [];
	
			var thisHash;
	
			for (var i = 0; i < $navLi.length; i++) {
				thisHash = $navLi[i].querySelector('a').getAttribute('href');
	
				hrefArray.push(thisHash);
			}
		}
	
		if (hrefArray) { // to active page
			// read active block from nav
	
			var thisHash,
				regexp = /^#./;
	
			for (var i = 0; i < hrefArray.length; i++) {
	
				if( !(regexp.test(hrefArray[i])) ) {
					thisHash = '#' + hrefArray[i];
				} else {
					thisHash = hrefArray[i];
				}
				
				if (hash == thisHash) {
					pageActive = i;
					$pageActive = $page[pageActive]
					break;
				} else if (i == hrefArray.length - 1) {
					location.hash = hrefArray[0];
				}
			}
		}
	
		$pageActive.classList.add('active');
	
		sliderActive(pageActive);
	
		// Touch
		document.addEventListener('touchstart', function(event) {
			touchStartPoint = event.changedTouches[0].clientY;
			clientTopStart = Math.round($pageActive.children[0].getBoundingClientRect().top);
	
		}, false);
	
		document.addEventListener('touchmove', function(event) {
			touchMovePoint = event.changedTouches[0].clientY;
		}, false);
	
		document.addEventListener('touchend', function(event) {
			touchNowPoint = event.changedTouches[0];
	
			yAbs = Math.abs(touchStartPoint - touchNowPoint.clientY);
	
			$pageActive.style.transform = '';

			const header = document.querySelector('#js-header'),
				  footer = document.querySelector('#js-footer'),
				  btnServices = document.querySelectorAll('.services__btn-services'),
				  page = document.querySelectorAll('.page');

			let result;

			btnServices.forEach(function(e){
				if(event.target == e || event.target.closest('.services__btn-services')){
					const trg = event.target;
					let attr1,
						attr2;

					attr1 = trg.getAttribute("aria-expanded");

					setTimeout(function(){
						attr2 = trg.getAttribute("aria-expanded");

						if(attr1 == attr2){
							result = true;
						}else{
							result = false;
						}
					}, 1)
				}
			})

			setTimeout(function(){
				if(result == false){
					result = true;
					return false;
				}
	
				if(event.target == header || event.target.closest('#js-header') || event.target == footer || event.target.closest('#js-footer')){
					return false;
				}
	
				page.forEach(function(event){
					if(event.classList.contains('active')){
						const containPageAll = document.querySelectorAll('.contain-page')
						if(event.querySelector('.contain-page') == null){
							if (touchNowPoint.clientY < touchStartPoint) {

								containPageAll.forEach(function(e){
									e.scrollTo(0, 0);
								})

								delta = 1;
								scrollSlides(delta);
							}
							else {
								delta = -1;
								scrollSlides(delta);
							}
						}else if(event.querySelector('.contain-page').scrollHeight == event.querySelector('.contain-page').offsetHeight){
							if (touchNowPoint.clientY < touchStartPoint) {
								containPageAll.forEach(function(e){
									e.scrollTo(0, 0);
								})

								delta = 1;
								scrollSlides(delta);
							}
							else {
								delta = -1;
								scrollSlides(delta);
							}
						}else{
							const scroll = event.querySelector('.contain-page').scrollTop,
								  scrollTop = 0,
								  scrollBottom = event.querySelector('.contain-page').scrollHeight,
								  height = event.querySelector('.contain-page').clientHeight;
	
							let result = scroll + height;
							result = result.toFixed(0);
	
							if(scrollBottom == result){
								containPageAll.forEach(function(e){
									e.scrollTo(0, 0);
								})

								delta = 1;
								scrollSlides(delta);
							}
	
							if(scroll == scrollTop){
								delta = -1;
								scrollSlides(delta);
							}
						 }
					 }
				 })	
			} ,2)
		}, false);
	
		//Keybord
		document.addEventListener('keydown', function(event) {
	
			var keyCode = event.keyCode;
	
			keyNav(keyCode);
	
		}, false);
	
		window.addEventListener('scrollDown', function(event) {
			if(checkDown()){
				let page = document.querySelectorAll('.page');

				page.forEach(function(event){
					if(event.classList.contains('active')){
						if(event.querySelector('.contain-page') == null){
							scrollSlides(1);
						}else if(event.querySelector('.contain-page').scrollHeight == event.querySelector('.contain-page').offsetHeight){
							scrollSlides(1);
						}else{
							const scroll = event.querySelector('.contain-page').scrollTop,
								scrollBottom = event.querySelector('.contain-page').scrollHeight,
								height = event.querySelector('.contain-page').clientHeight;

							let result = scroll + height;
							result = result.toFixed(0);

							if(scrollBottom == result){
								scrollSlides(1);
							}
						}
					}
				})
			}
		});
	
		window.addEventListener('scrollUp', function(event) {
			if(checkUp()){
				let page = document.querySelectorAll('.page');

				page.forEach(function(event){
					if(event.classList.contains('active')){
						let containPage = event.querySelector('.contain-page');
						const containPageAll = document.querySelectorAll('.contain-page');

						if(containPage == null){
							scrollSlides(-1);
						}else if(containPage.scrollHeight == containPage.offsetHeight){
							containPageAll.forEach(function(e){
								e.scrollTo(0, 0);
							})

							scrollSlides(-1);
						}else{
							const scroll = containPage.scrollTop,
								scrollTop = 0,
								height = containPage.clientHeight;

							let result = scroll + height;
							result = result.toFixed(0);

							if(scroll == scrollTop){
								containPageAll.forEach(function(e){
									e.scrollTo(0, 0);
								})

								scrollSlides(-1);
							}
						}
					}
				})
			}
		});
	
		window.addEventListener('resize', function(event) {
			winH = window.innerHeight || document.documentElement.clientHeight
		});
	
		if ( $prev ) { // click on "prev" button
	
			$prev.addEventListener('click', function(event) {
				fnPrevNav();
			}, false);
	
			$prev.addEventListener('touchend', function(event) {
				fnPrevNav();
			}, false);
		}
	
		if ( $next ) { // click on "next" button
	
			$next.addEventListener('click', function(event) {
				fnNextNav();
			}, false);
	
			$next.addEventListener('touchend', function(event) {
				fnNextNav();
			}, false);
		}
	
		if ( $toTop ) { // click on "to top" button
	
			$toTop.addEventListener('click', function(event) {
				toTop();
			}, false);
	
			$toTop.addEventListener('touchend', function(event) {
				toTop();
			}, false);
		}
	
		if ($navLi !== null) { // click on navigation item
	
			for (var i = 0; i < $navLi.length; i++) {
	
				$navLi[i].num = i;
	
				$navLi[i].addEventListener('click', function(event) {
					event.preventDefault();
					clickNav(this);
				}, false);
	
				$navLi[i].addEventListener('touchend', function(event) {
					event.preventDefault();
					clickNav(this);
				}, false);
	
			};
		}
	
		function scrollSlides(direction) {
			var $children = $pageActive.children[0];

			const header = document.querySelector('#js-header'),
				  footer = document.querySelector('#js-footer'),
				  style = window.getComputedStyle(header, null),
				  style2 = window.getComputedStyle(footer, null);

			if(style.opacity == "1" || style2.opacity == "1"){
				return false
			}else{
				if ($children.clientHeight > winH) {
					clientTopMove = Math.round( $children.getBoundingClientRect().top ),
					childrenBtPos = -( $children.clientHeight - winH);
		
					if ( clientTopMove <= childrenBtPos && direction > 0) {
						handle(direction, delayTime);
					}
					else if ( clientTopMove >= 0 && direction < 0) {
						handle(direction, delayTime);
					}
					
				}
				else {
					handle(direction, delayTime);
				}
			}
		}
	
		function toTop() {
			if ( pageActive != 0 ) {
	
				if (pageActive < pageCenter) {
					delta = -1;
	
					noActivePage = pageActive;
					
					handle(delta, animationTime, true, 0, noActivePage);
	
				} else {
					delta = 1;
	
					noActivePage = pageActive;
	
					handle(delta, animationTime, true, 0, noActivePage);
				}
			}
		}
	
		function sliderActive(pageActive) {
	
			$body.setAttribute( 'data-pageslider-progress', Math.round(100 / (pageLength - 1) * pageActive) );
			$body.setAttribute( 'data-pageslider-number', pageActive + 1 );
	
			if ($navLi !== null) {
				$navLi[pageActive].classList.add('active');
			}
	
			setTimeout(function() { //weaknesses
	
				if (textArray && $textBlock) {
					$textBlock.innerHTML = textArray[pageActive];
				}
	
				if (hrefArray) {
					location.hash = hrefArray[pageActive];
				}
			}, delayTime - 700);
		}
	
		function fnPrevNav() {
	
			if ( pageActive == 0 ) {
	
				if (navKeyloop) {
	
					delta = 1;
	
					handle(delta, animationTime, true, pageCount, pageActive);
				}
	
			} else {
	
				delta = -1;
				
				handle(delta, delayTime);
			}
		}
	
		function fnNextNav() {
	
			if ( pageActive == pageCount ) {
	
				if (navKeyloop) {
	
					delta = -1;
	
					handle(delta, animationTime, true, 0, pageActive);
				}
	
			} else {
	
				delta = 1;
				
				handle(delta, delayTime);
			}
	
		}
	
		function clickNav(item) {
	
			var i = item.num;
	
			if (pageActive > i) {
				delta = -1;
	
				noActivePage = pageActive;
				
				handle(delta, animationTime, true, i, noActivePage);
	
			} else if (pageActive < i) {
				delta = 1;
	
				noActivePage = pageActive;
	
				handle(delta, animationTime, true, i, noActivePage);
			}
		}
	
		function keyNav(keyCode) {
	
			if ( keyCode == 87 || keyCode == 38 ) {
				// 87 - is arrow top
				// 38 - is arrow bottom
				delta = -1;

				console.log("up");
	
				noActivePage = pageActive;
	
				scrollSlides(delta);
	
			} else if ( keyCode == 83 || keyCode == 40 ) {
				// 83 - is letter 'W'
				// 38 - is letter 'S'
				delta = 1;
	
				noActivePage = pageActive;


				let page = document.querySelectorAll('.page');

				page.forEach(function(event){
					if(event.classList.contains('active')){
						if(event.querySelector('.contain-page') == null){
							scrollSlides(delta);
						}else if(event.querySelector('.contain-page').scrollHeight == event.querySelector('.contain-page').offsetHeight){
							scrollSlides(delta);
						}else{
							const scroll = event.querySelector('.contain-page').scrollTop,
								scrollBottom = event.querySelector('.contain-page').scrollHeight,
								height = event.querySelector('.contain-page').clientHeight;

							let result = scroll + height;
							result = result.toFixed(0);

							if(scrollBottom == result){
								scrollSlides(delta);
							}
						}
					}
				})
			}
		}
	
		// delete all class active
		function classClean() {
	
			for (var i = pageCount; i >= 0; i--) {
				$page[i].classList.remove('active');
	
				if ($navLi !== null) {
					$navLi[i].classList.remove('active');
				}
			};
		}
	
		function handle(delta, delay, nav, i, noActivePage) {
	
			nowHandle = Date.now();
	
			if (nowHandle - lastCallHandle > delay) {
	
				if (callback) callback();
	
				$body.classList.add('onanimation');
	
				if ( delta > 0 ) {
	
					if (nav) {
					
						classClean();
	
						pageActive = i;
	
						$pageActive = $page[pageActive],
						$noActivePage = $page[noActivePage];
	
						// for ie
						$pageActive.classList.add('pt-page-moveFromBottom');
						$pageActive.classList.add('active');
	
						$noActivePage.classList.add('active');
						$noActivePage.classList.add('pt-page-ontop');
						$noActivePage.classList.add('pt-page-moveToTop');
	
						sliderActive(pageActive);
	
						setTimeout(func, delayTime);
	
						lastCallHandle = nowHandle;
					
					} else {
	
						if ( !( pageActive == pageCount ) ) {
					
							classClean();
	
							pageActive++;
	
							$pageActive = $page[pageActive],
							$noActivePage = $page[pageActive].previousElementSibling;
	
							// for ie
							$pageActive.classList.add('active');
							$pageActive.classList.add('pt-page-moveFromBottom');
	
							$noActivePage.classList.add('active');
							$noActivePage.classList.add('pt-page-ontop');
							$noActivePage.classList.add('pt-page-moveToTop');
	
							sliderActive(pageActive);
	
							setTimeout(func, delayTime);
	
							lastCallHandle = nowHandle;
	
						} else if ( pageActive == pageCount && loop ) {
					
							classClean();
	
							pageActive = 0;
	
							$pageActive = $page[pageActive],
							$noActivePage = $page[pageCount];
	
							// for ie
							$pageActive.classList.add('active');
							$pageActive.classList.add('pt-page-moveFromBottom');
	
							$noActivePage.classList.add('active');
							$noActivePage.classList.add('pt-page-ontop');
							$noActivePage.classList.add('pt-page-moveToTop');
	
							sliderActive(pageActive);
	
							setTimeout(func, delayTime);
	
							lastCallHandle = nowHandle;
						}
					}
				} else if ( delta < 0 ) {
	
					if (nav) {
					
						classClean();
	
						pageActive = i;
	
						$pageActive = $page[pageActive],
						$noActivePage = $page[noActivePage];
	
						// for ie
						$pageActive.classList.add('active');
						$pageActive.classList.add('pt-page-ontop');
						$pageActive.classList.add('pt-page-moveFromTop');
	
						$noActivePage.classList.add('active');
						$noActivePage.classList.add('pt-page-moveToBottom');
	
						sliderActive(pageActive);
	
						setTimeout(func, delayTime);
	
						lastCallHandle = nowHandle;
	
					} else {
	
						if ( !(pageActive == 0) ) {
					
							classClean();
	
							pageActive--;
	
							$pageActive = $page[pageActive],
							$noActivePage = $page[pageActive].nextElementSibling;
	
							// for ie
							$pageActive.classList.add('active');
							$pageActive.classList.add('pt-page-ontop');
							$pageActive.classList.add('pt-page-moveFromTop');
	
							$noActivePage.classList.add('active');
							$noActivePage.classList.add('pt-page-moveToBottom');
	
							sliderActive(pageActive);
	
							setTimeout(func, delayTime);
	
							lastCallHandle = nowHandle;
	
						} else if ( pageActive == 0 && loop ) {
					
							classClean();
	
							$pageActive = $page[pageCount],
							$noActivePage = $page[pageActive];
	
							pageActive = pageCount; // it should be here!
	
							// for ie
							$pageActive.classList.add('active');
							$pageActive.classList.add('pt-page-ontop');
							$pageActive.classList.add('pt-page-moveFromTop');
	
							$noActivePage.classList.add('active');
							$noActivePage.classList.add('pt-page-moveToBottom');
	
							sliderActive(pageActive);
	
							setTimeout(func, delayTime);
	
							lastCallHandle = nowHandle;
						}
					}
				}
			}
		}
	
		function func() { // add class for animation and
		//add active class for new slider
	
			for (var i = pageCount; i >= 0; i--) {
				$body.classList.remove('onanimation');
	
				var pageClassList = $page[i].classList;
	
				// for ie
				pageClassList.remove('active');
				pageClassList.remove('pt-page-ontop');
				pageClassList.remove('pt-page-moveFromBottom');
				pageClassList.remove('pt-page-moveToTop');
				pageClassList.remove('pt-page-moveToBottom');
				pageClassList.remove('pt-page-moveFromTop');
			};
	
			$pageActive.classList.add('active');
		}

		function checkUp(){
			const page = document.querySelectorAll('.page'),
				  services = document.querySelector('.services');

			let result = true;

			page.forEach(function(event){
				if(event.classList.contains('active')){
					if(services.classList.contains('active')){
						const container = event.querySelector('#js-services-list');
						if(check(container)){
							result = true;
						}else{
							result = false;
						}
					}
				}
			})

			function check(block){
				const scrollTop = block.scrollTop;

				if(scrollTop == 0){
					return true;
				}
			}

			return result;
		}

		function checkDown(){
			const page = document.querySelectorAll('.page'),
				  services = document.querySelector('.services');

			let result = true;

			page.forEach(function(event){
				if(event.classList.contains('active')){
					if(services.classList.contains('active')){
						const container = event.querySelector('#js-services-list');
						if(check(container)){
							result = true;
						}else{
							result = false;
						}
					}
				}
			})

			function check(block){
				const scrollHeight = block.scrollHeight,
					  scrollTop = block.scrollTop,
					  offsetHeight = block.offsetHeight;

				if(scrollHeight - scrollTop == offsetHeight){
					return true;
				}
			}

			return result;
		}
	};