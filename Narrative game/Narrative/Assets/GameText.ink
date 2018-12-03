VAR money = 25
VAR dice = false
VAR chalk = false
VAR Rope = false
VAR RopeCost = 6
VAR DiceCost = 4
VAR chalkCost = 6




-> BEGIN
== BEGIN
Dana and Kimmy walked from Kimmy's house downtown. As they approached Frames and Glass, a store downtown, they saw a young boy around Kimmy's age reading a comic.
Further to the right of the young boy, a girl dressed like a ballerina stands near an older boy dressed in green with an ascot.
+ [Talk to Boy and Girl] ->Anthony1
+[Go back Home] -> Kimmys_House
==Anthony1
Kimmy and Dana appoach the girl and boy...


Dana: Hey Anthony. -> Anthony2
==Anthony2
Anthony: Hi Dana. It’s so weird seeing you outside of school, haha.
Amber: I’m Amber!
Anthony: This is my little sister, Amber. Is that your sister, Dana? I didn’t know you had a little sister.
+[Reveal] -> Dana1
==Dana1
Dana: Oh, no… This is Kimmy. I’m her babysitter.
Anthony: Isn’t Kimmy the girl that Jim--
Amber: Anthony! I know you’re mad at Jimmy, but--
Anthony: I know, I know, nevermind.
+[Interject] -> Dana2
==Dana2
Dana: Uhhhh… what? What’s the gossip?
->Amber1
==Amber1
Amber: Nevermind! Hi Kimmy. I remember seeing you walk to school last year. Isn’t it a bit far to walk? You should ride a bike, at least.
Kimmy: Oh… I don’t know.
Anthony: Are you two headed somewhere? You should hang out with Amber and I.
+[Voice opinion] -> Dana3
==Dana3
Dana: Well, we’d like to play a game!
Anthony: We’d been playing games with Harold earlier… but maybe we could try something new? Amber’s kinda picky though--fair warning.
Amber: Am not!
+[reveal] ->Dana4
== Dana4

Dana: Oh no! Im sorry...I thought I had some stuff to play games with in my bag...but it looks like i've ran out.
Kimmy: Oh no...
Dana: It's okay Kimmy. let's run to the store and buy some game pieces. We'll be right back!
+ [Go to Store]
-> Kimmys_House
== Kimmys_House

Dana and Kimmy shuffled back towards Kimmy's house, and to the store next to it.
As they approached the store they noticed a girl about Kimmy's age tapping her foot impatiently. They went on to purchase their game peices.
+[Talk to Clerk]
-> Clerk
== Clerk


Dean: Hey, Kid.
+[respond] -> Dana5
==Dana5
Dana: Hi, Dean. This is Kimmy. I’m babysitting her now.
Dean: Well lookit that, aren’t you all grown up. You gettin’ paid?
Kimmy: My mom pays Dana a quarter a day.
+[Word vomit] -> Dana6
==Dana6
Dana: That’s right! I’m here to buy some things… I mean, I haven’t gotten paid yet. This is my first day. But I have some money saved up!
Dean: Hah, I wish I had that kinda discipline. I blew my budget on fabric last week.
+[relate to the Homie]->Dana7
==Dana7
Dana: I need to save up money. For college, you know! My mom would get so mad if I didn’t plan ahead.
Dean: Hah! Your mom’s got the right idea. I wish I’d saved up for college.
Dana: So what did you spend all your money on? Your sewing classes?
+[joke]->Dana8
==Dana8
Dean: Nah, that’s over. I’m workin’ on some Halloween costumes for my cousins… and some new pants for myself. You know, gotta apply those skills somehow.
Kimmy: I didn’t know people made clothes!
+[Cringe]->Dana9
==Dana9
Dean: They do, Kimmy, they do. I make sweaters, dresses, hats--you name it.
+[Damage control / flirt]
->Dana10
==Dana10
Dana: You should sell your clothes at Jordan Marsh! That’s where I always find the nicest clothes.
Dean: Hah! That’s a long ways off for me. But maybe someday… anyways, what can I get for ya?
+[Store]
-> store2
== store2

Dana And Kimmy browse the stores inventory.
They have {money} cents.
Rope costs 6 cents
dice cost 4 cents
chalk costs 6 cents
* buy Rope -> rope
*buy dice -> dice
*buy chalk -> chalk
== rope
{ RopeCost < money:
~ money = money - RopeCost
~ Rope = true
-> purchase
- else:
You can't afford this.
+[Keep shopping]
-> store2
}
== purchase
you bought this Item.
+[Keep Shopping]
-> store2
+[leave store]
-> timejump

After they finish purchasing their items they leave the store.

Dana: Thanks, Dean!
Kimmy: Thank you, Mr. Dean!
Dean: Bye bye girls. Have fun.
+[leave Store]
-> timejump
== timejump


One Hour Later...
+[Proceed]
-> Return
== Return

After having purchased the items needed to play game with Anthony and Amber, Kimmy and Dana walk back downtown to meet them.

Dana and Kimmy appoach Anthony and Amber.
+[Play game with Anthony and Amber]
-> Game
== Game
Kimmy and Dana unpack their new belongings in preperation for a game.

Kimmy: What Game should we play?
-> END

