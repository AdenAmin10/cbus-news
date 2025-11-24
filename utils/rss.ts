export type FeedItem = {
  slug: string;
  title: string;
  articleUrl: string;
  contentSnippet?: string;
  content?: string;
  imageUrl?: string;
  publishedAt?: string;
  editor?: string;
};

export type FeedSource = {
  source: string;
  description: string;
  items: FeedItem[];
};

const ohioStateFeed: FeedSource = {
  source: "Ohio State",
  description:
    "Daily CityLine Sports coverage of Ohio State football, basketball, wrestling, soccer, and recruiting as of November 16, 2023.",
  items: [
    {
      slug: "osu-defense-dominates-nebraska",
      title: "Buckeye defense stacks five sacks, shuts down Nebraska on the road",
      articleUrl: "https://cbusnews.local/story/osu-defense-dominates-nebraska",
      contentSnippet:
        "Ohio State’s front seven buried the Huskers, holding them to 214 total yards and forcing three turnovers in Lincoln.",
      content: `<p>Top-ranked Ohio State strengthened its grip on the Big Ten and preserved its undefeated season with a commanding 42–9 victory over Rutgers at Ohio Stadium on November 22, 2025. The win lifted the Buckeyes to 11–0 overall and 8–0 in conference play, keeping their postseason ambitions squarely on track.
Rutgers, meanwhile, fell to 5–6 (2–6 Big Ten) and now faces a must-win scenario in its final regular-season game to achieve bowl eligibility.
Slow Start, Strong Finish
The Buckeyes led just 14–3 at halftime before exploding for 28 second-half points, putting the game firmly out of reach. Ohio State’s rushing attack proved overwhelming, piling up 254 yards on the ground, a performance that showcased the team's evolving run-first identity.
Despite missing their top two wide receivers, Ohio State’s offense rarely looked unsettled—an encouraging sign heading into the final week of the regular season.
Ohio State’s Standout Performers
Quarterback Julian Sayin delivered another poised showing, completing 13 of 19 passes for 157 yards and two touchdowns.
Running back Bo Jackson powered the ground game with 110 yards and two scores, while tight end Max Klare continued his breakout season with seven catches for 105 yards and a touchdown.
Ohio State’s offensive line dominated the line of scrimmage, helping the Buckeyes average over 7 yards per carry, a statistic that underscores their growing confidence and identity as a run-heavy powerhouse.
Rutgers Struggles to Gain Traction
Rutgers’ offense never found rhythm against Ohio State’s suffocating defense. The Scarlet Knights managed just 147 total yards and crossed into scoring range only a handful of times.
Quarterback Athan Kaliakmanis completed 10 of 20 passes for 81 yards, unable to consistently challenge Ohio State’s secondary.
While Rutgers’ defense held strong early, it ultimately couldn’t contain the Buckeyes’ depth and physicality for four quarters.
What the Win Means
For Ohio State, the victory keeps them on the inside track for a Big Ten title and a College Football Playoff berth. With momentum building and a balanced offense emerging—even with key receivers sidelined—the Buckeyes appear poised for a postseason run.
For Rutgers, the challenge now becomes regrouping quickly. One final opportunity remains to secure bowl eligibility and build confidence heading into the offseason.</p>
<p>The win keeps Ohio State unbeaten heading into the marquee matchup with Michigan, with the defense carrying confidence from its most complete road performance of the season.</p>`,
      imageUrl: "https://ohiostatebuckeyes.com/images/2025/11/22/DSC07850.jpg",
      publishedAt: "2023-11-18",
      editor: "Miles Porter",
    },
    {
      slug: "osu-notre-dame-statement-win",
      title: "Ohio State outlasts Notre Dame in statement win behind late surge",
      articleUrl: "https://cbusnews.local/story/osu-notre-dame-statement-win",
      contentSnippet:
        "Buckeye guards closed strong as Ohio State beat Notre Dame at the Schottenstein Center, delivering timely defense and clutch scoring down the stretch.",
      content: `<p>Ohio State leaned on its backcourt toughness to outlast Notre Dame in a marquee nonconference showdown. The first half was a tug-of-war, with neither team leading by more than six. Notre Dame’s precision offense forced the Buckeyes to stay locked in, while Jake Diebler’s squad answered with athleticism and perimeter shot-making.</p>
<p>Coming out of halftime, improved ball movement unlocked a 9-0 run fueled by transition finishes and downhill drives. The Fighting Irish hit timely threes to stay close, but Ohio State’s defense tightened, closing driving lanes and cleaning the glass.</p>
<p>With under three minutes to play, the Buckeye guards seized control. A pull-up jumper, followed by a steal and layup, gave Ohio State a two-possession cushion it never relinquished. Diebler praised the composure: “Notre Dame is disciplined. You have to stay locked in for 40 minutes. I’m proud of how our guys answered every punch.”</p>
<p>The win showcases Ohio State’s growing chemistry and sets the tone as Big Ten play nears.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2025/11/16/NCOD/87308498007-ohio-state-notre-dame-basketball-ac-012.JPG?width=700&height=467&fit=crop&format=pjpg&auto=webp",
      publishedAt: "2023-11-17",
      editor: "Nick Wright",
    },
    {
      slug: "ucla-qb-out-vs-ohio-state",
      title: "UCLA QB Nico Iamaleava ruled out; Buckeyes prepare for backup Luke Duncan",
      articleUrl: "https://cbusnews.local/story/ucla-qb-out-vs-ohio-state",
      contentSnippet:
        "Bruins starter Nico Iamaleava entered concussion protocol after the Nebraska loss, leaving UCLA to start untested Luke Duncan in Columbus.",
      content: `<p>UCLA confirmed late Sunday that quarterback Nico Iamaleava will not travel to Ohio State after displaying concussion symptoms following the Bruins’ 28-21 loss to Nebraska. Iamaleava finished that game with 191 passing yards, two touchdowns, and 86 rushing yards, but was sacked three times and evaluated postgame.</p>
<p>For the season, the redshirt freshman has completed 63.7% of his passes for 1,659 yards, 12 touchdowns, and seven interceptions while adding 474 rushing yards and four scores in nine games. His absence forces Chip Kelly’s staff to turn to redshirt sophomore Luke Duncan, who has yet to attempt a collegiate pass.</p>
<p>Defensive coordinator Jim Knowles said Ohio State will “crank up the pressure packages” to test Duncan immediately. The Buckeyes enter Saturday night as two-touchdown favorites and believe this development tilts the matchup further in their favor.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2025/11/10/NCOD/87200734007-usatsi-27543517.jpg",
      publishedAt: "2023-11-16",
      editor: "Nick Wright",
    },
    {
      slug: "osu-ucla-key-stats",
      title: "By the numbers: Ohio State’s night-game dominance and record-setting stars",
      articleUrl: "https://cbusnews.local/story/osu-ucla-key-stats",
      contentSnippet:
        "Home night games have been automatic under Ryan Day (12-0), Jeremiah Smith is rewriting the record book, and Julian Sayin continues elite efficiency.",
      content: `<p>Ohio State is 5-0 in November home night games, winning by an average of 34.2 points. Since 2005, the Buckeyes own a 27-5 home night record; Ryan Day has never lost a night kickoff in Ohio Stadium (12-0).</p>
<p>Receiver Jeremiah Smith became the fastest Buckeye to 25 touchdown catches, accomplishing the feat in only 25 games (David Boston required 30). Smith now sits top-7 nationally in touchdowns (10), receptions (65), yards (862), and yards per game (~95.8).</p>
<p>Quarterback Julian Sayin had his streak of 173 pass attempts without an interception snapped versus Purdue, yet he remains one of only two FBS passers in the last 30 years with three 300-yard, 3+ TD, 80%-completion outings in the same season.</p>
<p>This is the first Ohio State–UCLA meeting since 2001; the all-time series is tied 4-4-1, adding extra intrigue under the lights.</p>`,
      imageUrl:
        "https://www.dispatch.com/gcdn/authoring/authoring-images/2025/11/16/NCOD/87300639007-ohio-state-ucla-footbal-1115-ac-040.JPG?crop=3646,2052,x0,y189&width=660&height=371&format=pjpg&auto=webp",
      publishedAt: "2023-11-16",
      editor: "Miles Porter",
    },
    {
      slug: "osu-receiver-health-updates",
      title: "Jeremiah Smith and Carnell Tate rested vs. UCLA as injuries linger",
      articleUrl: "https://cbusnews.local/story/osu-receiver-health-updates",
      contentSnippet:
        "Smith limped off early and sat the second half, Tate didn’t suit up, and Ryan Day explained the cautious approach with two regular-season games left.",
      content: `<p>Jeremiah Smith appeared on the pregame availability report as questionable and left mid-second quarter with a nagging lower-body issue. Ryan Day said Smith “could have gone back in” but the staff chose rest with the Buckeyes up big.</p>
<p>Carnell Tate was held out completely after the medical staff recommended another week of recovery. Running back CJ Donaldson and offensive lineman Joshua Padilla were also listed as questionable and did not see snaps.</p>
<p>Day emphasized confidence in the depth chart: “We played 10 receivers tonight and still found explosives. The goal is having everyone at 100% for the stretch run.” Expect Smith and Tate to be game-time decisions next week, but both are progressing.</p>`,
      imageUrl:
        "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F11%2F15%2FA1_02147.jpg&height=800&type=webp",
      publishedAt: "2023-11-16",
      editor: "Nick Wright",
    },
    {
      slug: "osu-recruiting-flips-surging",
      title: "Flips keep rolling: Legend Bey, Eli Johnson headline November haul",
      articleUrl: "https://cbusnews.local/story/osu-recruiting-flips-surging",
      contentSnippet:
        "Ohio State flipped four-star athlete Legend Bey from Tennessee and added 2027 safety Eli Johnson, vaulting future classes up national rankings.",
      content: `<p>November has been busy on the recruiting trail. The Buckeyes flipped four-star athlete Legend Bey (class of 2026) from Tennessee after an official visit to Columbus. Shortly after, four-star 2027 safety Eli Johnson of Texas announced his pledge.</p>
<p>Those moves pushed Ohio State’s 2026 class back into the national top three per Yahoo Sports and 247Sports. Ryan Day credited new GM Mark Pantoni for “relentless follow-up” and noted that on-field success is resonating with families.</p>
<p>Expect more activity over Thanksgiving weekend as Ohio State hosts multiple blue-chip visitors for the UCLA game.</p>`,
      imageUrl:
        "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F11%2F15%2F2025_11.15_UCLA011.JPG%3Fwidth%3D1024%26height%3D682&type=webp",
      publishedAt: "2023-11-16",
      editor: "Grant Whitfield",
    },
    {
      slug: "osu-womens-hoops-bellarmine",
      title: "Women’s basketball blasts Bellarmine 90-33, heads to UConn showdown",
      articleUrl: "https://cbusnews.local/story/osu-womens-hoops-bellarmine",
      contentSnippet:
        "A 57-point win pushes Ohio State to 2-0 before a marquee trip to face No. 1 UConn.",
      content: `<p>The Buckeyes smothered Bellarmine, holding the Knights to 23% shooting while forcing 27 turnovers. Cotie McMahon (22 points) and Celeste Taylor (14 points, 6 steals) led a balanced attack.</p>
<p>Coach Kevin McGuff said the lopsided result “let us play thirteen players and build confidence before the toughest road trip of the month.” Ohio State travels to Hartford midweek to face top-ranked UConn.</p>
<p>McGuff believes the UConn matchup is “the perfect measuring stick” for a roster aiming to return to the Elite Eight after last season’s Sweet 16 exit.</p>`,
      imageUrl:
        "https://www.dispatch.com/gcdn/presto/2023/01/08/NCOD/ffef4a49-8baa-44b1-83cb-9ae1bb584b17-basketball-_ceb_wbk_illinois-illinois_at_ohio_state_js_0021.jpg",
      publishedAt: "2023-11-16",
      editor: "Miles Porter",
    },
    {
      slug: "osu-wrestling-dominates-openers",
      title: "Buckeye wrestling crushes UTC 42-4, braces for No. 2 Nebraska",
      articleUrl: "https://cbusnews.local/story/osu-wrestling-dominates-openers",
      contentSnippet:
        "Ohio State sits in the national top five after overwhelming Chattanooga and focusing on a statement dual with Nebraska.",
      content: `<p>Tom Ryan’s squad opened the dual season with a 42-4 thumping of the Mocs, showcasing bonus-point wins from Nic Bouzakis, Jesse Mendez, and 197-pound newcomer Ryder McHenry.</p>
<p>The Buckeyes face No. 2 Nebraska on the road next weekend in one of November’s marquee Big Ten duals. Ryan says the emphasis is “recovery and mat IQ,” noting that the Huskers thrive on scramble situations.</p>
<p>The fast start keeps Ohio State entrenched in the national top five, fueling belief that this roster can push for an NCAA trophy come March.</p>`,
      imageUrl: "https://ohiostatebuckeyes.com/images/2025/3/22/0L5A8244.jpg",
      publishedAt: "2023-11-16",
      editor: "Landon Pierce",
    },
    {
      slug: "osu-recruiting-momentum-after-ucla",
      title: "UCLA beatdown sparks more recruiting buzz",
      articleUrl: "https://cbusnews.local/story/osu-recruiting-momentum-after-ucla",
      contentSnippet:
        "On3 reports multiple four- and five-star targets now trending toward Ohio State after Saturday night’s spotlight win.",
      content: `<p>Ohio State’s primetime blowout of UCLA drew over six million viewers nationally, and recruiting sites immediately noted a spike in Crystal Ball picks favoring the Buckeyes.</p>
<p>Several West Coast prospects, including 2026 quarterback Braylon Stanford and EDGE Khari Boyd, scheduled late-November visits. Analysts say the uptick is tied to Ryan Day’s staff showcasing explosive offense and depth despite nagging injuries.</p>
<p>“Winning in November is the best sales pitch,” recruiting director Mark Pantoni said. “Recruits saw the Shoe rocking and picture themselves in the scarlet.”</p>`,
      imageUrl: "https://www.ocregister.com/wp-content/uploads/2025/11/AP25320085301128.jpg?w=525",
      publishedAt: "2023-11-16",
      editor: "Nick Wright",
    },
    {
      slug: "osu-depth-storyline",
      title: "Depth becomes defining storyline as Buckeyes rest stars and still roll",
      articleUrl: "https://cbusnews.local/story/osu-depth-storyline",
      contentSnippet:
        "Ohio State sat multiple starters versus UCLA yet still dominated, showcasing the roster’s layered talent.",
      content: `<p>With Jeremiah Smith, Carnell Tate, and running back CJ Donaldson limited, Ohio State still hung 45 points on UCLA thanks to tight ends Jelani Thurman and Bennett Christian combining for 162 receiving yards.</p>
<p>Ryan Day credited position coaches for “cross-training players since spring,” allowing backups to execute the full playbook. Defensive line depth shined too, as Kenyon Jackson and Jason Moore registered sacks against a veteran UCLA front.</p>
<p>As postseason play looms, the Buckeyes believe this depth lets them withstand injuries better than most contenders.</p>`,
      imageUrl: "https://www.elevenwarriors.com/sites/default/files/styles/904x490/public/c/2025/10/158828_h.jpg",
      publishedAt: "2023-11-16",
      editor: "Cole Matthews",
    },
    {
      slug: "osu-brand-visibility-surge",
      title: "Buckeyes’ media footprint surges with winning streak, flips, and NIL buzz",
      articleUrl: "https://cbusnews.local/story/osu-brand-visibility-surge",
      contentSnippet:
        "247Sports, Yahoo, and community forums report record traffic on Ohio State topics as the program stays front-page.",
      content: `<p>Ohio State’s October-November run, capped by the UCLA rout and multiple recruiting flips, has driven top-trending threads on 247Sports and Eleven Warriors. Merchandise partners say NIL jersey sales jumped 18% week over week.</p>
<p>Marketing staff note that national media requests for Ryan Day and Marvin Harrison Sr. (appearing on behalf of his son’s NIL foundation) doubled in the past 10 days.</p>
<p>The heightened visibility is expected to boost December signing-day coverage and further cement Columbus as a headline destination.</p>`,
      imageUrl:
        "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F9%2F6%2FDSC09134_GZoJx.jpg&height=800&type=webp",
      publishedAt: "2023-11-16",
      editor: "Grant Whitfield",
    },
    {
      slug: "osu-maintaining-excellence",
      title: "With UCLA, Nebraska, and Michigan looming, Ohio State embraces expectation",
      articleUrl: "https://cbusnews.local/story/osu-maintaining-excellence",
      contentSnippet:
        "The narrative has shifted from building momentum to executing under pressure as playoff stakes crystalize.",
      content: `<p>Ohio State sits undefeated heading into a gauntlet that includes UCLA, a road trip to Nebraska, and The Game. Coaches say the messaging has changed: “It’s less about potential and more about finishing,” Ryan Day explained.</p>
<p>Leaders like TreVeyon Henderson and linebacker Cody Simon addressed the team Sunday night, reminding younger players how narrow the margin becomes in late November.</p>
<p>Fans and analysts alike will scrutinize whether the Buckeyes can maintain their early-season efficiency when adversity inevitably strikes.</p>`,
      imageUrl: "https://www.cottonbowl.com/images/2025/1/8/ohio-state-7-89th-Cotton-Bowl-Classic.jpg?width=1416&height=797&mode=crop&quality=80&format=jpg",
      publishedAt: "2023-11-16",
      editor: "Nick Wright",
    },
  ],
};

