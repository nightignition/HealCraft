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

	//Stop transitions on page load
	$(window).on('load', function()
	{
  		$("body").removeClass("preload");
	});

	var spells = {
		"Flash of Light":[
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '1', min: 67, max: 77, mana: 35, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 20, link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '2', min: 102, max: 117, mana: 50, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 26, link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '3', min: 153, max: 171, mana: 70, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 34, link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '4', min: 206, max: 231, mana: 90, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 42, link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '5', min: 278, max: 310, mana: 115, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 50, link: "https://classic.wowhead.com/spell=19750/flash-of-light"},
			{class: 'Paladin', name: 'Flash of Light', id:'fol', coef:'0.4285', rank: '6', min: 348, max: 389, mana: 140, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 58, link: "https://classic.wowhead.com/spell=19750/flash-of-light"}
		],
		"Holy Light":[
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '1', min: 42, max: 51, mana: 35, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 1, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '2', min: 81, max: 96, mana: 60, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 6, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '3', min: 167, max: 196, mana: 110, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 14, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '4', min: 322, max: 368, mana: 190, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 22, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '5', min: 506, max: 569, mana: 275, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 30, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '6', min: 717, max: 799, mana: 365, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 38, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '7', min: 968, max: 1076, mana: 465, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 46, link: "https://classic.wowhead.com/spell=635/holy-light"},
			{class: 'Paladin', name: 'Holy Light', id:'hl', coef:'0.71', rank: '8', min: 1272, max: 1414, mana: 580, cast_value: 2.5, cast_title: 2.5, pic: "hl.png", learned: 54, link: "https://classic.wowhead.com/spell=635/holy-light"}
		],
		"Lesser Heal":[
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '0.7142', rank: '1', min: 47, max: 58, mana: 30, cast_value: 1.5, cast_title: 1.5, pic: "lh.png", learned: 1, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '0.7142', rank: '2', min: 76, max: 91, mana: 45, cast_value: 2, cast_title: 2, pic: "lh.png", learned: 4, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Lesser Heal', id: 'lh', coef: '0.7142', rank: '3', min: 143, max: 165, mana: 75, cast_value: 2.5, cast_title: 2.5, pic: "lh.png", learned: 10, link: "https://classic.wowhead.com/spell=2050/lesser-heal"}
		],
		"Flash Heal":[
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '1', min: 202, max: 247, mana: 125, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 20, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '2', min: 269, max: 325, mana: 155, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 26, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '3', min: 339, max: 406, mana: 185, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 32, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '4', min: 414, max: 492, mana: 215, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 38, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '5', min: 534, max: 633, mana: 265, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 44, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '6', min: 662, max: 783, mana: 315, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 50, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Flash Heal', id: 'fh', coef: '0.4285', rank: '7', min: 828, max: 975, mana: 380, cast_value: 1.5, cast_title: 1.5, pic: "fol.png", learned: 56, link: "https://classic.wowhead.com/spell=2050/lesser-heal"}
		],
		"Heal":[
			{class: 'Priest', name: 'Heal', id: 'h', coef: '0.8571', rank: '1', min: 307, max: 353, mana: 155, cast_value: 3, cast_title: 3, pic: "h.png", learned: 16, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Heal', id: 'h', coef: '0.8571', rank: '2', min: 445, max: 507, mana: 205, cast_value: 3, cast_title: 3, pic: "h.png", learned: 22, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Heal', id: 'h', coef: '0.8571', rank: '3', min: 586, max: 662, mana: 255, cast_value: 3, cast_title: 3, pic: "h.png", learned: 28, link: "https://classic.wowhead.com/spell=2050/lesser-heal"},
			{class: 'Priest', name: 'Heal', id: 'h', coef: '0.8571', rank: '4', min: 734, max: 827, mana: 305, cast_value: 3, cast_title: 3, pic: "h.png", learned: 34, link: "https://classic.wowhead.com/spell=2050/lesser-heal"}
		],
		"Greater Heal":[
	        {class: 'Priest', name: 'Greater Heal', id: 'gh', coef: '0.8571', rank: '1', min: 924, max: 1039, mana: 370, cast_value: 3, cast_title: 3, pic: "gh.png", learned: 40, link: "https://classic.wowhead.com/spell=2060/greater-heal"},
	        {class: 'Priest', name: 'Greater Heal', id: 'gh', coef: '0.8571', rank: '2', min: 1178, max: 1318, mana: 455, cast_value: 3, cast_title: 3, pic: "gh.png", learned: 46, link: "https://classic.wowhead.com/spell=2060/greater-heal"},
	        {class: 'Priest', name: 'Greater Heal', id: 'gh', coef: '0.8571', rank: '3', min: 1470, max: 1642, mana: 545, cast_value: 3, cast_title: 3, pic: "gh.png", learned: 52, link: "https://classic.wowhead.com/spell=2060/greater-heal"},
	        {class: 'Priest', name: 'Greater Heal', id: 'gh', coef: '0.8571', rank: '4', min: 1813, max: 2021, mana: 655, cast_value: 3, cast_title: 3, pic: "gh.png", learned: 58, link: "https://classic.wowhead.com/spell=2060/greater-heal"}
	        // {class: 'Priest', name: 'Greater Heal', id: 'gh', coef: '0.8571', rank: '5', min: 1966, max: 2194, mana: 710, cast_value: 3, cast_title: 3, pic: "gh.png", learned: 60, link: "https://classic.wowhead.com/spell=2060/greater-heal"}
	    ],
		"Renew":[
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '1', min: 45, max: 45, mana: 30, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 8, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '2', min: 100, max: 100, mana: 65, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 14, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '3', min: 175, max: 175, mana: 105, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 20, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '4', min: 245, max: 245, mana: 140, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 26, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '5', min: 315, max: 315, mana: 170, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 32, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '6', min: 400, max: 400, mana: 205, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 38, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '7', min: 510, max: 510, mana: 250, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 44, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '8', min: 650, max: 650, mana: 305, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 50, link: "https://classic.wowhead.com/spell=139/renew"},
			{class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '9', min: 810, max: 810, mana: 365, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 56, link: "https://classic.wowhead.com/spell=139/renew"}
			// {class: 'Priest', name: 'Renew', id: 'rn', coef: '1', rank: '10', min: 970, max: 970, mana: 410, cast_value: 15, cast_title: 'Instant', pic: "rn.png", learned: 60, link: "https://classic.wowhead.com/spell=139/renew"}
		],
	    "Power Word: Shield":[
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '1', min: 48, max: 48, mana: 45, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 6, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '2', min: 94, max: 94, mana: 80, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 12, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '3', min: 166, max: 166, mana: 130, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 18, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '4', min: 244, max: 244, mana: 175, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 24, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '5', min: 313, max: 313, mana: 210, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 30, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '6', min: 394, max: 394, mana: 250, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 36, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '7', min: 499, max: 499, mana: 300, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 42, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '8', min: 622, max: 622, mana: 355, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 48, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '9', min: 783, max: 783, mana: 425, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 54, link: "https://classic.wowhead.com/spell=17/power-word-shield"},
	        {class: 'Priest', name: 'Power Word: Shield', id: 'pws', coef: '0.1', rank: '10', min: 942, max: 942, mana: 500, cast_value: 15, cast_title: 'Instant', pic: "pws.png", learned: 60, link: "https://classic.wowhead.com/spell=17/power-word-shield"}
	    ],
	    "Prayer of Healing":[
	        {class: 'Priest', name: 'Prayer of Healing', id: 'poh', coef: '0.2857', rank: '1', min: 312, max: 333, mana: 410, cast_value: 3, cast_title: 3, pic: "poh.png", learned: 30, link: "https://classic.wowhead.com/spell=596/prayer-of-healing"},
	        {class: 'Priest', name: 'Prayer of Healing', id: 'poh', coef: '0.2857', rank: '2', min: 458, max: 487, mana: 560, cast_value: 3, cast_title: 3, pic: "poh.png", learned: 40, link: "https://classic.wowhead.com/spell=596/prayer-of-healing"},
	        {class: 'Priest', name: 'Prayer of Healing', id: 'poh', coef: '0.2857', rank: '3', min: 675, max: 713, mana: 770, cast_value: 3, cast_title: 3, pic: "poh.png", learned: 50, link: "https://classic.wowhead.com/spell=596/prayer-of-healing"},
	        {class: 'Priest', name: 'Prayer of Healing', id: 'poh', coef: '0.2857', rank: '4', min: 939, max: 991, mana: 1030, cast_value: 3, cast_title: 3, pic: "poh.png", learned: 60, link: "https://classic.wowhead.com/spell=596/prayer-of-healing"}
	        // {class: 'Priest', name: 'Prayer of Healing', id: 'poh', coef: '0.2857', rank: '5', min: 1041, max: 1099, mana: 1070, cast_value: 3, cast_title: 3, pic: "poh.png", learned: 60, link: "https://classic.wowhead.com/spell=596/prayer-of-healing"}
	    ]
	};

	var classButton = $('.class_button');
	var selectedClass;
	var bonusHealingValue = 500;
	var healingLightRank = 3;
	var crit = 15;
	var totalMana = 5000;
	var tables = $('#tables');
	var classSettings = $('#class_container');
	var btn;
	var back = $('.back');

	initHome();
	initClassSelection();
	initBack();

	//Handle home page navigation
	function initHome()
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

	//Handle class selection
	function initClassSelection()
	{
		var buttons = $('.class_button');
		buttons.on('click', function(e)
		{
			var button = e.target;
			selectedClass = $(e.target).data('class');
			var selectedTitle = $(button).data('title');
			$('.class_selection').css({'pointer-events': 'none', 'opacity': '0', 'visibility': 'hidden'});
			$('.player_class').css({'max-height': 'none', 'visibility': 'visible', 'opacity': '1', "transition-delay": "500ms", "-webkit-transition-delay": "500ms"});
			$('.header_class').text(selectedTitle);
			$('.header').addClass('active');
			var classStructure = getClassStructure();
			$('.class_container').append(classStructure);
			initAccordions();
			initSettingsButton();
			initClassTables();
			btn = $('.apply_button');
			btn.on('click', function()
			{
				clearTables();
				initClassTables(selectedClass);
			});
		});
	}

	function initClassTables()
	{
		var x = 0;

		for(var spell_name in spells)
		{
			if(selectedClass === spells[spell_name][x].class.toLowerCase())
			{
				createTable(spell_name);
			}
		}
	}

	function createTable(spell_name)
	{
		//Insert spell title
		var spellPic = spells[spell_name][0].pic;

		//Insert table structure
		var spell = spells[spell_name];
		var spellName = spell[0].id;
		var cls = spell[0].class;
		var link = spell[0].link;
		bonusHealingValue = $('#bonus_healing').val();
		healingLightRank = $('#healing_light').val();
		crit = $('#crit').val();
		totalMana = $('#mana').val();
		var table = 
		'<div class="table_container">'+
			'<div class="table_title d-flex flex-row align-items-center justify-content-start"><img src="images/'+ spellPic +'" alt=""><h2>'+ spell_name +'</h2>'+ '<div>Actual Healing Power: '+ Math.round((bonusHealingValue * spells[spell_name][0].coef)) + ' (Spell Coefficient: ' + spells[spell_name][0].coef + ')</div><a href="'+ link +'">'+ spell_name +' - wowhead</a></div>'+
			'<div class="' + spellName + ' d-flex flex-column">'+
				'<div class="table_headers_row d-flex flex-row align-items-center justify-content-center">'+
					'<div class="rank_title title_row">Rank</div>'+
					'<div class="healing_range_title">Heal Range</div>'+
					'<div class="mana_cost_title">Mana</div>'+
					'<div class="cast_time_title">Cast Time</div>'+
					'<div class="avg_heal_base_title">Avg. Heal</div>'+
					'<div class="avg_heal_bonus_title title_row">Avg. Heal*</div>'+
					'<div class="heal_per_mana_base_title">Heal / Mana</div>'+
					'<div class="heal_per_mana_bonus_title title_row">Heal / Mana*</div>'+
					'<div class="hps_base_title">HPS</div>'+
					'<div class="hps_bonus_crit_title title_row">HPS*</div>'+
					getOomTitleRow() +
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
			var mana = spell[c].mana;
			// var coef = spell[c].coef;
			var levelLearned = spell[c].learned;

			//If class is paladin add Talent (Healing Light) 
			if(selectedClass === "paladin")
			{
				min = Math.round(((min * (healingLightRank * 4)) / 100) + min);
				max = Math.round(((max * (healingLightRank * 4)) / 100) + max);
			}

			// Apply priest talents
			if(selectedClass === "priest")
			{
				// Applying Improved Healing talent
				var improved_healing = $('#improved_healing').val();
				if(spell_name === "Lesser Heal" || spell_name === "Heal" || spell_name === "Greater Heal")
				{
					mana = Math.round(mana - ((mana * (improved_healing * 5)) / 100));
				}

				// Applying Spiritual Healing talent
				var spiritual_healing = $('#spiritual_healing').val();
				var spiritualHealingBonusMin = 0;
				var spiritualHealingBonusMax = 0;

				if(spiritual_healing > 0 && spell_name != "Power Word: Shield")
				{
					// min = Math.round(((min * (spiritual_healing * 2)) / 100) + min);
					// max = Math.round(((max * (spiritual_healing * 2)) / 100) + max);
					spiritualHealingBonusMin = Math.round((min * (spiritual_healing * 2)) / 100);
					spiritualHealingBonusMax = Math.round((max * (spiritual_healing * 2)) / 100);
					min = min + spiritualHealingBonusMin;
					max = max + spiritualHealingBonusMax;
				}

				// Applying Improved Renew Talent
				var improved_renew = $('#improved_renew').val();
				var impRenewBonusMin = 0;
				var impRenewBonusMax = 0;
				if(spell_name === "Renew")
				{
					// min = Math.round(((min * (improved_renew * 5)) / 100) + min);
					// max = Math.round(((max * (improved_renew * 5)) / 100) + max);
					impRenewBonusMin = Math.round((min * (improved_renew * 5)) / 100);
					impRenewBonusMax = Math.round((max * (improved_renew * 5)) / 100);
					min = min + impRenewBonusMin;
					max = max + impRenewBonusMax;
				}

				// Applying Improved Prayer of Healing talent
				var improved_poh = $('#improved_poh').val();
				if(spell_name === "Prayer of Healing")
				{
					mana = Math.round(mana - ((mana * (improved_poh * 10)) / 100));
				}

				// Applying Improved Power Word: Shield talent
				var imp_pws = $('#imp_pws').val();
				var impPwsBonusMin = 0;
				var impPwsBonusMax = 0;
				if(spell_name === "Power Word: Shield")
				{
					// min = Math.round(((min * (imp_pws * 5)) / 100) + min);
					// max = Math.round(((max * (imp_pws * 5)) / 100) + max);
					impPwsBonusMin = Math.round((min * (imp_pws * 5)) / 100);
					impPwsBonusMax = Math.round((max * (imp_pws * 5)) / 100);
					min = min + impPwsBonusMin;
					max = max + impPwsBonusMax;
				}

				// Applying Mental Agility talent
				var mental_agility = $('#mental_agility').val();
				if(spell_name === "Renew" || spell_name === "Power Word: Shield")
				{
					mana = Math.round(mana - ((mana * (mental_agility * 2)) / 100));
				}
			}

			var avgHeal = (min+max) / 2;
			var castTime = spell[c].cast_value;
			var castTitle = spell[c].cast_title;

			var coef = castTime / 3.5;

			if(spell_name === "Prayer of Healing")
			{
				coef = castTime / 3.5 / 3;
			}

			// Apply the sub 20 penalty for spells
			if(levelLearned < 20)
			{
				coef = coef * (1 - ((20 - levelLearned) * 0.0375));
			}
			
			if(castTime === "Instant")
			{
				castTime = 15;
			}

			var bonus = Math.round(bonusHealingValue * coef);

			if(spell_name === "Renew")
			{
				bonus = Math.round(bonusHealingValue * 1);
			}

			if(spell_name === "Power Word: Shield")
			{
				bonus = Math.round(bonusHealingValue * 0.1);
			}

			var spellRankRow = 
			'<div class="spell_rank d-flex flex-row align-items-center justify-content-center">'+
				'<div class="rank">'+ spell[c].rank +'</div>'+
				'<div class="healing_range">'+ min + '-' + max +'</div>'+
				'<div class="mana_cost">'+ mana +'</div>'+
				'<div class="cast_time">'+ castTitle +'</div>'+
				'<div class="avg_heal_base">'+ Math.round(avgHeal) +'</div>'+
				'<div class="avg_heal_bonus">'+ Math.round(avgHeal + bonus) +'</div>'+
				'<div class="heal_per_mana_base">'+ (avgHeal / mana).toFixed(1) +'</div>'+
				'<div class="heal_per_mana_bonus">'+ ((avgHeal + bonus) / mana).toFixed(1) +'</div>'+
				'<div class="hps_bonus">'+ Math.round((avgHeal + bonus) / castTime) +'</div>'+
				'<div class="hps_bonus_crit">'+ Math.round(((((100-crit)*(avgHeal + bonus))+(crit*((avgHeal + bonus)*1.5)))/100)/castTime) +'</div>'+
				getOomStuff(totalMana, mana, crit, castTime) +
			'</div>';

			$('.'+spellName).append(spellRankRow);
		}
	}

	function getOomTitleRow()
	{
		var returnValue = "";

		if(selectedClass === "paladin")
		{
			returnValue = 
				'<div class="casts_base_title">Oom in</div>'+
				'<div class="casts_bonus_title title_row">Oom in*</div>'+
				'<div class="time_oom_title">Oom in</div>'+
				'<div class="time_oom_crit_title title_row">Oom in*</div>';
		}

		return returnValue;
	}

	function getOomStuff(totalMana, mana, crit, castTime)
	{
		var returnValue = "";

		if(selectedClass === "paladin")
		{
			var numCasts = Math.floor(totalMana/mana);
			var numCastsCrit = Math.floor((((totalMana/mana)*crit)/100)+(totalMana/mana));
			returnValue = 
				'<div class="casts_base">'+ numCasts + ' casts' + '</div>'+
				'<div class="casts_bonus">'+ numCastsCrit +' casts' + '</div>'+
				'<div class="time_oom">'+ getTime(Math.floor(numCasts * castTime)) +'</div>'+
				'<div class="time_oom_crit">'+ getTime(Math.floor((((totalMana/mana)*crit)/100)+(totalMana/mana))) +'</div>';
		}

		return returnValue;
	}

	function getTime(s)
	{
		var totalSeconds = s;
		var minutes = Math.floor(totalSeconds / 60);
		var seconds = Math.floor(totalSeconds - (minutes * 60));

		// round seconds
		seconds = Math.round(seconds * 100) / 100;

		var result = (minutes < 10 ? "0" + minutes : minutes);
		result += ":" + (seconds  < 10 ? "0" + seconds : seconds);

		return result;
	}

	//HTML structure for stats and talents
	function getClassStructure()
	{
		var returnValue = "";

		returnValue = 
		'<div class="accordion_container">'+
			'<div class="accordion d-flex flex-row align-items-center"><div>Stats & Talents</div></div>'+
			'<div class="accordion_panel">'+
				'<div class="class_settings">'+
					'<div class="class_settings_inner">'+
						'<div class="stats_container">'+
							'<div class="section_title">Stats</div>'+
							'<div class="stats d-flex flex-row align-items-center justify-content-start flex-wrap">'+
								'<div class="stat stat_hp d-flex flex-row align-items-center justify-content-start">'+
									'<div class="stat_title">Healing Power</div>'+
									'<div class="stat_value ml-auto">'+
										'<input id="bonus_healing" type="text" class="stat_input" value="500">'+
									'</div>'+
								'</div>'+
								'<div class="stat stat_crit d-flex flex-row align-items-center justify-content-start">'+
									'<div class="stat_title">Crit Chance (%)</div>'+
									'<div class="stat_value ml-auto">'+
										'<input id="crit" type="text" class="stat_input" value="15">'+
									'</div>'+
								'</div>'+
								'<div class="stat stat_mana d-flex flex-row align-items-center justify-content-start">'+
									'<div class="stat_title">Mana</div>'+
									'<div class="stat_value ml-auto">'+
										'<input id="mana" type="text" class="stat_input" value="5000">'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						getClassTalents() +
					'</div>'+
					'<div class="class_settings_button d-flex flex-row">'+
						'<div class="button_a apply_button d-flex flex-row align-items-center justify-content-center ml-auto"><span>apply</span></div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';

		return returnValue;
	}

	function getClassTalents()
	{
		var returnValue = "";

		switch(selectedClass)
		{
			// Paladin
			case 'paladin':
				returnValue = 
					'<div class="talents_container">'+
						'<div class="section_title">Talents</div>'+
						'<div class="talents d-flex align-items-center justify-content-between">'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/healing_light.png" alt=""></div>'+
								'<div class="talent_title">Healing Light</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="healing_light" type="text" class="talent_input" value="3" min="0" max="3">'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
			break;

			// Priest
			case 'priest':
				returnValue = 
					'<div class="talents_container">'+
						'<div class="section_title">Talents</div>'+
						'<div class="talents d-flex align-items-center justify-content-start flex-wrap">'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/imp_healing.png" alt=""></div>'+
								'<div class="talent_title">Improved Healing</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="improved_healing" type="text" class="talent_input" value="3" min="0" max="3">'+
								'</div>'+
							'</div>'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/spiritual_healing.png" alt=""></div>'+
								'<div class="talent_title">Spiritual Healing</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="spiritual_healing" type="text" class="talent_input" value="5" min="0" max="5">'+
								'</div>'+
							'</div>'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/rn.png" alt=""></div>'+
								'<div class="talent_title">Improved Renew</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="improved_renew" type="text" class="talent_input" value="0" min="0" max="3">'+
								'</div>'+
							'</div>'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/poh.png" alt=""></div>'+
								'<div class="talent_title">Improved Prayer of Healing</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="improved_poh" type="text" class="talent_input" value="0" min="0" max="2">'+
								'</div>'+
							'</div>'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/pws.png" alt=""></div>'+
								'<div class="talent_title">Improved Power Word: Shield</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="imp_pws" type="text" class="talent_input" value="0" min="0" max="3">'+
								'</div>'+
							'</div>'+
							'<div class="talent d-flex flex-row align-items-center justify-content-start">'+
								'<div class="talent_pic"><img src="images/ma.png" alt=""></div>'+
								'<div class="talent_title">Mental Agility</div>'+
								'<div class="talent_value ml-auto">'+
									'<input id="mental_agility" type="text" class="talent_input" value="5" min="0" max="5">'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
			break;
		}

		return returnValue;
	}

	function getClassStats()
	{
		var returnValue = "";

		switch(selectedClass)
		{
			//Priest
			case "priest":
				returnValue=
					'<div class="stat stat_spirit d-flex flex-row align-items-center justify-content-start">'+
						'<div class="stat_title">Spirit</div>'+
						'<div class="stat_value ml-auto">'+
							'<input id="spirit" type="text" class="stat_input" value="200">'+
						'</div>'+
					'</div>';
			break;
		}

		return returnValue;
	}

	function clearAll()
	{
		tables.children().remove();
		classSettings.children().remove();
	}

	function clearTables()
	{
		tables.children().remove();
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

	function initSettingsButton()
	{
		var btn = $('.class_settings_button');
		btn.on('click', function()
		{

		});
	}

});