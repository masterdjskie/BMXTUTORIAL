let process = {
	menu:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">BMX TUTORIAL</div>
              </div>
            </div>
		
			<ul>
				<li><a href='#' onClick={process.page1}> Wallride Flair 180</a></li>
				<li><a href='#' onClick={process.page2}> 540</a></li>
				<li><a href='#' onClick={process.page3}> Bar wallride</a></li>
				<li><a href='#' onClick={process.page4}> Grind 50-50</a></li>
				<li><a href='#' onClick={process.page5}> Hospital trick</a></li>
				<li><a href='#' onClick={process.page6}> Footjam Tailwhip</a></li>
				<li><a href='#' onClick={process.page7}> Manual Grind</a></li>
				<li><a href='#' onClick={process.page8}> Opposite Tailwhip</a></li>
				<li><a href='#' onClick={process.page9}> Whip to power manual</a></li>
				<li><a href='#' onClick={process.page10}> Flair 180</a></li>
				<li><a href='#' onClick={process.page11}> Flair Barspin</a></li>
				<li><a href='#' onClick={process.page12}> Nose Bang</a></li>
				<li><a href='#' onClick={process.page13}> Manual to Nose Manual</a></li>
				<li><a href='#' onClick={process.page14}> TIME MACHINE</a></li>
				<li><a href='#' onClick={process.page15}> THE SHOOT</a></li>

			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				
	<img src='img/3.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/><b>Wallride Flair 180</b> <br/>
	you need a full speed and the most important is the backward flip to do the 180°
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
			let content = <div>
				<img src='img/4.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
				 <br/><b>540</b><br/>
	To do the 540 you twist your head to your side and follow your body and the bike will follow to just hold it tight and the bike follows you
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>

			<img src='img/barwallride.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
		<br/><b>Bar to wallride</b>
	You need a full speed and need high hop then twist the bars then ride to the wall then drop	
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	page4:function(){
		let content = <div>
				
				<img src='img/1.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Grind 50-50</b><br/>
			You need to hop your bike to the tube and balance your body and jump agian for the roll out
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page5:function(){
		let content = <div>
				
				<img src='img/2.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Hospital Trick</b><br/>
			This trick is so insane i didint try this before.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	

	page6:function(){
		let content = <div>
				
				<img src='img/5.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Footjam Tailwhip</b><br/>
			A combination of a stand on the front wheel in Footjam and 360° rotation of the frame like in Tailwhip.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page7:function(){
		let content = <div>
				
				<img src='img/7.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Manual Grind</b><br/>
			Before doing the grind itself, put your peg and rear wheel on the ledge, then lift the rear end and try to balance. The grind will be extremely short, at least at first. A longer grind is a sign of true mastery. Don't forget to wax the ledge
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page8:function(){
		let content = <div>
				
				<img src='img/6.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Opposite Tailwhip</b><br/>
			To do an opposite tailwhip you shoud spin the frame in the opposite direction, without changing your leg stance. The longer you wait to tackle this move after learning the tailwhip, the harder it will be. All of the movements described in this lesson are performed in opposite. Thus, if your regular whip goes left, you should be ...
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page9:function(){
		let content = <div>
				
				<img src='img/8.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Whip to Power manual</b><br/>
			You need a 100% balance in this situation you shoud spin the frame in the direction without changing you leg stance then balance your body side to side.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page10:function(){
		let content = <div>
				
				<img src='img/13.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Flair 180</b><br/>
			A combination of a Backflip with a 180° turn to land facing back down the ramp.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page11:function(){
		let content = <div>
				
				<img src='img/10.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Flair Barspin</b><br/>
			spinning the bars around with your hands: (often called a "bar") Barrel-roll: ... Double Peg grind: (Grind/BMX) Grinding using the front on back peg on one side of the scooter. ... Flair: (Flip) Backflip with a 180-degree spin doing as an air trick (landing back into the quarter) First Landed by Terry Price in 2002.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page12:function(){
		let content = <div>
				
				<img src='img/11.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Nose Bang</b><br/>
			The nose manual is a staple trick for all experienced street skaters. In the nose manual, as you might expect, you do a wheelie on the front wheels instead of the back. It helps a lot to have your ordinary manuals down so that you understand the kind of body motion it takes to roll along on two wheels.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page13:function(){
		let content = <div>
				
				<img src='img/12.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Grind 50-50</b><br/>
			You can practise the manual whilst you’re riding anywhere. It’s all about finding your balance point on your back wheel. ... Once you feel comfortable pulling back into that position, you need to start balancing the manual for a distance,The nose manual is a staple trick for all experienced street skaters. In the nose manual, as you might expect.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page14:function(){
		let content = <div>
				
				<img src='img/90.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>TIME MACHINE</b><br/>
			This one is a crowd pleaser. It is one of the newer tricks and takes quite a while to learn and dial in. It is not recommended that you try this on your first day of riding, but once it is learned you will definitely be on your way with flatland riding. There really is no single trick that you have to learn before attempting time machines you need a 100% balance and love of what are you learning. ...
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},



	page15:function(){
		let content = <div>
				
				<img src='img/9.gif' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>THE SHOOT</b><br/>
			THIS TRICK IS SO AMAZING YOU JUST NEED A TRIAL AND ERROR!!!
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div>
					

					<div align='center'>
						<img src='img/vid.png' width='100%'/>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	
}
process.loading();
setTimeout(function(){
	process.menu();
},1000);