const crewFeed: FeedSource = {
  source: "Columbus Crew",
  description: "Original reporting on the reigning MLS champions across first team, Crew 2, and Lower.com Field.",
  items: [
    {
      slug: "crew-lock-supporters-shield",
      title: "Crew secure top seed in MLS Cup Playoffs with win over Philadelphia",
      articleUrl: "https://cbusnews.local/story/crew-lock-supporters-shield",
      contentSnippet:
        "Cucho Hernández delivered two assists, Diego Rossi scored the winner, and Columbus clinched the East’s No. 1 seed.",
      content: `<p>Lower.com Field roared Saturday night as the Crew beat the Union 3-1 to seal the Supporters’ Shield, guaranteeing home-field advantage through MLS Cup. Diego Rossi’s 64th-minute curler snapped a 1-1 tie before substitute Christian Ramirez iced the match in stoppage time.</p>
<p>Wilfried Nancy praised his group’s composure: “We’ve built to this moment all season, focusing on principles instead of results. Tonight we got both.” Cucho Hernández finished with two assists and now leads MLS in goal contributions.</p>
<p>Columbus will host the lowest remaining seed in the conference semifinals after the international break.</p>`,
      imageUrl: "https://matternews.org/wp-content/uploads/2024/08/Columbus-Crew-Aug.-25-2024-1-scaled.jpg",
      publishedAt: "2023-11-15",
      editor: "Miles Porter",
    },
    {
      slug: "crew-injury-update-playoffs",
      title: "Nagbe, Morris trend upward on Crew injury report",
      articleUrl: "https://cbusnews.local/story/crew-injury-update-playoffs",
      contentSnippet:
        "Darlington Nagbe returned to full training, and Aidan Morris resumed running drills as the Crew eye the conference semifinals.",
      content: `<p>Assistant coach Kwame Ampadu confirmed Sunday that veteran midfielder Darlington Nagbe is “100 percent good to go” after missing the regular-season finale with tightness. Aidan Morris, sidelined by a minor hamstring knock, is expected to rejoin full team sessions midweek.</p>
<p>Left back Will Sands remains on a limited schedule but could be available off the bench. Nancy said the staff will “err on the side of caution” with every recovery timeline.</p>
<p>The Crew’s depth has softened the blow — Sean Zawadzki and Max Arfsten logged heavy minutes against Philadelphia, allowing the medical team to prioritize health for the playoff run.</p>`,
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/lc/sbpwlmoeqff3nhbnvowz.jpg",
      publishedAt: "2023-11-16",
      editor: "Cole Matthews",
    },
    {
      slug: "crew-contract-nancy",
      title: "Wilfried Nancy, Crew close in on long-term extension",
      articleUrl: "https://cbusnews.local/story/crew-contract-nancy",
      contentSnippet:
        "Sources tell CityLine Sports the club is finalizing a new four-year deal with the MLS Cup-winning manager.",
      content: `<p>Front-office sources confirm that majority owner Dee Haslam and president Tim Bezbatchenko have offered Wilfried Nancy a contract extension through 2029, making him one of MLS’s highest-paid managers.</p>
<p>The deal rewards Nancy for delivering the 2024 MLS Cup and guiding Columbus to consecutive 60-point seasons. It also ensures continuity as the Crew brace for heavy transfer interest in Cucho Hernández and Patrick Schulte this winter.</p>
<p>Nancy has repeatedly said he feels “at home in Columbus” and wants to continue integrating Crew 2 prospects into the first team.</p>`,
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop/prd-league/ugoydqm1kmigvdzgudry.jpg",
      publishedAt: "2023-11-14",
      editor: "Grant Whitfield",
    },
    {
      slug: "crew2-pipeline-spotlight",
      title: "Crew 2 pipeline keeps delivering first-team contributors",
      articleUrl: "https://cbusnews.local/story/crew2-pipeline-spotlight",
      contentSnippet:
        "Noah Hall and Taha Habroune earned surprise minutes vs. Philadelphia, reinforcing the value of the academy-to-first-team pathway.",
      content: `<p>Noah Hall’s 20-minute cameo on the right wing included three line-breaking passes, while teenage midfielder Taha Habroune closed the match alongside Nagbe to secure possession. Nancy said those promotions “send a message to every player in the pathway.”</p>
<p>Crew 2 coach Laurent Courtois noted that five of his players have trained with the first team in the past week. The front office plans to reward the MLS NEXT Pro champions with new contracts before preseason.</p>
<p>Developing internal depth is key as Columbus prepares for CONCACAF Champions Cup travel in early 2026.</p>`,
      imageUrl: "https://c.files.bbci.co.uk/0235/production/_101756500_crewfans_976.jpg",
      publishedAt: "2023-11-13",
      editor: "Landon Pierce",
    },
    {
      slug: "crew-playoff-semis-preview",
      title: "Crew prep for Eastern semis with tactical tweaks and travel planning",
      articleUrl: "https://cbusnews.local/story/crew-playoff-semis-preview",
      contentSnippet:
        "Wilfried Nancy is tweaking training loads and shape ahead of the conference semifinal, balancing rest with sharpness.",
      content: `<p>Columbus kicks off conference semifinal prep this week with closed-door sessions at the OhioHealth Performance Center. Nancy is experimenting with a narrow back three that tucks wingbacks infield, hoping to congest the middle against possession-heavy opponents.</p>
<p>The staff has also shortened training blocks to 70 minutes, focusing on micro-drills that mimic high-press sequences. Nancy said the goal is to keep legs fresh without losing the rhythm that powered a Supporters’ Shield run.</p>
<p>Veteran Darlington Nagbe told CityLine Sports the team feels “calm and clear” about what’s needed tactically. Video review highlighted how controlling second balls out of midfield remains the top priority.</p>
<p>Travel logistics are already underway; the Crew won’t know their opponent until the Wild Card round concludes, but the club has charter contingencies booked for both Orlando and Atlanta.</p>
<p>Supporters groups are organizing a send-off at the airport regardless of location, another sign of the city’s belief that Columbus can repeat as champions.</p>`,
      imageUrl: "https://npr.brightspotcdn.com/e3/99/48a58223477e90cc98256e3a3270/columbus-crew-cucho-hernandez-042724-ap.jpg",
      publishedAt: "2023-11-18",
      editor: "Miles Porter",
    },
    {
      slug: "crew-roster-spotlight-ramirez-role",
      title: "Christian Ramirez embraces super-sub role heading into postseason",
      articleUrl: "https://cbusnews.local/story/crew-roster-spotlight-ramirez-role",
      contentSnippet:
        "Ramirez is thriving as a late-game closer, studying match film to exploit tired defenses in the final 20 minutes.",
      content: `<p>Despite limited starts, Ramirez has become Columbus’ preferred closer, logging five goals in his last seven substitute appearances. He spends hours with assistant coach Kwame Ampadu reviewing where opposing center backs lose shape late in games.</p>
<p>Ramirez says the key is patience: “When you come on against fatigued legs, you can’t rush the first touch. You hold your run, let the play develop, then pounce.”</p>
<p>The striker is also mentoring academy forwards by showing how to read body language from defenders, noting when a shoulder drops or a head swivels away from the ball.</p>
<p>Nancy appreciates the professionalism: “It’s not easy to accept reduced minutes after a career of starting, but Christian’s humility has lifted the locker room.”</p>
<p>The Crew plan to keep Ramirez’s minutes in the 20-25 range per match, ensuring he’s fresh to capitalize on playoff chaos.</p>`,
      imageUrl: "https://s7d2.scene7.com/is/image/TWCNews/AP_25096030973696",
      publishedAt: "2023-11-17",
      editor: "Nick Wright",
    },
    {
      slug: "crew-youth-clinics-recap",
      title: "Crew youth clinics bring MLS Cup trophy tour to central Ohio schools",
      articleUrl: "https://cbusnews.local/story/crew-youth-clinics-recap",
      contentSnippet:
        "Over 1,200 students across Franklin County participated in Crew clinics that paired skills sessions with literacy drives.",
      content: `<p>The Crew Foundation wrapped its fall clinic tour with dual events at Eastmoor Academy and Worthington Kilbourne, pairing dribbling drills with a “Reading Goals” literacy push. Kids cycled between 20-minute skill stations and a Q&A with Crew 2 players.</p>
<p>Foundation director Lisa Wheeler said the program’s biggest win was “showing kids the MLS Cup trophy up close.” Every stop included a photo station with the hardware, plus autograph tables.</p>
<p>Nutritionists from OhioHealth also handed out snack guides, teaching families how to prep matchday meals without breaking the budget.</p>
<p>The club logged more than 400 volunteer hours during the tour, and plans to expand to Marion and Delaware counties next spring.</p>
<p>“Community is a pillar for us,” president Tim Bezbatchenko said. “Clinics remind us that the Crew’s reach is bigger than Lower.com Field.”</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/presto/2021/05/27/NCOD/b8cf093c-9cbb-4e44-9667-b2579800b1c2-CEB_CCS_CREW_BJP_10.jpg?width=700&height=478&fit=crop&format=pjpg&auto=webp",
      publishedAt: "2023-11-15",
      editor: "Grant Whitfield",
    },
    {
      slug: "crew-lower-field-upgrades-progress",
      title: "Lower.com Field renovation update: safe-standing deck reaches steel milestone",
      articleUrl: "https://cbusnews.local/story/crew-lower-field-upgrades-progress",
      contentSnippet:
        "The Nordecke expansion is on schedule, with new LED paneling and hospitality boxes slated for installation before spring friendlies.",
      content: `<p>Construction crews topped out the steel frame for the new safe-standing deck this week, marking a key milestone toward a 5,500-capacity Nordecke. Project manager Alicia Torres said weather delays were minimal thanks to prefabricated sections.</p>
<p>The Crew will begin installing LED fascia and premium loge boxes in December, giving stadium operators time to calibrate content before preseason events.</p>
<p>Fans touring the site can already see how the double-decker capo stand will improve sightlines and atmosphere.</p>
<p>Bezbatchenko noted that accessibility was factored in: “We built dedicated ramp access for supporters with mobility needs, ensuring everyone gets the same vantage point.”</p>
<p>The project should wrap before the annual “Black & Gold Week” celebration in March, when the club plans a public unveiling.</p>`,
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop/mls-clb-prd/uhoy847mhycbfgi0ujlu.jpg",
      publishedAt: "2023-11-14",
      editor: "Landon Pierce",
    },
    {
      slug: "crew-goalkeeping-rotation",
      title: "Patrick Schulte, Evan Bush detail how they share playoff prep duties",
      articleUrl: "https://cbusnews.local/story/crew-goalkeeping-rotation",
      contentSnippet:
        "Schulte gets the nod, but veteran Evan Bush remains heavily involved in film review and scouting reports.",
      content: `<p>Goalkeeper coach Jack Stern is splitting responsibilities between Patrick Schulte and Evan Bush. Schulte handles most on-pitch reps, while Bush leads nightly film sessions that break down opposition tendencies.</p>
<p>Schulte appreciates the mentorship: “Evan sees things I miss mid-game. He points out when my starting position drifts too deep, and we correct it before the next match.”</p>
<p>The staff also invites academy keeper Stanislav Lapkes into sessions to maintain the developmental pipeline.</p>
<p>Nancy praised the group’s selflessness: “No one is worried about individual accolades. The room’s focus is keeping clean sheets when it matters.”</p>
<p>Columbus will continue rotating in training but expects Schulte to start every playoff match barring injury.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/presto/2023/04/16/NCOD/e80cf1b0-c913-41ac-960c-2e8d515b8a05-MLS-_ceb_crew_new_england-New_England_at_Crew_js_0008.jpg?crop=2111,1188,x0,y107&width=2111&height=1188&format=pjpg&auto=webp",
      publishedAt: "2023-11-13",
      editor: "Miles Porter",
    },
    {
      slug: "crew-academy-signings-watch",
      title: "Crew eye new homegrown deals as academy trio shines in MLS NEXT Fest",
      articleUrl: "https://cbusnews.local/story/crew-academy-signings-watch",
      contentSnippet:
        "Midfielder Diego Luna, winger Malik Sillah, and fullback Owen Rinehart impressed scouts during MLS NEXT Fest scrimmages.",
      content: `<p>Crew scouts returned from MLS NEXT Fest encouraged by three prospects: Luna (U-17), Sillah (U-19), and Rinehart (U-17). Each produced standout performances against LAFC and FC Dallas academies.</p>
<p>General manager Issa Tall confirmed the club is preparing homegrown offers for at least two of the trio, hoping to lock them in before European teams swoop in.</p>
<p>Sillah’s pace caught the eye of first-team staffers, while Rinehart’s overlapping runs and defensive recovery speed fit Nancy’s system.</p>
<p>Luna has drawn comparisons to Aidan Morris because of his two-way engine and leadership; he captained Columbus to a 3-2 comeback win in the final scrimmage.</p>
<p>The Crew plan to bring all three players to first-team preseason in January for further evaluation.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2025/02/23/NCOD/79713161007-crew-0222-fire-ac-026.JPG?crop=4499,2531,x0,y300&width=660&height=372&format=pjpg&auto=webp",
      publishedAt: "2023-11-12",
      editor: "Grant Whitfield",
    },
    {
      slug: "crew-offseason-schedule-release",
      title: "Crew unveil offseason schedule featuring mixed friendlies and fan forums",
      articleUrl: "https://cbusnews.local/story/crew-offseason-schedule-release",
      contentSnippet:
        "Columbus will host mixed-MLS/Liga MX friendlies and launch a town-hall series to expand fan input.",
      content: `<p>The Crew announced a five-match friendly slate that includes Liga MX’s Pachuca and Premier League upstart Brighton during the January “Winter Classic” at Lower.com Field.</p>
<p>In between matches, the club is hosting town halls at breweries around the city, giving fans a chance to ask questions directly to the front office.</p>
<p>Head coach Wilfried Nancy will also appear at two events, sharing tactical insights and highlighting how supporters influence the atmosphere.</p>
<p>Ticket packages go on sale next week, with partial proceeds benefiting the Crew Foundation’s literacy efforts.</p>
<p>The schedule underscores Columbus’ ambition to remain a destination club during the offseason, keeping fans engaged even when MLS play pauses.</p>`,
      imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2948,h_1658,x_0,y_240/images/ImagnImages/mmsport/324/01je9kcxrsav2x6md30g",
      publishedAt: "2023-11-11",
      editor: "Landon Pierce",
    },
    {
      slug: "crew-supporter-charity-drive",
      title: "Nordecke launches winter coat drive with players matching donations",
      articleUrl: "https://cbusnews.local/story/crew-supporter-charity-drive",
      contentSnippet:
        "Supporters, front-office staff, and players teamed up to donate 1,500 coats to Columbus families.",
      content: `<p>The Nordecke, in partnership with the Crew Foundation, organized a coat drive outside Nationwide Children’s Hospital, collecting over 1,500 items.</p>
<p>Players including Darlington Nagbe and Sean Zawadzki matched donations, purchasing new coats and signing holiday cards for recipients.</p>
<p>Organizers say the event will become an annual staple, reflecting the supporters’ desire to impact Columbus beyond matchday.</p>
<p>“We want to show that the same passion we bring to the stands can lift our neighbors,” said Nordecke president Blake Reiber.</p>
<p>Distribution begins next week through local schools and youth centers, timed to the first significant cold snap.</p>`,
      imageUrl: "https://images.mlssoccer.com/image/private/t_photogallery_3x/mls-clb/eahmqwn7h4iercubvwap.jpg",
      publishedAt: "2023-11-10",
      editor: "Miles Porter",
    },
    {
      slug: "crew-injury-notes-mensah-update",
      title: "Jonathan Mensah addresses recovery timeline after offseason procedure",
      articleUrl: "https://cbusnews.local/story/crew-injury-notes-mensah-update",
      contentSnippet:
        "Mensah is ahead of schedule following a minor knee procedure, eyeing a January return to full training.",
      content: `<p>The veteran center back underwent a scope to clean up cartilage in early November and has spent the past two weeks rehabbing with club physios.</p>
<p>Mensah told reporters he expects to rejoin full-contact drills by the second week of January, giving him ample time to integrate before CONCACAF play.</p>
<p>Nancy praised the defender’s professionalism: “Jo’s leadership off the pitch is as valuable as his minutes on it. He keeps standards high even while rehabbing.”</p>
<p>The Crew aren’t rushing his return given the depth at center back, but coaches are encouraged by his progress.</p>
<p>Mensah plans to mentor younger defenders during the offseason, sharing video breakdowns and positional tips.</p>`,
      imageUrl: "https://s.yimg.com/ny/api/res/1.2/NZqTjwKtf._I4yHv8Q5KbQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/the-columbus-dispatch/cf74c841347f4647f039f509362ab810",
      publishedAt: "2023-11-09",
      editor: "Grant Whitfield",
    },
    {
      slug: "crew-travel-diary-west-coast",
      title: "Inside the Crew’s travel diary: how Columbus handles cross-country swings",
      articleUrl: "https://cbusnews.local/story/crew-travel-diary-west-coast",
      contentSnippet:
        "Performance staff share how they manage sleep, nutrition, and training when the Crew face West Coast doubleheaders.",
      content: `<p>Columbus finished its final West Coast swing of the regular season, and performance director Aiden Mangan detailed the logistics: charter flights scheduled at off-peak hours, sleep pods on board, and curated menus from local chefs.</p>
<p>Players received personalized hydration plans before each match, and the Crew brought portable recovery tubs to hotel rooms.</p>
<p>“Little things like blackout curtains and limiting screen time make a big difference,” Mangan said.</p>
<p>The staff is compiling data from wearable tech to improve future travel schedules, hoping to shave down fatigue when back-to-back road matches are unavoidable.</p>
<p>Nancy believes these marginal gains help Columbus close games stronger, especially in the final ten minutes.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2023/12/03/NCOD/71786497007-microsoft-teamsimage.png?width=660&height=442&fit=crop&format=pjpg&auto=webp",
      publishedAt: "2023-11-08",
      editor: "Landon Pierce",
    },
  ],
};

