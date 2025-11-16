export type FeedItem = {
  slug: string;
  title: string;
  articleUrl: string;
  contentSnippet?: string;
  content?: string;
  imageUrl?: string;
  publishedAt?: string;
};

export type FeedSource = {
  source: string;
  description: string;
  items: FeedItem[];
};

const cbusNewsFeed: FeedSource = {
  source: "Ohio State",
  description:
    "Daily Cbus News coverage of Ohio State football, basketball, wrestling, soccer, and recruiting as of November 16, 2025.",
  items: [
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
      imageUrl: "https://www.dispatch.com/gcdn/authoring/authoring-images/2025/11/16/NCOD/87300639007-ohio-state-ucla-footbal-1115-ac-040.JPG?crop=3646,2052,x0,y189&width=660&height=371&format=pjpg&auto=webp",
      publishedAt: "2025-11-16",
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
      imageUrl: "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F11%2F15%2FA1_02147.jpg&height=800&type=webp",
      publishedAt: "2025-11-16",
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
      imageUrl: "https://images.sidearmdev.com/convert?url=https%3A%2F%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F11%2F15%2F2025_11.15_UCLA011.JPG%3Fwidth%3D1024%26height%3D682&type=webp",
      publishedAt: "2025-11-16",
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
      imageUrl: "https://www.cleveland.com/resizer/v2/ORG4E2WIDVEPFAESUMWQMMSR6A.jpg?auth=e80319a8ee2e822e2b3a3d1edcf60eaa8ed02923d581d446934c3f4a5a8843ff&width=1280&smart=true&quality=90",
      publishedAt: "2025-11-16",
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
      imageUrl: "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fohiostatebuckeyes.com%2Fimages%2F2025%2F9%2F6%2FDSC09134_GZoJx.jpg&height=800&type=webp",
      publishedAt: "2025-11-16",
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
  return [filterFeedItems(cbusNewsFeed)];
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
