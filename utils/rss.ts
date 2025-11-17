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
    "Daily CityLine Sports coverage of Ohio State football, basketball, wrestling, soccer, and recruiting as of November 16, 2025.",
  items: [
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
      publishedAt: "2025-11-17",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-15",
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
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-14",
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
      publishedAt: "2025-11-13",
      editor: "Landon Pierce",
    },
  ],
};

const cbjFeed: FeedSource = {
  source: "Columbus Blue Jackets",
  description: "CityLine Sports coverage of the Union Blue as they chase a wild-card berth and develop the next wave.",
  items: [
    {
      slug: "cbj-fantilli-injury-return",
      title: "Adam Fantilli expected back this week after ankle tweak",
      articleUrl: "https://cityline.local/story/cbj-fantilli-injury-return",
      contentSnippet:
        "The rookie center has missed three games but practiced in full Monday and could play against the Islanders.",
      content: `<p>Coach Pascal Vincent said Fantilli responded well to back-to-back skates and is “tracking to play” Thursday at Nationwide Arena. The 2024 Calder winner has 13 goals and 19 assists through 28 games, leading Columbus in points.</p>
<p>Vincent will keep Fantilli on a line with Kirill Marchenko and Boone Jenner, hoping to reignite a group that drives 57% of expected goals when together. “We need his pace,” Vincent said. “He tilts the ice.”</p>`,
      imageUrl: "https://www.dispatch.com/gcdn/presto/2022/04/29/NCOD/5fcd8f2e-d689-4bd5-b659-064c4a12c010-cbj_0428_tampa_ac_32.jpg",
      publishedAt: "2025-11-16",
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
      publishedAt: "2025-11-15",
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
      publishedAt: "2025-11-14",
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
      publishedAt: "2025-11-13",
      editor: "Cole Matthews",
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