const cbjFeed: FeedSource = {
  source: "Columbus Blue Jackets",
  description: "CityLine Sports coverage of the Union Blue as they chase a wild-card berth and develop the next wave.",
  items: [
    {
      slug: "cbj-gaudreau-heating-up",
      title: "Johnny Gaudreau sparks Jackets with eight-point week",
      articleUrl: "https://cityline.local/story/cbj-gaudreau-heating-up",
      contentSnippet:
        "Moved to the bumper spot on the power play, Gaudreau piled up three goals and five assists over four games.",
      content: `<p>Blue Jackets winger Johnny Gaudreau looks refreshed after a brief line shuffle, thriving between Adam Fantilli and Kirill Marchenko. He scored in three straight contests and logged a pair of primary assists on the man advantage.</p>
<p>Coach Pascal Vincent credited quicker puck movement: "Johnny is catching pucks in stride and attacking downhill instead of waiting on the half wall." The top unit is now 5-for-14 since the change.</p>
<p>Gaudreau said the chemistry is growing: "We’re reading off each other and keeping our feet moving. When we stay connected, the chances come."</p>
<p>Columbus faces a back-to-back against the Islanders and Devils, and Vincent plans to keep the trio together to maintain momentum.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/presto/2022/11/21/NCOD/a067cd85-bf57-46e2-a58c-a47cfcafb2a5-nhl-_blue_jackets_vs._panthers_js_0042.jpg",
      publishedAt: "2023-11-18",
      editor: "Grant Whitfield",
    },
    {
      slug: "cbj-fantilli-injury-return",
      title: "Adam Fantilli expected back this week after ankle tweak",
      articleUrl: "https://cityline.local/story/cbj-fantilli-injury-return",
      contentSnippet:
        "The rookie center has missed three games but practiced in full Monday and could play against the Islanders.",
      content: `<p>Coach Pascal Vincent said Fantilli responded well to back-to-back skates and is “tracking to play” Thursday at Nationwide Arena. The 2024 Calder winner has 13 goals and 19 assists through 28 games, leading Columbus in points.</p>
<p>Vincent will keep Fantilli on a line with Kirill Marchenko and Boone Jenner, hoping to reignite a group that drives 57% of expected goals when together. “We need his pace,” Vincent said. “He tilts the ice.”</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/presto/2022/04/29/NCOD/5fcd8f2e-d689-4bd5-b659-064c4a12c010-cbj_0428_tampa_ac_32.jpg",
      publishedAt: "2023-11-16",
      editor: "Nick Wright",
    },
    {
      slug: "cbj-trade-deadline-watch",
      title: "Blue Jackets weighing goalie market ahead of deadline",
      articleUrl: "https://cityline.local/story/cbj-trade-deadline-watch",
      contentSnippet:
        "GM Jarmo Kekäläinen has fielded calls on Elvis Merzļikins but will only move him for a high pick, sources say.",
      content: `<p>League executives told CityLine Sports that Columbus has set a first-round pick as the baseline for any Merzļikins deal. The Jackets are also monitoring the center market in case they pivot to buying to support Fantilli’s line.</p>
<p>With Daniil Tarasov healthy, the organization believes it can withstand a goalie shuffle if the right offer arrives. Expect Kekäläinen to reassess after the upcoming five-game road swing.</p>`,
      imageUrl: "https://s7d2.scene7.com/is/image/TWCNews/blue-jackets-ap-april122025",
      publishedAt: "2023-11-15",
      editor: "Grant Whitfield",
    },
    {
      slug: "cbj-prospect-watch",
      title: "Denton Mateychuk, Gavin Brindley headline Monsters call-up candidates",
      articleUrl: "https://cityline.local/story/cbj-prospect-watch",
      contentSnippet:
        "Cleveland’s top pair is driving play in the AHL and could see NHL minutes if injuries persist.",
      content: `<p>Mateychuk leads AHL defensemen in scoring (21 points) while Brindley’s tenacity has earned rave reviews. Player development director Rick Nash said the duo is “checking every box” the organization set before the season.</p>
<p>Columbus may reward at least one prospect with an NHL stint after the holidays, especially if the Jackets remain in the wild-card mix and need fresh legs.</p>`,
      imageUrl: "https://www.1stohiobattery.com/sites/default/files/styles/904x490/public/c/2019/10/4213_h.jpg",
      publishedAt: "2023-11-14",
      editor: "Miles Porter",
    },
    {
      slug: "cbj-special-teams-boost",
      title: "Power play surging since replacing assistant coach Paul MacLean",
      articleUrl: "https://cityline.local/story/cbj-special-teams-boost",
      contentSnippet:
        "The Jackets are 8-for-20 over their last five games after swapping in development coach Jared Boll on the bench.",
      content: `<p>Columbus simplified entries and is leaning on a 1-3-1 setup that frees Jake Bean to quarterback from the left flank. Vincent credited Boll’s “fresh language” for helping players reset mentally.</p>
<p>The penalty kill has also improved, killing 18 of the last 19 disadvantages thanks to aggressive sticks from Cole Sillinger and Sean Kuraly.</p>`,
      imageUrl: "https://pbs.twimg.com/media/G5127zpW8AAOHYz.jpg",
      publishedAt: "2023-11-13",
      editor: "Cole Matthews",
    },
    {
      slug: "cbj-defense-pairings-shift",
      title: "Blue Jackets shuffle defense pairings to spark breakouts",
      articleUrl: "https://cityline.local/story/cbj-defense-pairings-shift",
      contentSnippet:
        "Associate coach Mike Babcock Jr. reworked the blue line pairings in search of cleaner exits and more offense.",
      content: `<p>Columbus debuted new pairings at practice this week, moving Zach Werenski alongside Jake Bean while pushing Denton Mateychuk next to Erik Gudbranson. The goal: better puck movement on the left side and more bite on the right.</p>
<p>Vincent said the changes could be short term but believes shaking up the rhythm will re-energize a group that struggled to connect first passes.</p>
<p>Players welcomed the tweaks; Werenski told CityLine Sports he enjoys playing with a mobile partner like Bean who can activate up ice.</p>
<p>Mateychuk, meanwhile, is taking cues from Gudbranson on how to close gaps physically without taking penalties.</p>
<p>Columbus will test the new setup against the Rangers later this week, then decide whether to keep rolling with it.</p>`,
      imageUrl: "https://s3951.pcdn.co/wp-content/uploads/2025/03/Blue-Jackets-Celebrate-1200x800.jpg",
      publishedAt: "2023-11-16",
      editor: "Grant Whitfield",
    },
    {
      slug: "cbj-practice-notebook",
      title: "Practice notebook: Fantilli line dominates small-area battles",
      articleUrl: "https://cityline.local/story/cbj-practice-notebook",
      contentSnippet:
        "Adam Fantilli centered a new line with Kirill Marchenko and Kent Johnson, and the trio lit up Columbus' practice rink.",
      content: `<p>The Jackets’ top line looked lively in Tuesday’s session, dominating small-area battles and scoring twice in the scrimmage portion. Vincent praised their communication, noting Fantilli’s growing chemistry with Marchenko.</p>
<p>Kent Johnson is also thriving on the line, using his creativity to set up backdoor chances. “We’re trying to keep things simple—quick give-and-go, then attack,” Johnson said.</p>
<p>The trio stayed late to work on net-front tips with assistant coach Jared Boll, focusing on power-play entries.</p>
<p>With the Islanders matchup looming, Columbus hopes the unit can spark much-needed five-on-five offense.</p>
<p>The line will start Thursday, but Vincent said leash length depends on defensive responsibility: “They have to stay connected without the puck.”</p>`,
      imageUrl: "https://media.bizj.us/view/img/10256357/blue-jackets-capitals-18.jpg",
      publishedAt: "2023-11-15",
      editor: "Miles Porter",
    },
    {
      slug: "cbj-prospect-roundup-europe",
      title: "Prospect roundup: Brindley leads Finland tourney, Tarasov rehabs in Cleveland",
      articleUrl: "https://cityline.local/story/cbj-prospect-roundup-europe",
      contentSnippet:
        "Columbus prospects continue to impress overseas and in the AHL, giving the Jackets depth options if injuries strike.",
      content: `<p>Gavin Brindley put up six points in four games at the Karjala Cup, showcasing his playmaking on the big ice. Player development coach Greg Campbell said Brindley’s poise “makes him look NHL-ready even against veteran internationals.”</p>
<p>In Cleveland, Daniil Tarasov is on a three-game win streak, posting a .926 save percentage as he rehabs from a mid-October injury.</p>
<p>Defenseman David Jiricek is also logging heavy minutes with the Monsters and could earn a recall once Columbus needs a right-shot blueliner.</p>
<p>“The depth is encouraging,” Vincent said. “We know reinforcements are performing, which takes pressure off the top NHL roster.”</p>
<p>The Jackets will continue rotating prospects into practice skates to keep them familiar with the system.</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2024/04/17/NCOD/73348859007-cbj-0416-carolina-022.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp",
      publishedAt: "2023-11-14",
      editor: "Nick Wright",
    },
    {
      slug: "cbj-community-outreach",
      title: "Blue Jackets hold Nationwide Arena blood drive with record turnout",
      articleUrl: "https://cityline.local/story/cbj-community-outreach",
      contentSnippet:
        "More than 700 donors turned out for the Jackets’ annual blood drive, with players meeting fans between sessions.",
      content: `<p>The Jackets, in partnership with the American Red Cross, hosted their largest blood drive yet inside Nationwide Arena’s club level. Over 700 donors participated, surpassing last year’s mark by 20%.</p>
<p>Players Boone Jenner and Sean Kuraly greeted fans, signed memorabilia, and thanked donors for supporting local hospitals.</p>
<p>The event also featured educational booths about concussion research and youth hockey safety, aligning with the franchise’s community pillars.</p>
<p>Red Cross officials said the donations will help cover holiday-season shortages across Ohio.</p>
<p>The club plans to repeat the drive in February, hoping to push the event beyond 1,000 donors.</p>`,
      imageUrl: "https://www.nationwidearena.com/assets/img/CBJ-crowd-in-bowl_CBJ-0774-8cd2bdda1b.jpg",
      publishedAt: "2023-11-13",
      editor: "Grant Whitfield",
    },
    {
      slug: "cbj-film-room-defense",
      title: "Film Room: How Columbus cleaned up net-front coverage in four games",
      articleUrl: "https://cityline.local/story/cbj-film-room-defense",
      contentSnippet:
        "Assistant coach Steve McCarthy walked CityLine Sports through the tweaks that stabilized the Jackets’ slot defense.",
      content: `<p>Columbus allowed just five high-danger slot chances over its last four games, a dramatic improvement from early-season struggles. Assistant coach Steve McCarthy credits better stick positioning and shorter shifts.</p>
<p>The Jackets started staggering forwards higher in the defensive zone to deter cross-ice passes, forcing shooters into the perimeter.</p>
<p>McCarthy also emphasizes communication: “When our centermen call out assignments, everyone rotates in sync. It sounds simple, but trust is the biggest fix.”</p>
<p>The staff will keep monitoring net-front box-outs as the schedule tightens. “We can’t relax,” McCarthy said. “Details matter more once teams scout you.”</p>
<p>Expect Columbus to keep rolling video sessions where players grade each other’s positioning, maintaining accountability.</p>`,
      imageUrl: "https://s3951.pcdn.co/wp-content/uploads/2025/03/Blue-Jackets-Celebrate-1200x800.jpg",
      publishedAt: "2023-11-12",
      editor: "Miles Porter",
    },
  ],
};

function filterFeedItems(feed: FeedSource): FeedSource {
  return {
    ...feed,
    items: feed.items.filter((item) => Boolean(item.imageUrl)),
  };
}

export async function fetchAllFeeds(): Promise<FeedSource[]> {
  return [filterFeedItems(ohioStateFeed), filterFeedItems(crewFeed), filterFeedItems(cbjFeed)];
}

export async function fetchFeedBySource(source: string): Promise<FeedSource | undefined> {
  const feeds = await fetchAllFeeds();
  return feeds.find((feed) => feed.source.toLowerCase() === source.toLowerCase());
}

export async function fetchStoryBySlug(
  slug: string
): Promise<(FeedItem & { source: string; sourceDescription: string }) | undefined> {
  const feeds = await fetchAllFeeds();
  for (const feed of feeds) {
    const match = feed.items.find((item) => item.slug === slug);
    if (match) {
      return {
        ...match,
        source: feed.source,
        sourceDescription: feed.description,
      };
    }
  }
  return undefined;
}
