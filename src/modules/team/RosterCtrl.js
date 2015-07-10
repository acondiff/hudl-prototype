app.controller('RosterCtrl', ['$scope', '$rootScope', '$http', '$store', function($scope, $rootScope, $http, $store) {

    var positions = [
        {
            name: 'Quarterback',
            abbr: 'QB',
            on: false
        },
        {
            name: 'Running Back',
            abbr: 'RB',
            on: false
        },
        {
            name: 'Slotback',
            abbr: 'SB',
            on: false
        },
        {
            name: 'Fullback',
            abbr: 'FB',
            on: false
        },
        {
            name: 'Wide Receiver',
            abbr: 'WR',
            on: false
        },
        {
            name: 'Tight End',
            abbr: 'TE',
            on: false
        },
        {
            name: 'Tackle',
            abbr: 'T',
            on: false
        },
        {
            name: 'Guard',
            abbr: 'G',
            on: false
        },
        {
            name: 'Center',
            abbr: 'C',
            on: false
        },
        {
            name: 'Long Snapper',
            abbr: 'LS',
            on: false
        },
        {
            name: 'Defensive End',
            abbr: 'DE',
            on: false
        },
        {
            name: 'Defensive Tackle',
            abbr: 'DT',
            on: false
        },
        {
            name: 'Nose Guard',
            abbr: 'NG',
            on: false
        },
        {
            name: 'Outside Linebacker',
            abbr: 'OLB',
            on: false
        },
        {
            name: 'Middle Linebacker',
            abbr: 'MLB',
            on: false
        },
        {
            name: 'Cornerback',
            abbr: 'CB',
            on: false
        },
        {
            name: 'Free Safety',
            abbr: 'FS',
            on: false
        },
        {
            name: 'Strong Safety',
            abbr: 'SS',
            on: false
        },
        {
            name: 'Kicker',
            abbr: 'K',
            on: false
        },
        {
            name: 'Punter',
            abbr: 'P',
            on: false
        }
    ];

    var gradClasses = [
        {
            name: 'Frashman',
            abbr: 'FR',
            on: false
        },
        {
            name: 'Sophomore',
            abbr: 'SO',
            on: false
        },
        {
            name: 'Junior',
            abbr: 'JR',
            on: false
        },
        {
            name: 'Senior',
            abbr: 'SR',
            on: false
        },
        {
            name: 'Incoming',
            abbr: 'IN',
            on: false
        },
        {
            name: 'Allumni',
            abbr: 'AL',
            on: false
        }
    ];


    var teams = ['Redshirts', 'Starter', 'Junior Varsity', 'Varsity'];

    var gradYears = [2014,2015,2016,2017,2018,2019];    

    var seasons = [
        {
            year: 2015,
            on: false
        },
        {
            year: 2014,
            on: false
        },
        {
            year: 2013,
            on: false
        },
        {
            year: 2012,
            on: false
        },
        {
            year: 2011,
            on: false
        },
        {
            year: 2010,
            on: false
        }
    ];

    var feet = [ 
        {label: '4\'', val: '4'},
        {label: '5\'', val: '5'},
        {label: '6\'', val: '6'},
        {label: '7\'', val: '7'}
    ];
    var inches = [ 
        {label: '0"', val: '0'},
        {label: '1"', val: '1'},
        {label: '2"', val: '2'},
        {label: '3"', val: '3'},
        {label: '4"', val: '4'},
        {label: '5"', val: '5'},
        {label: '6"', val: '6'},
        {label: '7"', val: '7'},
        {label: '8"', val: '8'},
        {label: '9"', val: '9'},
        {label: '10"', val: '10'},
        {label: '11"', val: '11'},
        {label: '12"', val: '12'}
    ];

    var avatarUrls = [
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2014/3/17/huffman_connor_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/welsh_michael_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/6724312.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930067.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930076.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/warrick_jacorey_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930070.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380156.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/heard_jerrod_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8600283.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/greenwood_jimmy_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930677.jpeg',
        'http://www.texassports.com/images/2013/6/25/7930073.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/22/vinklarek_logan_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/roberts_jr_jermaine_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/catalon_donald_2014_2.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2014/7/8/rose_nick_2014_web.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930075.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7478196.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930074.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/bonney_john_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/davis_antwuan_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930060.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8600279.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/bernard_roderick_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/6724309.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930078.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/17/yoder_tim_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930072.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/hall_jason_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930063.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/huhn_erik_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/8/20/foreman_d_onta_2014_polo_78.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/freeman_edwin_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930676.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380131.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/29/moore_evan_2015_96.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2013/10/25/becker_mitchell_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8613311.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380147.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930056.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/hafley_trenton_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/hughes_naashon_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8600281.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/29/harper_jay_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7176250.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930055.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2014/3/17/beck_andrew_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380160.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/strickland_jordan_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/11/18/tseng_johnny_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/jefferson_malik_2015_41.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/roberson_derick_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/sims_matthew_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7175892.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/mercado_alex_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/cuney_terrell_2014_2.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/holbrook_jak_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8600282.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/graf_garrett_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/williams_connor_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930087.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380162.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/29/ojeaga_patrick_2015_81.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/hodges_brandon_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2014/3/17/anderson_alex_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8600280.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/6724310.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/17/allsup_austin_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7478187.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/22/rodriguez_elijah_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/6724303.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/nickelson_tristan_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/perkins_kent_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/thomas_garrett_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/25/roberts_ryan_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/11/25/wilson_michael_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2014/3/17/whiteley_blake_2014_68.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_2&image_path=/images/2013/10/25/center_matt_2013.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/foreman_armanti_2014_2.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/joe_lorenzo_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/4/29/moeller_philipp_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/gray_garret_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2013/8/6/oliver_jake_2013_.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/leonard_dorian_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930064.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/8380169.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2015/3/20/vasser_quincy_2015.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930080.jpeg',
        'http://www.texassports.com/images/2013/6/25/7930057.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/ford_poona_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/nelson_chris_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=headshot_1&image_path=/images/2014/7/21/mcmillon_jake_2014.jpg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/6724315.jpeg',
        'http://www.texassports.com/common/controls/image_handler.aspx?thumb_prefix=player&image_path=/images/2013/6/25/7930082.jpeg'
    ];

    var streets = ['Park','Oak','Pine','Maple','Cedar','Elm','Washington','Lake','Hill','Lakeview','Meadowbrook','Lakeside','Briar','Kennedy'];
    var streetPrefixes = ['St','Ln','Blvd','Pkwy','Ave','Ct'];
    var noteList = ['Team player','Rookie','Quick on his feet','Excellant agility','Quick reflexes','Captain material','Needs to work on running the ball','Great long distance runner','','',''];
    var firstNames = ['Bennett','Aiden','Sage','Liam','Michael','William','Mason','Jacob','Everett','River','Preston','Kelly','Carter','David','Eli','Carson','Alexander','Matthew','Noah','Gabriel','Jack','Jaxon','Ethan','Daniel','James','Jonathan','Cameron','Christopher','Logan','Jordan','Saint','Casey','August','Hunter','Dylan','Dominic','Benjamin','Nolan','Nicholas','Henry','Isaac','Lucas','Titan','Alexis','Emmett','Royal','Beckett','Buzz','Jayden','Brooks','Atticus','Gus','Silus','Miller','Zacharias','Lane','Kayden','Kai','Sebastian','Carey','Devon','Ryan','Joseph','Grayson','Madison','Jamie','Brantley','Duncan','Rory','Robin','Jayce','Xander','Dexter','Wyatt','Zayden','Connor','Tyler','Spenceer','Tatum','Austin','Angus','Ewan','Lennox','Zayn','Tristan','Atlas','Forrest','Finlay','Lachlan','Kellen','Nathan','Samuel','Caleb','Magnus','Joe','Dune','Owen','Andrew','Chandler','Kale'];
    var lastNames = ['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez','Lewis','Lee','Walker','Hall','Allen','Young','Hernandez','King','Wright','Lopez','Hill','Scott','Green','Adams','Baker','Gonzalez','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins','Stewart','Sanchez','Morris','Rogers','Reed','Cook','Morgan','Bell','Murphy','Bailey','Rivera','Cooper','Richardson','Cox','Howard','Ward','Torres','Peterson','Gray','Ramirez','James','Watson','Brooks','Kelly','Sanders','Price','Bennett','Wood','Barnes','Ross','Henderson','Coleman','Jenkins','Perry','Powell','Long','Patterson','Hughes','Flores','Washington','Butler','Simmons','Foster','Gonzales','Bryant','Alexander','Russell','Griffin','Diaz','Hayes'];
    var usedValues = {};
    var roster = [];

    randNum = function(min,max) {
        return Math.round(Math.random() * (max - min) + min)
    };

    randUniqueNum = function(id,min,max) {
        if(!usedValues[id] || usedValues[id].length === 0) {
            usedValues[id] = [];
            for(u = min; u <= max; u++) {
                usedValues[id].push(u);
            }     
        }
        var index = randNum(0,usedValues[id].length-1);
        var val = usedValues[id][index]
        usedValues[id].splice(index,1);
        return val;
    };

    randArray = function(id,min,max,input,key) {
        var output = [];
        for(n = 0; n < (randNum(min,max)); n++) {
            output.push(input[randUniqueNum(id,0,input.length-1)][key]);
        }
        usedValues[id] = [];
        return output;
    };

    generatePlayers = function(teamSize) {
        var id = 1000000
        for (i = 0; i <= teamSize; i++) { 
            var num = randUniqueNum('num',1,teamSize),
                gradYr = gradYears[randUniqueNum('gradYears',0,gradYears.length-1)],
                first = firstNames[randUniqueNum('firstName',0,firstNames.length-1)],
                last = lastNames[randUniqueNum('lastName',0,lastNames.length-1)],
                pos = randArray('pos',1,2,positions,'abbr'),
                seasns = randArray('seasns',1,4,seasons,'year'),
                feet = randNum(5,6),
                inches = randNum(0,12),
                weight = randNum(150,300),
                email = first.toLowerCase()+'.'+last.toLowerCase()+'@hudl.com',
                mphone = '('+randNum(100,999)+') '+randNum(100,999)+'-'+randNum(1000,9999),
                hphone = '('+randNum(100,999)+') '+randNum(100,999)+'-'+randNum(1000,9999),
                line1 = randNum(1000,9999)+' '+streets[randNum(0,streets.length-1)]+' '+streetPrefixes[randNum(0,streetPrefixes.length-1)]+'.',
                line2 = 'Apt. #'+randNum(100,999),
                city = 'Austin',
                state = 'TX',
                zip = 78712,
                avatarUrl = avatarUrls[randUniqueNum('avatarUrls',0,avatarUrls.length-1)],
                notes = noteList[randNum(0,noteList.length-1)],
                activity = [];
            for (j = 0; j < randNum(25,50); j++) {
                activity.push({date:randNum(1,12)+'/'+randNum(1,30)+'/'+randNum(10,15), time: randNum(10,200)});
            }
            roster.push({id:id,num:num,gradYr:gradYr,name:{first:first,last:last},positions:pos,seasons:seasns,height:{feet:feet,inches:inches},weight:weight,email:email,mphone:mphone,hphone:hphone,address:{line1:line1,line2:line2,city:city,state:state,zip:zip},avatarUrl:avatarUrl,notes:notes,activity:activity});
            id++;
        }
    }

    $scope.calculateClass = function(id) {
        var currentYear = new Date().getFullYear();
        var currentMonth = new Date().getMonth()+1;
        var schoolYearOffset = 0;
        var index;
        if(currentMonth > 5) {
            schoolYearOffset = 1;
        }
        for(i in $scope.roster) {
            if(id === $scope.roster[i].id) {
                index = i;
            }
        }
        if($scope.roster[index].gradYr <= currentYear-schoolYearOffset) {
            $scope.roster[index].cls = 'AL';
        } else if($scope.roster[index].gradYr === currentYear+1-schoolYearOffset) {
            $scope.roster[index].cls = 'SR';
        } else if($scope.roster[index].gradYr === currentYear+2-schoolYearOffset) {
            $scope.roster[index].cls = 'JR';
        } else if($scope.roster[index].gradYr === currentYear+3-schoolYearOffset) {
            $scope.roster[index].cls = 'SO';
        } else if($scope.roster[index].gradYr === currentYear+4-schoolYearOffset) {
            $scope.roster[index].cls = 'FR';
        } else {
            $scope.roster[index].cls = 'IN';
        }
    }

    $scope.rosterOrder = function(predicate) {
        $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.positionChange = function() {
        if($scope.addingNewPlayer) {
            $scope.removeNewPlayer();
        }
        for(i in $scope.positions){
            if($scope.positions[i].on){
                $scope.showAllPositions = false;
                return;
            }
        }
        $scope.showAllPositions = true;
    };

    $scope.positionsFilter = function(a) {
        if($scope.showAllPositions) { return true; }
        for(i in $scope.positions){
            if(!a.positions) return;
            var p = $scope.positions[i];
            if(p.on && a.positions.indexOf(p.abbr) > -1){
                return true;   
            }               
        }
    };

    $scope.gradClassChange = function() {
        if($scope.addingNewPlayer) {
            $scope.removeNewPlayer();
        }
        for(i in $scope.gradClasses){
            if($scope.gradClasses[i].on){
                $scope.showAllGradClasses = false;
                return;
            }
        }
        $scope.showAllGradClasses = true;
    };

    $scope.gradClassesFilter = function(a) {
        if($scope.showAllGradClasses) { return true; }
        for(i in $scope.gradClasses){
            if(!a) return;
            var g = $scope.gradClasses[i];
            if(g.on && a.cls == g.abbr){
                return true;   
            }               
        }
    };

    $scope.seasonsChange = function(i) {
        if($scope.addingNewPlayer) {
            $scope.removeNewPlayer();
        }
        for(index in $scope.seasons) {
            $scope.seasons[index].on = false;
        }
        if(typeof i !== 'undefined') {
            $scope.seasons[i].on = true;
            $scope.showAllSeasons = false;
        } else {
            $scope.showAllSeasons = true;
        }
    };

    $scope.seasonsFilter = function(a) {
        if($scope.showAllSeasons) { return true; }
        for(i in $scope.seasons){
            if(!a.seasons) return;
            var s = $scope.seasons[i];
            if(s.on && a.seasons.indexOf(s.year) > -1){
                return true;   
            }               
        }
    };

    $scope.editPlayer = function() {
        $scope.editingPlayer = true;
    };

    $scope.cancelEditPlayer = function() {
        $scope.editingPlayer = false;
        $scope.selectPlayer($scope.activePlayer.id);
        if($scope.addingNewPlayer) {
            $scope.removeNewPlayer();
        }
    };

    $scope.saveEditPlayer = function() {
        $scope.editingPlayer = false;
        $scope.addingNewPlayer = false;
        var saveId = $scope.activePlayer.id;
        for(i in $scope.roster) {
            if(saveId === $scope.roster[i].id) {
                delete $scope.activePlayer.positionString;
                $scope.roster[i] = $scope.activePlayer;
            }
        }
        $scope.calculateClass($scope.activePlayer.id);
        $scope.selectPlayer($scope.activePlayer.id);
    };

    $scope.addNewPlayer = function() {
        if(!$scope.addingNewPlayer) {
            var rosterId = 0;
            for(i in $scope.roster) {
                if(rosterId < $scope.roster[i].id) {
                    rosterId = $scope.roster[i].id;
                }
            }
            rosterId++;
            $scope.roster.push({});
            $scope.roster[$scope.roster.length-1].id = rosterId;
            $scope.selectPlayer(rosterId);
            $scope.editingPlayer = true;
            $scope.addingNewPlayer = true;
            $scope.clearFilters();            
        }
    };

    $scope.removeNewPlayer = function() {
        $scope.roster.splice($scope.roster.length-1,1);
        $scope.addingNewPlayer = false;
        $scope.selectPlayerByIndex($scope.filteredRosterPlayerIndex-1);
    };

    $scope.deletePlayer = function(id) {
        var playerIndexBeforeDeleted = 0;
        id = (!id) ? $scope.activePlayer.id : id;
        if($scope.roster.length > 0) {
            for(i in $scope.roster) {
                if(id === $scope.roster[i].id) {
                    playerIndexBeforeDeleted = parseInt($scope.filteredRosterPlayerIndex);
                    $scope.roster.splice(i,1);
                }
            }
            $scope.addingNewPlayer = false;
            $scope.editingPlayer = false;
            $scope.$apply();
            if(playerIndexBeforeDeleted < $scope.filteredRoster.length-1) {
                $scope.selectPlayerByIndex(parseInt($scope.filteredRosterPlayerIndex));            
            } else {
                $scope.selectPlayerByIndex($scope.filteredRoster.length-1);
            }
        }
    };

    $scope.selectPlayer = function(id) {
        $scope.editingPlayer = false;
        for(i in $scope.filteredRoster) {
            if($scope.filteredRoster[i].id === id ) {
                $scope.filteredRosterPlayerIndex = i;
            }
        }
        for(i in $scope.roster) {
            if($scope.roster[i].id === id) {
                $scope.rosterPlayerIndex = i;
            }
        }
        var player = $scope.roster[$scope.rosterPlayerIndex];
        player = angular.toJson(player,true);
        player = JSON.parse(player);
        $scope.activePlayer = player;
        $scope.activePlayer.positionString = '';
        var first = true;
        for(i in $scope.activePlayer.positions) {
            for(p in $scope.positions) {
                if($scope.activePlayer.positions[i] === $scope.positions[p].abbr) {
                    $scope.activePlayer.positionString += (!first) ? ' + ' : '';
                    first = false;
                    $scope.activePlayer.positionString += $scope.positions[p].name;
                }
            }
        }
        if($scope.addingNewPlayer) {
            $scope.removeNewPlayer();
        }
        $('.roster-body-wrap').focus();
    };

    $scope.selectPlayerByIndex = function(index) {
        $scope.selectPlayer($scope.filteredRoster[index].id);
    };

    $scope.selectPrevPlayer = function() {
        if($scope.filteredRosterPlayerIndex>0) {
            $scope.selectPlayerByIndex(parseInt($scope.filteredRosterPlayerIndex)-1);
        }
    }

    $scope.selectNextPlayer = function() {
        if($scope.filteredRosterPlayerIndex<$scope.filteredRoster.length-1) {
            $scope.selectPlayerByIndex(parseInt($scope.filteredRosterPlayerIndex)+1);
        }
    }

    $scope.scrollToSelection = function() {
        var scrollWrap = $('.roster-body-wrap');
        var itemHeight = 48;
        var adjWindowScroll = scrollWrap.scrollTop()+scrollWrap.height()-itemHeight;
        var adjSelectedScroll = $scope.filteredRosterPlayerIndex*48;
        if(adjSelectedScroll > adjWindowScroll) {
            scrollWrap.scrollTop(adjSelectedScroll-scrollWrap.height()+itemHeight-1);
        } else if(scrollWrap.scrollTop() > $scope.filteredRosterPlayerIndex*48) {
            scrollWrap.scrollTop($scope.filteredRosterPlayerIndex*48);
        }    
    }

    $scope.keyPress = function(e) {
        var key = {
            tab: 9,
            enter: 13,
            esc: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            shift: 16,
            ctrl: 17,
            alt: 18,
            backspace: 8,
            del: 46,
            command: 91
        };
        if(e.keyCode == key.up || e.keyCode == key.down || e.keyCode == key.del || e.keyCode == key.backspace) {
            e.preventDefault();       
        }
        switch(e.keyCode) {
            case key.up: $scope.selectPrevPlayer(); $scope.scrollToSelection();
            break;
            case key.down: $scope.selectNextPlayer(); $scope.scrollToSelection();
            break;
            case key.del: $scope.deletePlayer($scope.activePlayer.id);
            break;
            case key.backspace: $scope.deletePlayer($scope.activePlayer.id);
            break;
        }
    }

    $scope.refreshData = function() {
        $scope.roster = [];
        roster = [];
        generatePlayers(100);
        $scope.roster = roster;
        for(i in $scope.roster) {
            $scope.calculateClass($scope.roster[i].id);
        } 
    }

    $scope.printRoster = function() {
        window.print();
    }

    $scope.clearRosterSearch = function(event) {
        $scope.rosterSearch = '';
        if($('#roster-search').is(":focus")) {
            $('#roster-search').focus();
        }
    }

    $scope.rosterSearchMouseDown = function(event) {
        event.preventDefault();
    }

    $scope.clearFilters = function() {
        for(i in $scope.positions) {
            $scope.positions[i].on = false;
        }
        for(i in $scope.gradClasses) {
            $scope.gradClasses[i].on = false;
        }
        for(i in $scope.seasons) {
            $scope.seasons[i].on = false;
        }
        $scope.showAllPositions = true;
        $scope.showAllGradClasses = true;
        $scope.showAllSeasons = true;
    }

    $scope.init = function() {
        $store.bind($scope, 'roster', roster);
        if(typeof $scope.roster !== 'undefined' && $scope.roster.length > 0) {
            for(i in $scope.roster) {
                if(typeof $scope.roster[i].name === 'undefined' && typeof $scope.roster[i].num === 'undefined') {
                    $scope.roster.splice(i,1);
                }
            }
        } else {
            generatePlayers(100);
            $scope.roster = roster;  
        }
        for(i in $scope.roster) {
            $scope.calculateClass($scope.roster[i].id);
        } 
        $scope.positions = positions;
        $scope.gradClasses = gradClasses;
        $scope.seasons = seasons;
        $rootScope.teams = teams;
        $scope.gradYears = gradYears;
        $scope.feet = feet;
        $scope.inches = inches;
        $scope.showAllPositions = true;
        $scope.showAllGradClasses = true;
        $scope.showAllSeasons = true;
        $scope.isArray = angular.isArray;
        $scope.predicate = 'num';
        $scope.reverse = false;
        $rootScope.currentTeam = $rootScope.teams[3];
        var listener = $scope.$watch("filteredRoster", function () {
            if(typeof $scope.filteredRoster !== 'undefined' && $scope.filteredRoster.length > 0) {
                listener();
                $scope.selectPlayerByIndex(0);
            };
        });
        var refreshed = false;
        $store.bind($scope, 'refreshed', refreshed);
        if(!$scope.refreshed) {
            $scope.refreshData();
            $scope.refreshed = true;
        }
    }
    $scope.init();

}]);