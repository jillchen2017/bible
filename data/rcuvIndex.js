
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.bibleIndexes = factory();
	}
}(this, function() {
	var books = new Array(
		'創世記',
		'出埃及記',
		'利未記',
		'民數記',
		'申命記',
		'約書亞記',
		'士師記',
		'路得記',
		'撒母耳記上',
		'撒母耳記下',
		'列王紀上',
		'列王紀下',
		'歷代志上',
		'歷代志下',
		'以斯拉記',
		'尼希米記',
		'以斯帖記',
		'約伯記',
		'詩篇',
		'箴言',
		'傳道書',
		'雅歌',
		'以賽亞書',
		'耶利米書',
		'耶利米哀歌',
		'以西結書',
		'但以理書',
		'何西阿書',
		'約珥書',
		'阿摩司書',
		'俄巴底亞書',
		'約拿書',
		'彌迦書',
		'那鴻書',
		'哈巴谷書',
		'西番雅書',
		'哈該書',
		'撒迦利亞書',
		'瑪拉基書',
		'馬太福音',
		'馬可福音',
		'路加福音',
		'約翰福音',
		'使徒行傳',
		'羅馬書',
		'哥林多前書',
		'哥林多後書',
		'加拉太書',
		'以弗所書',
		'腓立比書',
		'歌羅西書',
		'帖撒羅尼迦前書',
		'帖撒羅尼迦後書',
		'提摩太前書',
		'提摩太後書',
		'提多書',
		'腓利門書',
		'希伯來書',
		'雅各書',
		'彼得前書',
		'彼得後書',
		'約翰壹書',
		'約翰貳書',
		'約翰參書',
		'猶大書',
		'啟示錄'
	);

	var simple_books = new Array(
		'創',
		'出',
		'利',
		'民',
		'申',
		'書',
		'士',
		'得',
		'撒上',
		'撒下',
		'王上',
		'王下',
		'代上',
		'代下',
		'拉',
		'尼',
		'斯',
		'伯',
		'詩',
		'箴',
		'傳',
		'歌',
		'賽',
		'耶',
		'哀',
		'結',
		'但',
		'何',
		'珥',
		'摩',
		'俄',
		'拿',
		'彌',
		'鴻',
		'哈',
		'番',
		'該',
		'亞',
		'瑪',
		'太',
		'可',
		'路',
		'約',
		'徒',
		'羅',
		'林前',
		'林後',
		'加',
		'弗',
		'腓',
		'西',
		'帖前',
		'帖後',
		'提前',
		'提後',
		'多',
		'門',
		'來',
		'雅',
		'彼前',
		'彼後',
		'約壹',
		'約貳',
		'約參',
		'猶',
		'啟'
	);

	var book_chapters = new Array(
		0, 50, 90, 117, 153, 187, 211, 232, 236, 267, 291, 313, 338, 367, 403, 413, 426, 436, 478, 628, 659, 671, 679, 745,
		797,
		802, 850, 862, 876, 879, 888, 889, 893, 900, 903, 906, 909, 911, 925, 929, 957, 973, 997, 1018, 1046, 1062, 1078,
		1091,
		1097, 1103, 1107, 1111, 1116, 1119, 1125, 1129, 1132, 1133, 1146, 1151, 1156, 1159, 1164, 1165, 1166, 1167, 1189
	);

	var chinese_numbers = new Array(
		'一',
		'二',
		'三',
		'四',
		'五',
		'六',
		'七',
		'八',
		'九',
		'十',
		'十一',
		'十二',
		'十三',
		'十四',
		'十五',
		'十六',
		'十七',
		'十八',
		'十九',
		'二十',
		'二十一',
		'二十二',
		'二十三',
		'二十四',
		'二十五',
		'二十六',
		'二十七',
		'二十八',
		'二十九',
		'三十',
		'三十一',
		'三十二',
		'三十三',
		'三十四',
		'三十五',
		'三十六',
		'三十七',
		'三十八',
		'三十九',
		'四十',
		'四十一',
		'四十二',
		'四十三',
		'四十四',
		'四十五',
		'四十六',
		'四十七',
		'四十八',
		'四十九',
		'五十',
		'五十一',
		'五十二',
		'五十三',
		'五十四',
		'五十五',
		'五十六',
		'五十七',
		'五十八',
		'五十九',
		'六十',
		'六十一',
		'六十二',
		'六十三',
		'六十四',
		'六十五',
		'六十六',
		'六十七',
		'六十八',
		'六十九',
		'七十',
		'七十一',
		'七十二',
		'七十三',
		'七十四',
		'七十五',
		'七十六',
		'七十七',
		'七十八',
		'七十九',
		'八十',
		'八十一',
		'八十二',
		'八十三',
		'八十四',
		'八十五',
		'八十六',
		'八十七',
		'八十八',
		'八十九',
		'九十',
		'九十一',
		'九十二',
		'九十三',
		'九十四',
		'九十五',
		'九十六',
		'九十七',
		'九十八',
		'九十九',
		'一百',
		'一百零一',
		'一百零二',
		'一百零三',
		'一百零四',
		'一百零五',
		'一百零六',
		'一百零七',
		'一百零八',
		'一百零九',
		'一百一十',
		'一百十一',
		'一百十二',
		'一百十三',
		'一百十四',
		'一百十五',
		'一百十六',
		'一百十七',
		'一百十八',
		'一百十九',
		'一百二十',
		'一百二十一',
		'一百二十二',
		'一百二十三',
		'一百二十四',
		'一百二十五',
		'一百二十六',
		'一百二十七',
		'一百二十八',
		'一百二十九',
		'一百三十',
		'一百三十一',
		'一百三十二',
		'一百三十三',
		'一百三十四',
		'一百三十五',
		'一百三十六',
		'一百三十七',
		'一百三十八',
		'一百三十九',
		'一百四十',
		'一百四十一',
		'一百四十二',
		'一百四十三',
		'一百四十四',
		'一百四十五',
		'一百四十六',
		'一百四十七',
		'一百四十八',
		'一百四十九',
		'一百五十'
	);

	var chapter_lines = new Array(
		0,
		31,
		56,
		80,
		106,
		138,
		160,
		184,
		206,
		235,
		267,
		299,
		319,
		337,
		361,
		382,
		398,
		425,
		458,
		496,
		514,
		548,
		572,
		592,
		659,
		693,
		728,
		774,
		796,
		831,
		874,
		929,
		961,
		981,
		1012,
		1041,
		1084,
		1120,
		1150,
		1173,
		1196,
		1253,
		1291,
		1325,
		1359,
		1387,
		1421,
		1452,
		1474,
		1507,
		1533,
		1555,
		1580,
		1602,
		1633,
		1656,
		1686,
		1711,
		1743,
		1778,
		1807,
		1817,
		1868,
		1890,
		1921,
		1948,
		1984,
		2000,
		2027,
		2052,
		2078,
		2114,
		2145,
		2178,
		2196,
		2236,
		2273,
		2294,
		2337,
		2383,
		2421,
		2439,
		2474,
		2497,
		2532,
		2567,
		2605,
		2634,
		2665,
		2708,
		2746,
		2763,
		2779,
		2796,
		2831,
		2850,
		2880,
		2918,
		2954,
		2978,
		2998,
		3045,
		3053,
		3112,
		3169,
		3202,
		3236,
		3252,
		3282,
		3319,
		3346,
		3370,
		3403,
		3447,
		3470,
		3525,
		3571,
		3605,
		3659,
		3693,
		3744,
		3793,
		3824,
		3851,
		3940,
		3966,
		3989,
		4025,
		4060,
		4076,
		4109,
		4154,
		4195,
		4245,
		4258,
		4290,
		4312,
		4341,
		4376,
		4417,
		4447,
		4472,
		4490,
		4555,
		4578,
		4609,
		4649,
		4665,
		4719,
		4761,
		4817,
		4846,
		4880,
		4893,
		4939,
		4976,
		5005,
		5054,
		5087,
		5112,
		5138,
		5158,
		5187,
		5209,
		5241,
		5273,
		5291,
		5320,
		5343,
		5365,
		5385,
		5407,
		5428,
		5448,
		5471,
		5501,
		5526,
		5548,
		5567,
		5586,
		5612,
		5680,
		5709,
		5729,
		5759,
		5811,
		5840,
		5852,
		5870,
		5894,
		5911,
		5935,
		5950,
		5977,
		6003,
		6038,
		6065,
		6108,
		6131,
		6155,
		6188,
		6203,
		6266,
		6276,
		6294,
		6322,
		6373,
		6382,
		6427,
		6461,
		6477,
		6510,
		6546,
		6569,
		6600,
		6624,
		6655,
		6695,
		6720,
		6755,
		6812,
		6830,
		6870,
		6885,
		6910,
		6930,
		6950,
		6981,
		6994,
		7025,
		7055,
		7103,
		7128,
		7150,
		7173,
		7191,
		7213,
		7241,
		7277,
		7298,
		7320,
		7332,
		7353,
		7370,
		7392,
		7419,
		7446,
		7461,
		7486,
		7509,
		7561,
		7596,
		7619,
		7677,
		7707,
		7731,
		7773,
		7788,
		7811,
		7840,
		7862,
		7906,
		7931,
		7943,
		7968,
		7979,
		8010,
		8023,
		8050,
		8082,
		8121,
		8133,
		8158,
		8181,
		8210,
		8228,
		8241,
		8260,
		8287,
		8318,
		8357,
		8390,
		8427,
		8450,
		8479,
		8512,
		8555,
		8581,
		8603,
		8654,
		8693,
		8718,
		8771,
		8817,
		8845,
		8879,
		8897,
		8935,
		8986,
		9052,
		9080,
		9109,
		9152,
		9185,
		9219,
		9250,
		9284,
		9318,
		9342,
		9388,
		9409,
		9452,
		9481,
		9534,
		9552,
		9577,
		9604,
		9648,
		9675,
		9708,
		9728,
		9757,
		9794,
		9830,
		9851,
		9872,
		9897,
		9926,
		9964,
		9984,
		10025,
		10062,
		10099,
		10120,
		10146,
		10166,
		10203,
		10223,
		10253,
		10307,
		10362,
		10386,
		10429,
		10455,
		10536,
		10576,
		10616,
		10660,
		10674,
		10721,
		10761,
		10775,
		10792,
		10821,
		10864,
		10891,
		10908,
		10927,
		10935,
		10965,
		10984,
		11016,
		11047,
		11078,
		11110,
		11144,
		11165,
		11195,
		11212,
		11230,
		11247,
		11269,
		11283,
		11325,
		11347,
		11365,
		11396,
		11415,
		11438,
		11454,
		11476,
		11491,
		11510,
		11524,
		11543,
		11577,
		11588,
		11625,
		11645,
		11657,
		11678,
		11705,
		11733,
		11756,
		11765,
		11792,
		11828,
		11855,
		11876,
		11909,
		11934,
		11967,
		11994,
		12017,
		12028,
		12098,
		12111,
		12135,
		12152,
		12174,
		12202,
		12238,
		12253,
		12297,
		12308,
		12328,
		12360,
		12383,
		12402,
		12421,
		12494,
		12512,
		12550,
		12589,
		12625,
		12672,
		12703,
		12725,
		12748,
		12763,
		12780,
		12794,
		12808,
		12818,
		12835,
		12867,
		12870,
		12892,
		12905,
		12931,
		12952,
		12979,
		13009,
		13030,
		13052,
		13087,
		13109,
		13129,
		13154,
		13182,
		13204,
		13239,
		13261,
		13277,
		13298,
		13327,
		13356,
		13390,
		13420,
		13437,
		13462,
		13468,
		13482,
		13505,
		13533,
		13558,
		13589,
		13629,
		13651,
		13684,
		13721,
		13737,
		13770,
		13794,
		13835,
		13865,
		13889,
		13923,
		13940,
		13946,
		13958,
		13966,
		13974,
		13986,
		13996,
		14013,
		14022,
		14042,
		14060,
		14067,
		14075,
		14081,
		14088,
		14093,
		14104,
		14119,
		14169,
		14183,
		14192,
		14205,
		14236,
		14242,
		14252,
		14274,
		14286,
		14300,
		14309,
		14320,
		14332,
		14356,
		14367,
		14389,
		14411,
		14439,
		14451,
		14491,
		14513,
		14526,
		14543,
		14556,
		14567,
		14572,
		14598,
		14615,
		14626,
		14635,
		14649,
		14669,
		14692,
		14711,
		14720,
		14726,
		14733,
		14756,
		14769,
		14780,
		14791,
		14808,
		14820,
		14828,
		14840,
		14851,
		14861,
		14874,
		14894,
		14901,
		14936,
		14972,
		14977,
		15001,
		15021,
		15049,
		15072,
		15082,
		15094,
		15114,
		15186,
		15199,
		15218,
		15234,
		15242,
		15260,
		15272,
		15285,
		15302,
		15309,
		15327,
		15379,
		15396,
		15412,
		15427,
		15432,
		15455,
		15466,
		15479,
		15491,
		15500,
		15509,
		15514,
		15522,
		15550,
		15572,
		15607,
		15652,
		15700,
		15743,
		15756,
		15787,
		15794,
		15804,
		15814,
		15823,
		15831,
		15849,
		15868,
		15870,
		15899,
		16075,
		16082,
		16090,
		16099,
		16103,
		16111,
		16116,
		16122,
		16127,
		16133,
		16141,
		16149,
		16152,
		16170,
		16173,
		16176,
		16197,
		16223,
		16232,
		16240,
		16264,
		16277,
		16287,
		16294,
		16306,
		16321,
		16342,
		16352,
		16372,
		16386,
		16395,
		16401,
		16434,
		16456,
		16491,
		16518,
		16541,
		16576,
		16603,
		16639,
		16657,
		16689,
		16720,
		16748,
		16773,
		16808,
		16841,
		16874,
		16902,
		16926,
		16955,
		16985,
		17016,
		17045,
		17080,
		17114,
		17142,
		17170,
		17197,
		17225,
		17252,
		17285,
		17316,
		17334,
		17360,
		17382,
		17398,
		17418,
		17430,
		17459,
		17476,
		17494,
		17514,
		17524,
		17538,
		17555,
		17572,
		17583,
		17599,
		17615,
		17628,
		17641,
		17655,
		17686,
		17708,
		17734,
		17740,
		17770,
		17783,
		17808,
		17830,
		17851,
		17885,
		17901,
		17907,
		17929,
		17961,
		17970,
		17984,
		17998,
		18005,
		18030,
		18036,
		18053,
		18078,
		18096,
		18119,
		18131,
		18152,
		18165,
		18194,
		18218,
		18251,
		18260,
		18280,
		18304,
		18321,
		18331,
		18353,
		18391,
		18413,
		18421,
		18452,
		18481,
		18506,
		18534,
		18562,
		18587,
		18600,
		18615,
		18637,
		18663,
		18674,
		18697,
		18712,
		18724,
		18741,
		18754,
		18766,
		18787,
		18801,
		18822,
		18844,
		18855,
		18867,
		18886,
		18898,
		18923,
		18947,
		18966,
		19003,
		19028,
		19059,
		19090,
		19120,
		19154,
		19176,
		19202,
		19227,
		19250,
		19267,
		19294,
		19316,
		19337,
		19358,
		19385,
		19408,
		19423,
		19441,
		19455,
		19485,
		19525,
		19535,
		19573,
		19597,
		19619,
		19636,
		19668,
		19692,
		19732,
		19776,
		19802,
		19824,
		19843,
		19875,
		19896,
		19924,
		19942,
		19958,
		19976,
		19998,
		20011,
		20041,
		20046,
		20074,
		20081,
		20128,
		20167,
		20213,
		20277,
		20311,
		20333,
		20355,
		20421,
		20443,
		20465,
		20493,
		20503,
		20530,
		20547,
		20564,
		20578,
		20605,
		20623,
		20634,
		20656,
		20681,
		20709,
		20732,
		20755,
		20763,
		20826,
		20850,
		20882,
		20896,
		20945,
		20977,
		21008,
		21057,
		21084,
		21101,
		21122,
		21158,
		21184,
		21205,
		21231,
		21249,
		21281,
		21314,
		21345,
		21360,
		21398,
		21426,
		21449,
		21478,
		21527,
		21553,
		21573,
		21600,
		21631,
		21656,
		21680,
		21703,
		21738,
		21759,
		21808,
		21838,
		21875,
		21906,
		21934,
		21962,
		21989,
		22016,
		22037,
		22082,
		22095,
		22106,
		22129,
		22134,
		22153,
		22168,
		22179,
		22195,
		22209,
		22226,
		22241,
		22253,
		22267,
		22283,
		22292,
		22312,
		22344,
		22365,
		22380,
		22396,
		22411,
		22424,
		22451,
		22465,
		22482,
		22496,
		22511,
		22532,
		22549,
		22559,
		22569,
		22580,
		22596,
		22609,
		22621,
		22634,
		22649,
		22665,
		22685,
		22700,
		22713,
		22732,
		22749,
		22769,
		22788,
		22806,
		22821,
		22841,
		22856,
		22879,
		22900,
		22913,
		22923,
		22937,
		22948,
		22963,
		22977,
		23000,
		23017,
		23029,
		23046,
		23060,
		23069,
		23090,
		23104,
		23121,
		23139,
		23145,
		23170,
		23193,
		23210,
		23235,
		23283,
		23317,
		23346,
		23380,
		23418,
		23460,
		23490,
		23540,
		23598,
		23634,
		23673,
		23701,
		23728,
		23763,
		23793,
		23827,
		23873,
		23919,
		23958,
		24009,
		24055,
		24130,
		24196,
		24216,
		24261,
		24289,
		24324,
		24365,
		24408,
		24464,
		24501,
		24539,
		24589,
		24641,
		24674,
		24718,
		24755,
		24827,
		24874,
		24894,
		24974,
		25026,
		25064,
		25108,
		25147,
		25196,
		25246,
		25302,
		25364,
		25406,
		25460,
		25519,
		25554,
		25589,
		25621,
		25652,
		25689,
		25732,
		25780,
		25827,
		25865,
		25936,
		25992,
		26045,
		26096,
		26121,
		26157,
		26211,
		26258,
		26329,
		26382,
		26441,
		26482,
		26524,
		26581,
		26631,
		26669,
		26700,
		26727,
		26760,
		26786,
		26826,
		26868,
		26899,
		26924,
		26950,
		26997,
		27023,
		27060,
		27102,
		27117,
		27177,
		27217,
		27260,
		27308,
		27338,
		27363,
		27415,
		27443,
		27484,
		27524,
		27558,
		27586,
		27627,
		27665,
		27705,
		27735,
		27770,
		27797,
		27824,
		27856,
		27900,
		27931,
		27963,
		27992,
		28023,
		28048,
		28069,
		28092,
		28117,
		28156,
		28189,
		28210,
		28246,
		28267,
		28281,
		28304,
		28337,
		28364,
		28395,
		28411,
		28434,
		28455,
		28468,
		28488,
		28528,
		28541,
		28568,
		28601,
		28635,
		28666,
		28679,
		28719,
		28777,
		28801,
		28825,
		28842,
		28860,
		28878,
		28899,
		28917,
		28933,
		28957,
		28972,
		28990,
		29023,
		29044,
		29058,
		29082,
		29103,
		29132,
		29163,
		29189,
		29207,
		29230,
		29252,
		29273,
		29305,
		29338,
		29362,
		29392,
		29422,
		29443,
		29466,
		29495,
		29518,
		29543,
		29561,
		29571,
		29591,
		29604,
		29622,
		29650,
		29662,
		29679,
		29697,
		29717,
		29732,
		29748,
		29764,
		29789,
		29810,
		29828,
		29854,
		29871,
		29893,
		29909,
		29924,
		29939,
		29964,
		29978,
		29996,
		30015,
		30031,
		30045,
		30065,
		30093,
		30106,
		30134,
		30173,
		30213,
		30242,
		30267,
		30294,
		30320,
		30338,
		30355,
		30375,
		30400,
		30425,
		30447,
		30466,
		30480,
		30501,
		30523,
		30541,
		30551,
		30580,
		30604,
		30625,
		30646,
		30659,
		30674,
		30699,
		30719,
		30748,
		30770,
		30781,
		30795,
		30812,
		30829,
		30842,
		30863,
		30874,
		30893,
		30910,
		30928,
		30948,
		30956,
		30977,
		30995,
		31019,
		31040,
		31055,
		31082,
		31103,
		31124
	);

	var chapter_length = new Array( //這是和合本聖經每一章的長度
		2646,
		2184,
		2589,
		2616,
		1977,
		1926,
		2025,
		1782,
		2262,
		2283,
		2472,
		2031,
		1659,
		2631,
		1995,
		1704,
		2603,
		3528,
		4197,
		2094,
		3183,
		2616,
		1971,
		7113,
		3225,
		3804,
		4824,
		2298,
		3327,
		4404,
		5754,
		3243,
		2049,
		3333,
		2817,
		3999,
		3741,
		3174,
		2454,
		1974,
		5286,
		4380,
		3969,
		3630,
		3093,
		3261,
		3903,
		2775,
		3249,
		2817,
		1923,
		2523,
		3018,
		3246,
		2340,
		2976,
		2484,
		3588,
		3549,
		3495,
		1173,
		5298,
		2457,
		3366,
		2781,
		3942,
		1983,
		2970,
		2601,
		2091,
		3165,
		3048,
		3252,
		1722,
		2811,
		3048,
		1959,
		4365,
		4467,
		3447,
		1614,
		3945,
		2715,
		3801,
		3045,
		3276,
		2157,
		3099,
		3867,
		2682,
		1674,
		1599,
		1734,
		3357,
		2625,
		3147,
		3549,
		3579,
		2340,
		2580,
		3906,
		897,
		6573,
		5346,
		2961,
		3642,
		1875,
		2742,
		3633,
		3048,
		2070,
		3318,
		4362,
		2118,
		5466,
		4986,
		3513,
		4476,
		2700,
		4518,
		4401,
		3099,
		2706,
		8250,
		2580,
		2562,
		3246,
		4143,
		1503,
		2868,
		4662,
		3942,
		5376,
		1347,
		4143,
		2472,
		3165,
		3897,
		4341,
		3099,
		2415,
		1872,
		6048,
		2334,
		2916,
		4047,
		1782,
		4638,
		4218,
		3720,
		1950,
		3402,
		1551,
		5226,
		4047,
		3396,
		5685,
		3387,
		2592,
		3486,
		2130,
		3780,
		2412,
		3549,
		4056,
		2286,
		2478,
		2784,
		2580,
		2391,
		2307,
		2250,
		2214,
		2604,
		3042,
		2514,
		2337,
		1848,
		2457,
		2367,
		7098,
		3327,
		2508,
		3843,
		5172,
		3321,
		1254,
		2421,
		3006,
		2031,
		2730,
		2133,
		3264,
		3990,
		4548,
		3273,
		5706,
		2952,
		2022,
		3594,
		2022,
		4515,
		1041,
		2625,
		2949,
		3987,
		1242,
		4851,
		5157,
		2151,
		4506,
		4017,
		2727,
		3279,
		2994,
		3246,
		5028,
		3423,
		4086,
		6192,
		1890,
		4878,
		1746,
		2940,
		2658,
		2505,
		4335,
		1479,
		3729,
		3642,
		5301,
		2793,
		2658,
		2901,
		2034,
		2480,
		3078,
		4365,
		2229,
		2859,
		1596,
		2931,
		2145,
		1968,
		3633,
		3204,
		1785,
		3048,
		2595,
		6324,
		4065,
		2934,
		6789,
		3009,
		2715,
		4758,
		1848,
		2958,
		3411,
		2433,
		5304,
		3276,
		1461,
		2964,
		1611,
		3399,
		1416,
		2553,
		3501,
		4704,
		1701,
		2535,
		2634,
		3309,
		1911,
		1581,
		2220,
		3231,
		3861,
		4452,
		3957,
		4263,
		2808,
		3690,
		4251,
		5191,
		3306,
		3147,
		3912,
		3630,
		3138,
		5865,
		5967,
		3153,
		2907,
		2034,
		3165,
		4440,
		7497,
		3045,
		3335,
		5100,
		4053,
		3903,
		3696,
		3567,
		3669,
		2537,
		5493,
		2751,
		5361,
		3360,
		5856,
		2514,
		3390,
		3270,
		5079,
		3723,
		4065,
		2907,
		3588,
		4716,
		4611,
		2424,
		2445,
		2979,
		3423,
		4011,
		2334,
		4821,
		4773,
		4428,
		2595,
		2733,
		2625,
		5061,
		2214,
		3393,
		3836,
		4017,
		2205,
		4008,
		2946,
		6987,
		4154,
		2547,
		4278,
		1473,
		4191,
		4032,
		1569,
		1440,
		3051,
		3639,
		3045,
		1845,
		2319,
		1221,
		3510,
		2406,
		2556,
		2535,
		2622,
		3162,
		3423,
		2877,
		3660,
		1980,
		2445,
		1686,
		1749,
		1641,
		4905,
		2688,
		2052,
		3480,
		2349,
		2274,
		1929,
		2808,
		1812,
		1992,
		1629,
		1812,
		4092,
		1515,
		4611,
		2328,
		1859,
		2763,
		3540,
		3642,
		2766,
		873,
		3525,
		4233,
		3645,
		2775,
		4155,
		2823,
		4311,
		3696,
		2943,
		1404,
		4314,
		2034,
		2742,
		1977,
		2811,
		3354,
		4206,
		2556,
		4224,
		1404,
		2550,
		3492,
		2496,
		2412,
		2268,
		4938,
		2610,
		5496,
		3054,
		4074,
		4641,
		3930,
		2463,
		2856,
		1971,
		1842,
		1626,
		1659,
		1296,
		2253,
		3384,
		330,
		2406,
		1431,
		1632,
		1386,
		1824,
		1887,
		1533,
		1344,
		2169,
		1614,
		1341,
		1629,
		1818,
		1554,
		2355,
		1449,
		1116,
		1356,
		1875,
		2034,
		2088,
		1932,
		1140,
		1872,
		330,
		807,
		1494,
		1614,
		1512,
		2097,
		2684,
		1551,
		2058,
		2388,
		1041,
		2136,
		1518,
		2505,
		1935,
		1434,
		2079,
		1785,
		459,
		897,
		675,
		828,
		1215,
		840,
		1446,
		732,
		1782,
		1650,
		573,
		732,
		534,
		678,
		414,
		984,
		1461,
		4038,
		1146,
		705,
		1095,
		2538,
		501,
		780,
		1587,
		840,
		1461,
		939,
		891,
		1068,
		2307,
		1002,
		1416,
		1518,
		2481,
		939,
		2940,
		1395,
		1323,
		1704,
		1032,
		1143,
		561,
		1998,
		1452,
		894,
		666,
		1026,
		1518,
		1704,
		1614,
		852,
		687,
		657,
		1848,
		1140,
		1074,
		924,
		1671,
		1191,
		657,
		1140,
		834,
		813,
		1098,
		1407,
		519,
		2958,
		2949,
		498,
		1896,
		1551,
		1851,
		1836,
		810,
		942,
		1407,
		5160,
		1221,
		1527,
		1242,
		597,
		1278,
		1119,
		990,
		1416,
		567,
		1446,
		3897,
		1386,
		1170,
		1041,
		387,
		1626,
		783,
		1032,
		876,
		687,
		777,
		390,
		756,
		1962,
		1638,
		2376,
		2907,
		3372,
		2802,
		990,
		2160,
		723,
		726,
		744,
		594,
		492,
		1203,
		1239,
		171,
		1908,
		11187,
		459,
		477,
		648,
		390,
		534,
		420,
		444,
		507,
		438,
		504,
		516,
		312,
		1266,
		285,
		198,
		1494,
		1656,
		729,
		768,
		1875,
		1131,
		909,
		705,
		1134,
		1335,
		1461,
		798,
		1227,
		1008,
		612,
		399,
		2217,
		1197,
		2217,
		1821,
		1452,
		2208,
		1758,
		2343,
		1110,
		1977,
		2016,
		1821,
		1623,
		2274,
		2013,
		2109,
		1743,
		1485,
		1935,
		1926,
		1980,
		1851,
		2298,
		2316,
		1899,
		1914,
		1890,
		1899,
		1755,
		2337,
		1911,
		1398,
		2763,
		1854,
		1515,
		1992,
		1164,
		2484,
		1875,
		2259,
		1587,
		1089,
		1368,
		1500,
		1734,
		1209,
		1695,
		1887,
		1335,
		1236,
		1668,
		3372,
		2040,
		2244,
		753,
		3366,
		1462,
		2607,
		2451,
		2499,
		3822,
		1822,
		642,
		2172,
		3381,
		1041,
		1794,
		1662,
		978,
		2862,
		738,
		1803,
		2559,
		2073,
		2235,
		1488,
		2262,
		1566,
		3366,
		2781,
		3996,
		1302,
		1752,
		2556,
		1911,
		1149,
		2832,
		4398,
		2367,
		1077,
		3375,
		3366,
		2793,
		3174,
		3694,
		3345,
		1416,
		1854,
		2667,
		3522,
		1503,
		3069,
		1866,
		1731,
		2064,
		1668,
		1461,
		2304,
		2166,
		2484,
		2673,
		1563,
		1479,
		2421,
		1233,
		3177,
		3528,
		2106,
		4590,
		3438,
		3657,
		3666,
		3693,
		3915,
		2886,
		3246,
		2763,
		2994,
		2211,
		3039,
		3021,
		2859,
		2712,
		3279,
		2724,
		2073,
		2520,
		2007,
		3604,
		5103,
		1410,
		4461,
		3072,
		3069,
		2031,
		4203,
		2913,
		5253,
		5541,
		3282,
		2997,
		2580,
		4203,
		2496,
		3849,
		2064,
		2766,
		2541,
		3055,
		1773,
		4479,
		618,
		3627,
		822,
		4857,
		5061,
		5946,
		7575,
		3525,
		3237,
		3333,
		3642,
		2418,
		1365,
		2859,
		1122,
		3195,
		1812,
		2436,
		1803,
		3048,
		2265,
		1500,
		2358,
		2772,
		3207,
		3081,
		3075,
		756,
		7086,
		2910,
		3747,
		1419,
		6360,
		3687,
		3288,
		5499,
		2799,
		1920,
		2658,
		3483,
		3018,
		2484,
		2988,
		2331,
		3942,
		4032,
		3729,
		1608,
		4566,
		3597,
		2868,
		3456,
		4920,
		2220,
		1746,
		3036,
		3714,
		3048,
		2991,
		2703,
		3555,
		2241,
		5664,
		3876,
		4698,
		3741,
		3483,
		3297,
		3246,
		3843,
		2355,
		5619,
		1512,
		1506,
		2709,
		645,
		2016,
		1638,
		1065,
		1671,
		1401,
		2139,
		1932,
		1398,
		1323,
		1767,
		1074,
		2037,
		3663,
		2193,
		1674,
		1752,
		1524,
		1806,
		2577,
		1578,
		1911,
		1662,
		1971,
		2487,
		1947,
		846,
		960,
		1236,
		1917,
		1683,
		1458,
		1890,
		1686,
		1860,
		2403,
		1671,
		1455,
		2010,
		1653,
		2205,
		2004,
		2163,
		1989,
		2460,
		1734,
		2685,
		2481,
		1338,
		1287,
		1425,
		1182,
		1488,
		1395,
		2700,
		2184,
		1572,
		2043,
		1743,
		1158,
		2526,
		2178,
		2520,
		2460,
		726,
		2250,
		2409,
		1596,
		2364,
		4266,
		3624,
		2517,
		3045,
		3522,
		3837,
		2883,
		4659,
		5124,
		2712,
		3156,
		2832,
		2712,
		3363,
		2931,
		2976,
		4710,
		3477,
		4092,
		4212,
		4086,
		6723,
		5652,
		1833,
		3666,
		2859,
		2739,
		3396,
		3738,
		5157,
		3138,
		3345,
		4734,
		4701,
		3324,
		4260,
		3498,
		6624,
		3912,
		1944,
		6156,
		4512,
		4512,
		3987,
		3690,
		5088,
		5188,
		5700,
		6228,
		4248,
		5556,
		5598,
		3462,
		3075,
		2877,
		3216,
		3066,
		3516,
		4017,
		3831,
		3261,
		5835,
		4809,
		4416,
		4573,
		2127,
		3072,
		4617,
		4074,
		6012,
		4410,
		5889,
		3768,
		3390,
		4725,
		4398,
		3558,
		3309,
		2691,
		3345,
		2757,
		4038,
		4638,
		3171,
		2995,
		2931,
		4326,
		2607,
		3471,
		4092,
		1515,
		5781,
		3592,
		4101,
		4398,
		2844,
		2487,
		5217,
		2553,
		3978,
		3948,
		3573,
		2892,
		4170,
		3849,
		4305,
		3129,
		3576,
		2718,
		3087,
		3276,
		4101,
		3312,
		3321,
		2772,
		2619,
		2550,
		2145,
		2229,
		2697,
		4033,
		3252,
		1857,
		3552,
		1842,
		1482,
		2139,
		3108,
		2493,
		2910,
		1707,
		2223,
		2313,
		1461,
		2022,
		4173,
		1338,
		2883,
		2847,
		3000,
		2670,
		1257,
		3885,
		5238,
		1995,
		2613,
		1674,
		1689,
		1752,
		2148,
		1767,
		2061,
		2454,
		1566,
		1977,
		3330,
		2733,
		1626,
		2088,
		2481,
		2955,
		3024,
		2100,
		1575,
		2274,
		2175,
		1845,
		2559,
		2535,
		2172,
		2853,
		2691,
		2205,
		2334,
		3108,
		2385,
		2487,
		1848,
		1188,
		2325,
		1425,
		1824,
		2004,
		1353,
		1833,
		1593,
		2022,
		1158,
		1527,
		1479,
		2241,
		2181,
		1923,
		2271,
		1587,
		2058,
		1683,
		1224,
		1638,
		2124,
		1404,
		1905,
		1617,
		1812,
		1299,
		1884,
		2997,
		1548,
		2994,
		3387,
		4200,
		3123,
		2496,
		2436,
		2418,
		1734,
		1764,
		2130,
		2865,
		2709,
		2460,
		1926,
		1518,
		2334,
		2610,
		2025,
		1068,
		3366,
		2421,
		2223,
		2025,
		1374,
		1422,
		3051,
		2376,
		3474,
		2754,
		1329,
		1551,
		1977,
		1848,
		1395,
		2046,
		1254,
		2277,
		1920,
		1869,
		2463,
		1053,
		2127,
		2115,
		3165,
		2430,
		1905,
		2880,
		2244
	);
	var total_length = 3156051; //這是和合本聖經的總長度

	var getSimpleName = function(bookName) {
		var bookIndex = simple_books.indexOf(bookName);
		// console.log("====simple_books=====" + bookIndex)
		if (bookIndex == -1) {
			bookIndex = books.indexOf(bookName);
			// console.log("====books=====" + bookIndex)
			if (bookIndex == -1) {
				return null;
			} else {
				return simple_books[bookIndex];
			}
		} else {
			return bookName;
		}
	};
	var getFullName = function(bookName) {
		var bookIndex = books.indexOf(bookName);
		if (bookIndex == -1) {
			bookIndex = simple_books.indexOf(bookName);
			if (bookIndex == -1) {
				return null;
			} else {
				return books[bookIndex];
			}
		} else {
			return bookName;
		}
	};
	/*
	 *return bookIndex: start from 0, -1 if not found
	 */
	var getBookIndex = function(bookName) {
		var bookIndex = simple_books.indexOf(bookName);
		// console.log("====simple_books=====" + bookIndex)
		if (bookIndex == -1) {
			
			bookIndex = books.indexOf(bookName);
			// console.log("====books=====" + bookIndex)
		}
		return bookIndex;
	};
	var getTotalChapters = function(bookIndex) {
		if (bookIndex < 0 || bookIndex > book_chapters.length) return -1;
		var bookChapterStartIndex = book_chapters[bookIndex];
		var bookChapterEndIndex = book_chapters[bookIndex + 1];
		return bookChapterEndIndex - bookChapterStartIndex;
	};
	var getTotalLines = function(bookIndex, chapterIndex) {
		if (bookIndex < 0 || chapterIndex < 0) return -1;
		var mainChapterIndex = book_chapters[bookIndex] + chapterIndex;
		return chapter_lines.length <= mainChapterIndex ? -1 : chapter_lines[mainChapterIndex] - chapter_lines[
			mainChapterIndex - 1];
	};
	/*bookIndex: start from 0
	 *chapterIndex, line: start from 1
	 */
	var searchLine = function(bookIndex, chapter, line) {
		if (bookIndex < 0 || bookIndex > book_chapters.length) return -1;
		var bookChapterStartIndex = book_chapters[bookIndex];
		var bookChapterEndIndex = book_chapters[bookIndex + 1];
		if (chapter < 1 || chapter > bookChapterEndIndex - bookChapterStartIndex) return -2;

		var chapterIndex = bookChapterStartIndex + chapter - 1;
		var totalChapterLines = chapter_lines[chapterIndex + 1] - chapter_lines[chapterIndex];
		if (line < 1 || line > totalChapterLines) return -3;

		return chapter_lines[chapterIndex] + line - 1;
	};

	/* bookIndex: start from 0
	 *chapterIndex, line: start from 1
	 */
	var search = function(bookIndex, chapterIndex1, line1, chapterIndex2, line2) {
		var start = searchLine(bookIndex, chapterIndex1, line1);
		if (start < 0) return [start, 0];
		var end = searchLine(bookIndex, chapterIndex2, line2);
		if (end < 0) return [start, end];
		return [min(start, end), max(start, end)];
	};
	return {
		books: books,
		simpleBooks: simple_books,
		bookChapters: book_chapters,
		chapterLines: chapter_lines,
		chapterLength: chapter_length,
		chineseNumbers: chinese_numbers,
		totalChars: total_length,
		getSimpleName: getSimpleName,
		getFullName: getFullName,
		getBookIndex: getBookIndex,
		getTotalChapters: getTotalChapters,
		getTotalLines: getTotalLines,
		searchLine: searchLine,
		search: search
	};
}));
