var storyContent;
storyContent = {
    "inkVersion": 18,
    "root": [[{"->": "BEGIN"}, ["done", {
        "#f": 7,
        "#n": "g-0"
    }], null], "done", {
        "BEGIN": [["^Dana and Kimmy walked from Kimmy's house downtown. As they approached Frames and Glass, a store downtown, they saw a young boy around Kimmy's age reading a comic.", "\n", "^Further to the right of the young boy, a girl dressed like a ballerina stands near an older boy dressed in green with an ascot.", "\n", "ev", "str", "^Talk to Boy and Girl", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, "ev", "str", "^Go back Home", "/str", "/ev", {
            "*": ".^.c-1",
            "flg": 4
        }, {
            "c-0": ["^ ", {"->": "Anthony1"}, "\n", {"#f": 7}],
            "c-1": ["^ ", {"->": "Kimmys_House"}, "\n", {"#f": 7}]
        }], {"#f": 3}],
        "Anthony1": ["^Kimmy and Dana appoach the girl and boy...", "\n", "^Dana: Hey Anthony. ", {"->": "Anthony2"}, "\n", {"#f": 3}],
        "Anthony2": [["^Anthony: Hi Dana. It’s so weird seeing you outside of school, haha.", "\n", "^Amber: I’m Amber!", "\n", "^Anthony: This is my little sister, Amber. Is that your sister, Dana? I didn’t know you had a little sister.", "\n", "ev", "str", "^Reveal", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana1"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana1": [["^Dana: Oh, no… This is Kimmy. I’m her babysitter.", "\n", "^Anthony: Isn’t Kimmy the girl that Jim--", "\n", "^Amber: Anthony! I know you’re mad at Jimmy, but--", "\n", "^Anthony: I know, I know, nevermind.", "\n", "ev", "str", "^Interject", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana2"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana2": ["^Dana: Uhhhh… what? What’s the gossip?", "\n", {"->": "Amber1"}, {"#f": 3}],
        "Amber1": [["^Amber: Nevermind! Hi Kimmy. I remember seeing you walk to school last year. Isn’t it a bit far to walk? You should ride a bike, at least.", "\n", "^Kimmy: Oh… I don’t know.", "\n", "^Anthony: Are you two headed somewhere? You should hang out with Amber and I.", "\n", "ev", "str", "^Voice opinion", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana3"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana3": [["^Dana: Well, we’d like to play a game!", "\n", "^Anthony: We’d been playing games with Harold earlier… but maybe we could try something new? Amber’s kinda picky though--fair warning.", "\n", "^Amber: Am not!", "\n", "ev", "str", "^reveal", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana4"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana4": [["^Dana: Oh no! Im sorry...I thought I had some stuff to play games with in my bag...but it looks like i've ran out.", "\n", "^Kimmy: Oh no...", "\n", "^Dana: It's okay Kimmy. let's run to the store and buy some game pieces. We'll be right back!", "\n", "ev", "str", "^Go to Store", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "Kimmys_House"}, {"#f": 7}]}], {"#f": 3}],
        "Kimmys_House": [["^Dana and Kimmy shuffled back towards Kimmy's house, and to the store next to it.", "\n", "^As they approached the store they noticed a girl about Kimmy's age tapping her foot impatiently. They went on to purchase their game peices.", "\n", "ev", "str", "^Talk to Clerk", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "Clerk"}, {"#f": 7}]}], {"#f": 3}],
        "Clerk": [["^Dean: Hey, Kid.", "\n", "ev", "str", "^respond", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana5"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana5": [["^Dana: Hi, Dean. This is Kimmy. I’m babysitting her now.", "\n", "^Dean: Well lookit that, aren’t you all grown up. You gettin’ paid?", "\n", "^Kimmy: My mom pays Dana a quarter a day.", "\n", "ev", "str", "^Word vomit", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["^ ", {"->": "Dana6"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana6": [["^Dana: That’s right! I’m here to buy some things… I mean, I haven’t gotten paid yet. This is my first day. But I have some money saved up!", "\n", "^Dean: Hah, I wish I had that kinda discipline. I blew my budget on fabric last week.", "\n", "ev", "str", "^relate to the Homie", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": [{"->": "Dana7"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana7": [["^Dana: I need to save up money. For college, you know! My mom would get so mad if I didn’t plan ahead.", "\n", "^Dean: Hah! Your mom’s got the right idea. I wish I’d saved up for college.", "\n", "^Dana: So what did you spend all your money on? Your sewing classes?", "\n", "ev", "str", "^joke", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": [{"->": "Dana8"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana8": [["^Dean: Nah, that’s over. I’m workin’ on some Halloween costumes for my cousins… and some new pants for myself. You know, gotta apply those skills somehow.", "\n", "^Kimmy: I didn’t know people made clothes!", "\n", "ev", "str", "^Cringe", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": [{"->": "Dana9"}, "\n", {"#f": 7}]}], {"#f": 3}],
        "Dana9": [["^Dean: They do, Kimmy, they do. I make sweaters, dresses, hats--you name it.", "\n", "ev", "str", "^Damage control / flirt", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "Dana10"}, {"#f": 7}]}], {"#f": 3}],
        "Dana10": [["^Dana: You should sell your clothes at Jordan Marsh! That’s where I always find the nicest clothes.", "\n", "^Dean: Hah! That’s a long ways off for me. But maybe someday… anyways, what can I get for ya?", "\n", "ev", "str", "^Store", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "store2"}, {"#f": 7}]}], {"#f": 3}],
        "store2": [["^Dana And Kimmy browse the stores inventory.", "\n", "^They have ", "ev", {"VAR?": "money"}, "out", "/ev", "^ cents.", "\n", "^Rope costs 6 cents", "\n", "^dice cost 4 cents", "\n", "^chalk costs 6 cents", "\n", ["ev", {"^->": "store2.0.15.$r1"}, {"temp=": "$r"}, "str", {"->": ".^.s"}, [{"#n": "$r1"}], "/str", "/ev", {
            "*": ".^.^.c-0",
            "flg": 18
        }, {
            "s": ["^buy Rope ", {
                "->": "$r",
                "var": true
            }, null]
        }], ["ev", {"^->": "store2.0.16.$r1"}, {"temp=": "$r"}, "str", {"->": ".^.s"}, [{"#n": "$r1"}], "/str", "/ev", {
            "*": ".^.^.c-1",
            "flg": 18
        }, {
            "s": ["^buy dice ", {
                "->": "$r",
                "var": true
            }, null]
        }], ["ev", {"^->": "store2.0.17.$r1"}, {"temp=": "$r"}, "str", {"->": ".^.s"}, [{"#n": "$r1"}], "/str", "/ev", {
            "*": ".^.^.c-2",
            "flg": 18
        }, {
            "s": ["^buy chalk ", {
                "->": "$r",
                "var": true
            }, null]
        }], {
            "c-0": ["ev", {"^->": "store2.0.c-0.$r2"}, "/ev", {"temp=": "$r"}, {"->": ".^.^.15.s"}, [{"#n": "$r2"}], {"->": "rope"}, "\n", {"#f": 7}],
            "c-1": ["ev", {"^->": "store2.0.c-1.$r2"}, "/ev", {"temp=": "$r"}, {"->": ".^.^.16.s"}, [{"#n": "$r2"}], {
                "->": "dice",
                "var": true
            }, "\n", {"#f": 7}],
            "c-2": ["ev", {"^->": "store2.0.c-2.$r2"}, "/ev", {"temp=": "$r"}, {"->": ".^.^.17.s"}, [{"#n": "$r2"}], {
                "->": "chalk",
                "var": true
            }, "\n", {"#f": 7}]
        }], {"#f": 3}],
        "rope": ["ev", {"VAR?": "RopeCost"}, {"VAR?": "money"}, "<", "/ev", [{
            "->": ".^.b",
            "c": true
        }, {
            "b": ["\n", "ev", {"VAR?": "money"}, {"VAR?": "RopeCost"}, "-", "/ev", {
                "temp=": "money",
                "re": true
            }, "ev", 1, "/ev", {"temp=": "Rope", "re": true}, {"->": "purchase"}, {"->": "rope.7"}, null]
        }], [{"->": ".^.b"}, {
            "b": ["\n", "^You can't afford this.", "\n", "ev", "str", "^Keep shopping", "/str", "/ev", {
                "*": ".^.c-0",
                "flg": 4
            }, {"->": "rope.7"}, {"c-0": ["\n", {"->": "store2"}, {"#f": 7}]}]
        }], "nop", "\n", {"#f": 3}],
        "purchase": [["^you bought this Item.", "\n", "ev", "str", "^Keep Shopping", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, "ev", "str", "^leave store", "/str", "/ev", {
            "*": ".^.c-1",
            "flg": 4
        }, "ev", "str", "^leave Store", "/str", "/ev", {
            "*": ".^.c-2",
            "flg": 4
        }, {
            "c-0": ["\n", {"->": "store2"}, {"#f": 7}],
            "c-1": ["\n", {"->": "timejump"}, "^After they finish purchasing their items they leave the store.", "\n", "^Dana: Thanks, Dean!", "\n", "^Kimmy: Thank you, Mr. Dean!", "\n", "^Dean: Bye bye girls. Have fun.", "\n", {"#f": 7}],
            "c-2": ["\n", {"->": "timejump"}, {"#f": 7}]
        }], {"#f": 3}],
        "timejump": [["^One Hour Later...", "\n", "ev", "str", "^Proceed", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "Return"}, {"#f": 7}]}], {"#f": 3}],
        "Return": [["^After having purchased the items needed to play game with Anthony and Amber, Kimmy and Dana walk back downtown to meet them.", "\n", "^Dana and Kimmy appoach Anthony and Amber.", "\n", "ev", "str", "^Play game with Anthony and Amber", "/str", "/ev", {
            "*": ".^.c-0",
            "flg": 4
        }, {"c-0": ["\n", {"->": "Game"}, {"#f": 7}]}], {"#f": 3}],
        "Game": ["^Kimmy and Dana unpack their new belongings in preperation for a game.", "\n", "^Kimmy: What Game should we play?", "\n", "end", {"#f": 3}],
        "global decl": ["ev", 25, {"VAR=": "money"}, 0, {"VAR=": "dice"}, 0, {"VAR=": "chalk"}, 0, {"VAR=": "Rope"}, 6, {"VAR=": "RopeCost"}, 4, {"VAR=": "DiceCost"}, 6, {"VAR=": "chalkCost"}, "/ev", "end", null],
        "#f": 3
    }],
    "listDefs": {}
};