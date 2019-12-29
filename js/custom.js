/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var spells = {
		"Flash of Light":[
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '1', min: 67, max: 77, mana: 35, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '2', min: 102, max: 117, mana: 50, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '3', min: 153, max: 171, mana: 70, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '4', min: 206, max: 231, mana: 90, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '5', min: 278, max: 310, mana: 115, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'42.85', rank: '6', min: 348, max: 389, mana: 140, cast: 1.5, pic: "fol.png", link: "https://classic.wowhead.com/spell=19750/flash-of-light"}
		],
		"Holy Light":[
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '1', min: 42, max: 51, mana: 35, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '2', min: 81, max: 96, mana: 60, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '3', min: 167, max: 196, mana: 110, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '4', min: 322, max: 368, mana: 190, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '5', min: 506, max: 569, mana: 275, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '6', min: 717, max: 799, mana: 365, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '7', min: 968, max: 1076, mana: 465, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'71', rank: '8', min: 1272, max: 1414, mana: 580, cast: 2.5, pic: "hl.png", link: "https://classic.wowhead.com/spell=635/holy-light"}
		],
		"Lesser Heal":[
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '71.42', rank: '1', min: 47, max: 58, mana: 30, cast: 1.5, pic: "lh.png", link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '71.42', rank: '2', min: 76, max: 91, mana: 45, cast: 2, pic: "lh.png", link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '71.42', rank: '3', min: 143, max: 165, mana: 75, cast: 1.5, pic: "lh.png", link: "https://classic.wowhead.com/spell=2050/lesser-heal"}
		]
	};

	var btn = $('.apply_button');
	var selectedClass = "";
	var bonusHealingValue;
	var healingLightRank = 0;
	var crit;
	var totalMana;
	var selected;
	var back = $('.back');
	initClassSelectNavigation();
	initBack();
	handleButtonClicks();
	initAccordions();

	btn.on('click', function()
	{
		clearAll();
		createTables(selectedClass);
	});

	// Class Select Navigation
	function initClassSelectNavigation()
	{
		var navItems = $('.nav_container ul li');
		var picsContainer = $('.class_pic_container');
		var infoContainer = $('.class_info_container');
		var classPics = $('.class_pic');
		var classInfos = $('.class_info');
		navItems.on('click', function(e)
		{
			var item = e.target;
			var itemIndex = navItems.index($(item));
			picsContainer.removeClass('loaded');
			infoContainer.removeClass('loaded');
			navItems.removeClass('active');
			classInfos.removeClass('active');
			$(item).addClass('active');

			classPics.removeClass('active');
			setTimeout(function()
			{
				$(classPics[itemIndex]).addClass('active');
				$(classInfos[itemIndex]).addClass('active');
			},100);	
		});
	}

	// Init Class
	function handleButtonClicks()
	{
		var buttons = $('.class_button');
		buttons.on('click', function(e)
		{
			var button = e.target;
			selectedClass = $(button).data('class');
			var selectedTitle = $(button).data('title');
			initHeader(selectedClass, selectedTitle);
			$('.class_selection').css({'pointer-events': 'none', 'opacity': '0', 'visibility': 'hidden'});
			$('.'+selectedClass).css({'max-height': 'none', 'visibility': 'visible', 'opacity': '1', "transition-delay": "500ms", "-webkit-transition-delay": "500ms"});
			clearAll();
			if(selectedClass === "paladin")
			{
				bonusHealingValue = $('#bonus_healing_paladin').val();
				healingLightRank = $('#healing_light').val();
				crit = $('#crit_paladin').val();
				totalMana = $('#mana_paladin').val();
				createTables(selectedClass);
			}
			if(selectedClass === "priest")
			{
				bonusHealingValue = $('#bonus_healing_priest').val();
			}
			if(selectedClass === "druid")
			{
				bonusHealingValue = $('#bonus_healing_druid').val();
			}
			if(selectedClass === "shaman")
			{
				bonusHealingValue = $('#bonus_healing_shaman').val();
			}
		});
	}

	function createTables(selectedClass)
	{
		clearAll();
		var tables = $('#tables');
		var x = 0;

		for(var spell_name in spells)
		{
			if(selectedClass === spells[spell_name][x].class.toLowerCase())
			{
				createTable(spell_name, x);
			}
			x++;
		}
	}

	function createTable(spell_name, x)
	{
		var tables = $('#tables');
		
		//Insert spell title
		var spellPic = spells[spell_name][0].pic;

		//Insert table structure
		var spell = spells[spell_name];
		var spellName = spell[x].id;
		var cls = spell[x].class;
		var link = spell[0].link;
		bonusHealingValue = $('#bonus_healing_paladin').val();
		healingLightRank = $('#healing_light').val();
		crit = $('#crit_paladin').val();
		totalMana = $('#mana_paladin').val();
		var table = 
		'<div class="table_container">'+
			'<div class="table_title d-flex flex-row align-items-center justify-content-start"><img src="images/'+ spellPic +'" alt=""><h2>'+ spell_name +'</h2>'+ '<div>Actual Healing Power: '+ Math.round((bonusHealingValue * spells[spell_name][0].coef) / 100) + ' (Spell Coefficient: ' + spells[spell_name][0].coef + ')</div><a href="'+ link +'">'+ spell_name +' - wowhead</a></div>'+
			'<div class="' + spellName + ' d-flex flex-column">'+
				'<div class="table_headers_row d-flex flex-row align-items-center justify-content-center">'+
					'<div class="rank">Rank</div>'+
					'<div class="healing_range">Heal Range</div>'+
					'<div class="mana_cost">Mana</div>'+
					'<div class="cast_time">Cast Time</div>'+
					'<div class="avg_heal_base">Avg. Heal</div>'+
					'<div class="avg_heal_bonus">Avg. Heal*</div>'+
					'<div class="heal_per_mana_base">Heal / Mana</div>'+
					'<div class="heal_per_mana_bonus">Heal / Mana*</div>'+
					'<div class="hps_base">HPS</div>'+
					'<div class="hps_bonus_crit">HPS*</div>'+
					'<div class="casts_base">Oom in</div>'+
					'<div class="casts_bonus">Oom in*</div>'+
					'<div class="time_oom">Oom in</div>'+
					'<div class="time_oom_crit">Oom in*</div>'+
				'</div>'+
			'</div>'+
		'</div>';

		tables.append(table);

		//Insert spell ranks info
		var c;
		for(c = 0; c < spell.length; c++)
		{
			//Vars
			var min = spell[c].min;
			var max = spell[c].max;
			if(selectedClass === "paladin")
			{
				min = Math.round(((min*(healingLightRank*4))/100)+min);
				max = Math.round(((max*(healingLightRank*4))/100)+max);
			}
			var avgHeal = (min+max) / 2;
			var mana = spell[c].mana;
			var coef = spell[c].coef;
			var castTime = spell[c].cast;
			var bonus = Math.round((bonusHealingValue * coef) / 100);

			var spellRankRow = 
			'<div class="spell_rank d-flex flex-row align-items-center justify-content-center">'+
				'<div class="rank">'+ spell[c].rank +'</div>'+
				'<div class="healing_range">'+ min + '-' + max +'</div>'+
				'<div class="mana_cost">'+ mana +'</div>'+
				'<div class="cast_time">'+ castTime +'</div>'+
				'<div class="avg_heal_base">'+ Math.round(avgHeal) +'</div>'+
				'<div class="avg_heal_bonus">'+ Math.round(avgHeal + bonus) +'</div>'+
				'<div class="heal_per_mana_base">'+ (avgHeal / mana).toFixed(1) +'</div>'+
				'<div class="heal_per_mana_bonus">'+ ((avgHeal + bonus) / mana).toFixed(1) +'</div>'+
				'<div class="hps_bonus">'+ Math.round((avgHeal + bonus) / castTime) +'</div>'+
				'<div class="hps_bonus_crit">'+ Math.round(((((100-crit)*(avgHeal + bonus))+(crit*((avgHeal + bonus)*1.5)))/100)/castTime) +'</div>'+
				'<div class="casts_base">'+ Math.floor(totalMana/mana) + ' casts' + '</div>'+
				'<div class="casts_bonus">'+ Math.floor((((totalMana/mana)*crit)/100)+(totalMana/mana)) +' casts' + '</div>'+
				'<div class="time_oom">'+ getTime(Math.floor(totalMana/mana)) +'</div>'+
				'<div class="time_oom_crit">'+ getTime(Math.floor((((totalMana/mana)*crit)/100)+(totalMana/mana))) +'</div>'+
			'</div>';

			$('.'+spellName).append(spellRankRow);
		}
	}

	function getTime(s)
	{
		var totalSeconds = s * 1.5;
		var minutes = Math.floor(totalSeconds / 60);
		var seconds = Math.floor(totalSeconds - (minutes * 60));

		// round seconds
		seconds = Math.round(seconds * 100) / 100;

		var result = (minutes < 10 ? "0" + minutes : minutes);
		result += ":" + (seconds  < 10 ? "0" + seconds : seconds);

		return result;
	}

	function clearAll()
	{
		var tables = $('#tables');
		tables.children().remove();
	}

	// Init Header
	function initHeader(selectedClass, selectedTitle)
	{
		$('.header_class').text(selectedTitle);
		$('.header').addClass('active');
	}

	// Back button
	function initBack()
	{
		back.on('click', function()
		{
			clearAll();
			closeClass();
		});
	}

	// Close class
	function closeClass()
	{
		$('.header').removeClass('active');
		$('.player_class').css({"max-height": "100vh", 'visibility': 'hidden', 'opacity': '0', "transition-delay": "0ms", "-webkit-transition-delay": "0ms"});
		setTimeout(function()
		{
			$('.class_selection').css({'pointer-events': 'auto', 'opacity': '1', 'visibility': 'visible'});
			$('.header_class').text("");
		},800);
	}

	/* 

	4. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

});