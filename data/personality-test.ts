import { TestQuestion } from "../lib/personality-test";

export const personalityTest: TestQuestion[] = [
  {
    no: 1,
    question: "At dusk, smoke curls from a farmstead as goblins shriek through the wheat. Beside you, Brom, the party’s heavily armored fighter and shield wall, raises his blade while terrified villagers scatter. As one of Brom’s companions in the road, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Rally the villagers beside Brom, shouting quick orders to form a defense",
        score: "E",
      },
      { 
        type: "B", 
        answer: "Slip behind a stone wall and study the goblins’ movements before acting", 
        score: "I" 
      },
    ],
  },
  {
    no: 2,
    question: "The surviving goblins flee into moonlit hills. Lyra, your nimble rogue scout and tracker, crouches over fresh prints while Brom’s shield arm still bleeds. As the party member helping decide the pursuit, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Set marching order, assign watches, and pursue on a disciplined timeline",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Follow the trail immediately and let the hunt evolve as it unfolds", 
        score: "P" 
      },
    ],
  },
  {
    no: 3,
    question: "Inside the ruined farmhouse, Lyra, the party’s trap expert, kneels over a chest rigged with bone hooks and rusted bells. If you were Lyra in this moment, would you:",
    answerOptions: [
      {
        type: "A",
        answer: "Inspect each wire, hinge, and pressure point to find the exact trigger",
        score: "S",
      },
      { 
        type: "B", 
        answer: "Imagine what larger deception the goblins meant the trap to conceal", 
        score: "N" 
      },
    ],
  },
  {
    no: 4,
    question: "A soot stained goblin prisoner trembles as Sister Maeve, your compassionate cleric healer, binds his burns with glowing magic. He claims darker forces wait in the hills. As the party member questioning him, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Focus on extracting verifiable facts",
        score: "T",
      },
      { 
        type: "B", 
        answer: "Weigh his situation and intent when judging his claim", 
        score: "F" 
      },
    ],
  },
  {
    no: 5,
    question: "Following the goblins’ trail, your party reaches an ancient crypt where torch smoke drifts from the entrance. Brom waits for your signal while Maeve grips her holy symbol. As the one deciding the party’s approach, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Take a moment to internally assess risks before speaking",
        score: "I",
      },
      { 
        type: "B", 
        answer: "Speak up immediately and organize the group’s approach", 
        score: "E" 
      },
    ],
  },
  {
    no: 6,
    question: "A hidden stair spirals deeper into the crypt while distant chanting echoes below. Lyra asks whether to scout ahead alone. As the party member making the call, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Let Lyra scout first and adapt based on what she finds",
        score: "P",
      },
      { 
        type: "B", 
        answer: "Establish a descent order with fallback positions", 
        score: "J" 
      },
    ],
  },
  {
    no: 7,
    question: "A stone sarcophagus opens to reveal murals of a forgotten king swallowed by shadow. Beside you, Thero, the party’s scholarly wizard, studies the carvings. Standing beside Theron, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Interpret the meaning behind the imagery",
        score: "N",
      },
      { 
        type: "B", 
        answer: "Focus on observable details and craftsmanship", 
        score: "S" 
      },
    ],
  },
  {
    no: 8,
    question: "The crypt’s spectral guardian offers a bargain: destroy the necromancer below, but an innocent trapped soul must be sacrificed. Sister Maeve turns to you in alarm. As the party’s moral decision maker in this moment, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Reject the deal because sacrificing an innocent violates your principles",
        score: "F",
      },
      { 
        type: "B", 
        answer: "Accept if it produces the best overall outcome despite the cost", 
        score: "T" 
      },
    ],
  },
  {
    no: 9,
    question: "The necromancer falls, and days later rain hisses on Blackglass City’s cobblestones as Lyra’s bard contact leads your party into a smugglers’ den. As the party member handling first contact, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Work the room quickly, building rapport and gathering leads",
        score: "E",
      },
      { 
        type: "B", 
        answer: "Stay quiet and map the guild’s power structure first", 
        score: "I" 
      },
    ],
  },
  {
    no: 10,
    question: "City alarm bells ring in the middle of the night as your infiltration begins collapsing. Lyr, the rogue rooftop expert, spots an unexpected escape route above. As the companion choosing the team’s next move, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Use Lyra’s rooftop discovery and improvise",
        score: "P",
      },
      { 
        type: "B", 
        answer: "Pull the team back to the original escape plan and timing", 
        score: "J" 
      },
    ],
  },
  {
    no: 11,
    question: "In a candlelit tavern, Lyra spreads coded ledgers across the table, stained with wine and blood. If you were the one deciphering them with her, would you:",
    answerOptions: [
      {
        type: "A",
        answer: "Analyze each entry sequentially for concrete meaning",
        score: "S",
      },
      { 
        type: "B", 
        answer: "Look for overarching patterns or hidden connections", 
        score: "N" 
      },
    ],
  },
  {
    no: 12,
    question: "A corrupt magistrate funded the assassins but now offers names in exchange for mercy. Brom wants justice, while Maeve urges compassion. As the final voice in the decision, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Hold him accountable because it’s the right thing to do",
        score: "F",
      },
      { 
        type: "B", 
        answer: "Use him if the information creates a strategic advantage", 
        score: "T" 
      },
    ],
  },
  {
    no: 13,
    question: "Days later, war horns echo through a volcanic mountain pass as fire giant scouts descend through ash. Brom looks to you while militia lines panic. As the battlefield commander in the moment, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Shout immediate orders and steady the line",
        score: "E",
      },
      { 
        type: "B", 
        answer: "Study the battlefield silently before committing", 
        score: "I" 
      },
    ],
  },
  {
    no: 14,
    question: "Fresh fire giant tracks split toward two ridgelines. Lyra studies the ash while Theron watches the smoke above. As the one choosing the route, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Predict which path matches the giants’ larger objective",
        score: "N",
      },
      { 
        type: "B", 
        answer: "Follow the fresher measurable trail", 
        score: "S" 
      },
    ],
  },
  {
    no: 15,
    question: "Before dawn, allied commanders demand a siege plan. Theron projects troop positions in glowing arcane light. As the strategist shaping the assault, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Break the assault into phases with fallback positions",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Keep each front fluid so commanders can adapt", 
        score: "P" 
      },
    ],
  },
  {
    no: 16,
    question: "A wounded fire giant offers the location of the war forge after Maeve stabilizes him with healing magic. As the one judging his credibility, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Test the claim against timing, terrain, and logistics",
        score: "T",
      },
      { 
        type: "B", 
        answer: "Consider his circumstances and motives when judging the claim", 
        score: "F" 
      },
    ],
  },
  {
    no: 17,
    question: "Victory in the mountains leads your party into the desert, where storm clouds spiral above a shattered amphitheater. Brom tightens his gauntlets as an ancient Blue Dragon prowls ahead. As one of Brom’s companions preparing for battle, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Study the dragon’s movement patterns before speaking",
        score: "I",
      },
      { 
        type: "B", 
        answer: "Rally the party into final readiness", 
        score: "E" 
      },
    ],
  },
  {
    no: 18,
    question: "Hot sand crackles with lightning as Theron detects glowing storm runes beneath the arena floor. Standing beside Theron as he studies the magic, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Examine each rune’s exact placement and function",
        score: "S",
      },
      { 
        type: "B", 
        answer: "Infer the larger magical network binding the arena", 
        score: "N" 
      },
    ],
  },
  {
    no: 19,
    question: "The Blue Dragon offers a cruel bargain: surrender the relic or watch a desert city burn. Maeve looks shaken by the cost. As the one making the final call, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Refuse if innocent lives become the cost",
        score: "F",
      },
      { 
        type: "B", 
        answer: "Choose the option preserving long-term advantage", 
        score: "T" 
      },
    ],
  },
  {
    no: 20,
    question: "Lightning explodes across the arena as the dragon’s strike shatters Brom’s battle line. As the companion deciding how the party responds, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Use the chaos to create new openings",
        score: "P",
      },
      { 
        type: "B", 
        answer: "Re-form the line and restore combat roles", 
        score: "J" 
      },
    ],
  },
  {
    no: 21,
    question: "With the dragon defeated, your party enters Acererak’s floating tomb where jeweled skulls orbit in stale dust. Theron warns one mistake means annihilation. As the one choosing the opening move, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Observe the skulls’ motion before committing",
        score: "I",
      },
      { 
        type: "B", 
        answer: "Break the silence and coordinate the opening move", 
        score: "E" 
      },
    ],
  },
  {
    no: 22,
    question: "Maeve discovers each floating skull contains a stolen memory from a fallen hero. Standing between Maeve’s intuition and Theron’s logic, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Search for the hidden meaning behind the chosen memories",
        score: "N",
      },
      { 
        type: "B", 
        answer: "Catalog the specific details and contents of each memory", 
        score: "S" 
      },
    ],
  },
  {
    no: 23,
    question: "The tomb begins collapsing as Lyra identifies three unstable escape routes through falling stone. As the party member directing the escape, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Rank the exits by survivability and move the team in order",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Move toward whichever path remains viable", 
        score: "P" 
      },
    ],
  },
  {
    no: 24,
    question: "Acererak offers knowledge to save kingdoms, but only if Theron permanently loses his identity. As Theron’s closest companion in the moment, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Evaluate the offer by long-term outcomes",
        score: "T",
      },
      { 
        type: "B", 
        answer: "Reject it if the cost is Theron’s soul", 
        score: "F" 
      },
    ],
  },
  {
    no: 25,
    question: "Escaping the tomb tears open a planar rift into Lolth’s Demonweb Pits, where black silk bridges stretch over endless darkness. As the party member keeping everyone together, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Keep everyone talking through the fear and call out next steps",
        score: "E",
      },
      { 
        type: "B", 
        answer: "Stay silent and absorb the danger first", 
        score: "I" 
      },
    ],
  },
  {
    no: 26,
    question: "The web bridge splits into poisoned silver strands marked with sacred drow sigils. Theron warns every path may be a lie. As the one choosing the path forward, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Infer which route reflects Lolth’s deeper deception",
        score: "N",
      },
      { 
        type: "B", 
        answer: "Compare the visible physical differences between each path", 
        score: "S" 
      },
    ],
  },
  {
    no: 27,
    question: "A fallen drow priestess claims she can guide you to Lolth’s sanctum if spared. As the one judging her fate, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Decide based on whether redemption aligns with your values",
        score: "F",
      },
      { 
        type: "B", 
        answer: "Judge her by leverage, evidence, and likely outcome", 
        score: "T" 
      },
    ],
  },
  {
    no: 28,
    question: "The living web shifts beneath your boots as phase spiders descend from above. Brom asks whether to hold formation. As the one directing the party’s movement, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Lock the party into a clear route and marching order",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Flow with the shifting web and seize openings", 
        score: "P" 
      },
    ],
  },
  {
    no: 29,
    question: "Back on Faerûn, Theron learns the Red Wizards of Thay are raising a dracolich army. As the companion advising Theron’s next move, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Withdraw to study the ritual before speaking",
        score: "I",
      },
      { 
        type: "B", 
        answer: "Rally allies and faction contacts into action", 
        score: "E" 
      },
    ],
  },
  {
    no: 30,
    question: "Crimson runes pulse across battlefield tombs while necromantic smoke coils skyward. Standing beside Theron as he traces the geometry, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Identify each rune circle’s direct purpose",
        score: "S",
      },
      { 
        type: "B", 
        answer: "Search for the hidden design driving the ritual", 
        score: "N" 
      },
    ],
  },
  {
    no: 31,
    question: "Undead wyverns rise unexpectedly as the Red Wizards adapt faster than planned, their rotting wings beating ash into the air. Brom struggles to hold the line while wounded soldiers cry out behind you. As the one deciding the battle’s priority in this moment, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Direct the party to focus fire on the wyverns to neutralize the greatest tactical threat first",
        score: "T",
      },
      { 
        type: "B", 
        answer: "Redirect effort to protect and evacuate the wounded, even if it risks losing ground", 
        score: "F" 
      },
    ],
  },
  {
    no: 32,
    question: "A Thayan defector offers the final counterspell, but only if trapped allies are abandoned. As the deciding voice between Brom and Maeve, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Refuse any plan that sacrifices allies",
        score: "F",
      },
      { 
        type: "B", 
        answer: "Prioritize the option most likely to stop the ritual", 
        score: "T" 
      },
    ],
  },
  {
    no: 33,
    question: "Deep beneath the battlefield, Lyra uncovers Acererak’s true phylactery in an obsidian vault. As the one leading the vault entry, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Take charge immediately and direct the room",
        score: "E",
      },
      { 
        type: "B", 
        answer: "Study the vault’s defenses first", 
        score: "I" 
      },
    ],
  },
  {
    no: 34,
    question: "Poison needles, collapsing floors, soul gems, and false phylacteries surround the vault. If you were working beside Lyra on the traps, would you:",
    answerOptions: [
      {
        type: "A",
        answer: "Search for the grand deception tying the traps together",
        score: "N",
      },
      { 
        type: "B", 
        answer: "Disable each mechanism methodically", 
        score: "S" 
      },
    ],
  },
  {
    no: 35,
    question: "Destroying the phylactery will collapse the tomb and trap one companion inside. Brom volunteers without hesitation. As the one making the sacrifice decision, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Commit immediately to a decisive course of action to eliminate the threat",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Hold off and adapt as the situation develops to preserve options", 
        score: "P" 
      },
    ],
  },
  {
    no: 36,
    question: "At the volcanic gates of an Ancient Red Dragon’s fortress, Brom steadies his shield, Lyra scans the walls, Maeve whispers a prayer, and Theron studies the map. As the strategist choosing the breach plan, do you:",
    answerOptions: [
      {
        type: "A",
        answer: "Rank the fortress wings by threat priority and clear the weakest flank first",
        score: "J",
      },
      { 
        type: "B", 
        answer: "Enter through the first opening Lyra finds and adapt as the fortress reveals itself", 
        score: "P" 
      },
    ],
  },
];
