export type ScoreRow = {
  league: string;
  home: { name: string; score: number };
  away: { name: string; score: number };
  status: string;
};

export async function fetchLatestScores(): Promise<ScoreRow[]> {
  // Placeholder data – replace with API integration when available.
  return [
    {
      league: "NHL",
      home: { name: "Blue Jackets", score: 4 },
      away: { name: "Islanders", score: 2 },
      status: "Final",
    },
    {
      league: "MLS",
      home: { name: "Crew", score: 3 },
      away: { name: "Union", score: 1 },
      status: "Final",
    },
    {
      league: "NCAA",
      home: { name: "Ohio State", score: 38 },
      away: { name: "UCLA", score: 17 },
      status: "Final",
    },
    {
      league: "NFL",
      home: { name: "Cleveland Browns", score: 27 },
      away: { name: "Baltimore Ravens", score: 23 },
      status: "Final",
    },
    {
      league: "NBA",
      home: { name: "Cleveland Cavaliers", score: 112 },
      away: { name: "Detroit Pistons", score: 105 },
      status: "Final",
    },
  ];
}
