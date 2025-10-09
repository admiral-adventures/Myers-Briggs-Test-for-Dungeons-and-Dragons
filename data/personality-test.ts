import { TestQuestion } from "../lib/personality-test";

export const personalityTest: TestQuestion[] = [
  {
    no: 1,
    question: "Scenario: Your adventure team is invited to a grand ball in a noble's castle. Do you: ",
    answerOptions: [
      {
        type: "A",
        answer: "Eagerly embrace the opportunity to socialize and make connections with potentially helpful factions",
        score: "E",
      },
      { type: "B", answer: "Find a quiet corner to hide in and observe people from a distance in order to gain information", score: "I" },
    ],
  },
  {
    no: 2,
    question: "Scenario: Your adventure team is navigating a dense forest with potential dangers. Do you: ",
    answerOptions: [
      { type: "A", answer: "Investigate thoroughly the tangible details of the surroundings to guide the group", score: "S" },
      { type: "B", answer: "Trust your instincts and intuition to choose the best path forward based on your initial impression", score: "N" },
    ],
  },
  {
    no: 3,
    question: "Scenario: Your character comes across an ancient map with unclear markings. Do you: ",
    answerOptions: [
      { type: "A", answer: "Analyze the details and symbols on the map looking for concrete patterns", score: "S" },
      { type: "B", answer: "Interpret the map's overall meaning, relying on your “gut feeling”", score: "N" },
    ],
  },
  {
    no: 4,
    question: "Scenario: Your adventure team faces a moral dilemma involving a captured enemy that the team is considering “dispatching” before leaving the area. Do you: ",
    answerOptions: [
      { type: "A", answer: "Analyze the situation objectively, focusing on the logical consequences", score: "T" },
      { type: "B", answer: "Consider the ethical implications and values before deciding", score: "F" },
    ],
  },
  {
    no: 5,
    question: "Scenario: Your character is chosen as the party spokesperson in a diplomatic mission. Do you: ",
    answerOptions: [
      { type: "A", answer: "Stick to the prepared script and agenda for a logical presentation", score: "T" },
      { type: "B", answer: "Consider the feelings and perspectives provided by the opposing diplomats", score: "F" },
    ],
  },
  {
    no: 6,
    question: "Scenario: Your adventure team has a limited time to decide between two quests. Do you: ",
    answerOptions: [
      { type: "A", answer: "Evaluate the practical benefits and potential outcomes of each quest", score: "J" },
      { type: "B", answer: "Embrace the spontaneity, choosing the quest that feels right in the moment", score: "P" },
    ],
  },
  {
    no: 7,
    question: "Scenario: Your character uncovers a hidden trap in the dungeon. Do you: ",
    answerOptions: [
      { type: "A", answer: "Alert the party immediately and develop a plan to navigate around it", score: "J" },
      { type: "B", answer: "Investigate further and improvise a solution on the spot", score: "P" },
    ],
  },
  {
    no: 8,
    question: "Scenario: After a challenging battle, your adventure team members suggest celebrating at the local tavern. Do you: ",
    answerOptions: [
      { type: "A", answer: "Join the revelry, sharing stories and laughter with everyone", score: "E" },
      { type: "B", answer: "Prefer a quiet evening, reflecting on the day's events in solitude", score: "I" },
    ],
  },
  {
    no: 9,
    question: "Scenario: Your adventure team must decipher a riddle to enter a hidden chamber. Do you: ",
    answerOptions: [
      { type: "A", answer: "Break down the riddle logically, focusing on the literal meanings", score: "S" },
      { type: "B", answer: "Consider alternative interpretations, exploring the riddle's hidden messages", score: "N" },
    ],
  },
  {
    no: 10,
    question: "Scenario: Your character discovers a magical portal leading to an unknown realm that looks inviting and safe. Do you: ",
    answerOptions: [
      { type: "A", answer: "Inspect the portal and the destination for visible details and potential dangers", score: "S" },
      { type: "B", answer: "Step through the portal, trusting your intuition about the new world", score: "N" },
    ],
  },
  {
    no: 11,
    question: "Scenario: A fellow adventure team member is upset because they can't let go of a cursed sword they just picked up. Do you: ",
    answerOptions: [
      { type: "A", answer: "Offer practical solutions to help them overcome the problem", score: "T" },
      { type: "B", answer: "Provide emotional support and lend a listening ear", score: "F" },
    ],
  },
  {
    no: 12,
    question: "Scenario: Your adventure team must make a difficult decision, fight a dragon attacking innocent town folk where one member of the team is expected to die, or flee and sacrifice the town folk that have important information you need. Do you: ",
    answerOptions: [
      { type: "A", answer: "Analyze the facts and make a decision based on logic and reason", score: "T" },
      { type: "B", answer: "Consider the impact your decision will have on relationships and group harmony", score: "F" },
    ],
  },
  {
    no: 13,
    question: "Scenario: Your adventure team is low on supplies, and you come across a mysterious merchant. Do you: ",
    answerOptions: [
      { type: "A", answer: "Negotiate for the best deal, considering all available options", score: "J" },
      { type: "B", answer: "Embrace the uncertainty and make impromptu purchases based on what feels right", score: "P" },
    ],
  },
  {
    no: 14,
    question: "Scenario: Your character finds an ancient artifact with unclear uses. Do you: ",
    answerOptions: [
      { type: "A", answer: "Examine the artifact closely, seeking clues to understand its practical functions? ", score: "J" },
      { type: "B", answer: "Experiment with the artifact, exploring its potential magical properties", score: "P" },
    ],
  },
  {
    no: 15,
    question: "Scenario: Your adventure team is planning a surprise attack on an enemy camp. Do you: ",
    answerOptions: [
      { type: "A", answer: "Contribute ideas and actively participate in the strategy discussion", score: "E" },
      { type: "B", answer: "Reflect on the plan independently before expressing your thoughts", score: "I" },
    ],
  },
  {
    no: 16,
    question: "Scenario: Your adventure team faces a magical barrier with unknown properties. Do you: ",
    answerOptions: [
      { type: "A", answer: "Analyze the barrier's composition and structure to find a way through", score: "S" },
      { type: "B", answer: "Experiment with magical abilities and your survival instincts to navigate the barrier", score: "N" },
    ],
  },
  {
    no: 17,
    question: "Scenario: Your character discovers a hidden door that you are convinced leads to an ancient treasure. Do you: ",
    answerOptions: [
      {
        type: "A",
        answer: "“Inspect the door for traps and security measures”",
        score: "S",
      },
      {
        type: "B",
        answer: "Open the door impulsively, eager to discover what lies beyond",
        score: "N",
      },
    ],
  },
  {
    no: 18,
    question: "Scenario: Which appeals to your character more when exploring a dangerous dungeon: ",
    answerOptions: [
      { type: "A", answer: "Planning every move with strategic precision despite the tension it may cause with the team", score: "T" },
      { type: "B", answer: "Avoiding conflict by focusing on the feelings and concerns of your team in order to bond with them", score: "F" },
    ],
  },
  {
    no: 19,
    question: "Scenario: When exploring dangerous underground caverns, is your character more comfortable in making decisions based on: ",
    answerOptions: [
      { type: "A", answer: "Logical judgments, evaluating tactical advantages and outcomes", score: "T" },
      { type: "B", answer: "Value judgments, guided by your character's moral principles and beliefs", score: "F" },
    ],
  },
  {
    no: 20,
    question: "Scenario: Your character discovers an ancient library filled with forgotten knowledge. Do you: ",
    answerOptions: [
      { type: "A", answer: "Organize and categorize the information for practical use", score: "J" },
      { type: "B", answer: "Delve into various topics without a specific plan, following your curiosity", score: "P" },
    ],
  },
  {
    no: 21,
    question: "Scenario: Would you say your character is more: ",
    answerOptions: [
      { type: "A", answer: "Serious and determined, driven by clear goals and a focused mindset", score: "J" },
      { type: "B", answer: "Easy-going, embracing the journey and adapting to unforeseen challenges", score: "P" },
    ],
  },
  {
    no: 22,
    question: "Scenario: Your adventure team is about to engage with an oracle who can provide answers to help you in your quest. Do you: ",
    answerOptions: [
      {
        type: "A",
        answer: "Trust that all the right questions will be asked by the party",
        score: "E",
      },
      { type: "B", answer: "Create your own list in private to make sure everything is covered", score: "I" },
    ],
  },
  {
    no: 23,
    question: "Scenario: A magical mirror offers glimpses of the future. Do you: ",
    answerOptions: [
      { type: "A", answer: "Focus on the immediate and practical information it provides", score: "S" },
      { type: "B", answer: "Explore the potential and symbolic meanings in the visions", score: "N" },
    ],
  },
  {
    no: 24,
    question: "Scenario: One of your adventure team members is a circle of dreams druid who has strange visions every night that they recite each morning to the group. Do you find these visionary snippets: ",
    answerOptions: [
      { type: "A", answer: "Somewhat annoying", score: "S" },
      { type: "B", answer: "Fascinating", score: "N" },
    ],
  },
  {
    no: 25,
    question: "Scenario: An adventure team member disagrees with your character's plan. Do you: ",
    answerOptions: [
      { type: "A", answer: "Present logical arguments to support your plan", score: "T" },
      { type: "B", answer: "Seek common ground and compromise to maintain harmony", score: "F" },
    ],
  },
  {
    no: 26,
    question: "Scenario: Your adventure team is about to enter the hideout of brigands to neutralize them after they are believed to have murdered some of the residents of the town. Is it worse to be: ",
    answerOptions: [
      { type: "A", answer: "Unjust", score: "T" },
      { type: "B", answer: "Merciless", score: "F" },
    ],
  },
  {
    no: 27,
    question: "Scenario: Your adventure team has just defeated a powerful and evil syndicate. Once word gets out, the news will start a series of predictable events that you may be able to influence. These events should occur: ",
    answerOptions: [
      { type: "A", answer: "By careful selection and choice", score: "J" },
      { type: "B", answer: "Randomly and by chance", score: "P" },
    ],
  },
  {
    no: 28,
    question: "Scenario: Your character just purchased a magical staff with unknown magical properties from a merchant which depleted the party's resources. Do you feel better: ",
    answerOptions: [
      { type: "A", answer: "Purchasing it and getting on with the adventure", score: "J" },
      { type: "B", answer: "Having the option to buy, even if it means delaying departure", score: "P" },
    ],
  },
  {
    no: 29,
    question: "Scenario: Your adventure team has entered a general store to purchase gear from a questionable merchant. Do you:  ",
    answerOptions: [
      { type: "A", answer: "Initiate conversation to ask what the merchant has in stock", score: "E" },
      { type: "B", answer: "Wait to be approached by the merchant", score: "I" },
    ],
  },
  {
    no: 30,
    question: "Scenario: Your character have been adventuring with a rogue that follows his common sense at the exclusion of all other considerations. Do you find that “common sense” is: ",
    answerOptions: [
      { type: "A", answer: "Rarely questionable", score: "S" },
      { type: "B", answer: "Frequently questionable", score: "N" },
    ],
  },
  {
    no: 31,
    question: "Scenario: Your character is tasked with deciphering an ancient Elvish script. Do you: ",
    answerOptions: [
      { type: "A", answer: "Approach the task methodically, translating one symbol at a time", score: "S" },
      { type: "B", answer: "Look for patterns and connections, seeking to understand the overall meaning", score: "N" },
    ],
  },
  {
    no: 32,
    question: "Scenario: Your character finds a pouch with a potion of healing while searching a room. Before telling the group about your discovery, do you: ",
    answerOptions: [
      { type: "A", answer: "Evaluate the immediate advantages for yourself", score: "T" },
      { type: "B", answer: "Consider the long-term benefits for the entire party", score: "F" },
    ],
  },
  {
    no: 33,
    question: "Scenario: Your character is about to cast a fireball in the direction of a zombie hoard attacking you which will destroy them all, but it will also severely injure or kill an important ally. When making this decision, do you: ",
    answerOptions: [
      { type: "A", answer: "Focus on the logical consequences and potential dangers if you don't cast it", score: "T" },
      { type: "B", answer: "Consider the feelings and values associated with the ally you are about to injure", score: "F" },
    ],
  },
  {
    no: 34,
    question: "Scenario: Your adventure team is planning a surprise attack on a dragon's lair. Do you: ",
    answerOptions: [
      {
        type: "A",
        answer: "Formulate a detailed plan with specific roles for each party member",
        score: "J",
      },
      { type: "B", answer: "Keep the plan flexible, ready to adapt to unexpected circumstances", score: "P" },
    ],
  },
  {
    no: 35,
    question: "Scenario: your adventure team must choose between continuing the time sensitive quest or taking a break to rest. Do you: ",
    answerOptions: [
      { type: "A", answer: "Consider the practical benefits of completing the quest without delay", score: "J" },
      { type: "B", answer: "Prioritize the well-being and morale of the party, opting for a rest", score: "P" },
    ],
  },
  {
    no: 36,
    question: "Your adventure team just engaged in contentious negotiations with a corrupt mayor who is hampering the party's ability to remove evil and diabolical forces from a small town. These types of interactions: ",
    answerOptions: [
      { type: "A", answer: "Stimulate and energize you", score: "E" },
      { type: "B", answer: "Tax your reserves", score: "I" },
    ],
  },
  {
    no: 37,
    question: "Scenario: Your adventure team encounters a wounded creature in the forest. Do you: ",
    answerOptions: [
      { type: "A", answer: "Prioritize immediate action, applying first aid and healing", score: "S" },
      { type: "B", answer: "Analyze the creature's behavior to understand the cause of its injuries", score: "N" },
    ],
  },
  {
    no: 38,
    question: "Scenario: Your adventure team needs to decide between taking a risky shortcut or a safer, longer route. Do you: ",
    answerOptions: [
      { type: "A", answer: "Advocate for the known and proven path to ensure safety", score: "S" },
      { type: "B", answer: "Embrace the challenge and potential rewards of the shortcut", score: "N" },
    ],
  },
  {
    no: 39,
    question: "Scenario: Your adventure team is split and has been arguing for some time on which of two plans to execute (sneak in through the back door or attack from the front). Which is more satisfying: ",
    answerOptions: [
      { type: "A", answer: "To discuss an issue thoroughly", score: "T" },
      { type: "B", answer: "To arrive at agreement on an issue", score: "F" },
    ],
  },
  {
    no: 40,
    question: "Scenario: Your adventure team encounters a mysterious figure offering information at a price. Do you: ",
    answerOptions: [
      { type: "A", answer: "Assess the credibility of the information before making a deal", score: "T" },
      { type: "B", answer: "Trust your instincts and make the deal, confident in the potential benefits", score: "F" },
    ],
  },
  {
    no: 41,
    question: "Scenario: An adventure team member is captured by enemies. Do you: ",
    answerOptions: [
      { type: "A", answer: "Formulate a strategic plan for a rescue mission", score: "J" },
      { type: "B", answer: "Improvise and adapt, utilizing the environment to rescue your friend", score: "P" },
    ],
  },
  {
    no: 42,
    question: "Scenario: Your adventure team faces a powerful foe, and the plan goes awry. Do you: ",
    answerOptions: [
      { type: "A", answer: "Stay focused on the original plan, seeking to salvage what you can", score: "J" },
      { type: "B", answer: "Improvise and adapt, finding new strategies on the fly", score: "P" },
    ],
  },
  {
    no: 43,
    question: "Scenario: Exploring a new region, your adventure team is invited to a witchlight carnival run by various “Fey” creatures known for their harmless pranks. Do you: ",
    answerOptions: [
      { type: "A", answer: "Enjoy the revelry and immerse yourself in the experience", score: "E" },
      {
        type: "B",
        answer: "Appreciate the festivities but also avoid immediately jumping into the activities",
        score: "I",
      },
    ],
  },
  {
    no: 44,
    question: "Scenario: Your adventure team has requested an audience with a dwarven counsil while looking for help to repel an invasion from the underdark. Your character has been tasked to speak on behalf of the team. Do you: ",
    answerOptions: [
      { type: "A", answer: "State your case based on the facts", score: "S" },
      { type: "B", answer: "Advocate for the bigger principles involved", score: "N" },
    ],
  },
  {
    no: 45,
    question: "Scenario: Your adventure team has found a magic item shop and is excited to add some magical weapons to your inventory. Do you: ",
    answerOptions: [
      { type: "A", answer: "Only inquire about the weapons the shop keeper has on hand", score: "S" },
      { type: "B", answer: "Ask if they could create or acquire a special weapon based on your design and research", score: "N" },
    ],
  },
  {
    no: 46,
    question: "Scenario: Your adventure team just completed a quest with an old and intelligent wizard that became a mentor to you. Which compliment below feels like the better compliment to give the gentleman : ",
    answerOptions: [
      { type: "A", answer: "“There goes a very logical wizard”", score: "T" },
      { type: "B", answer: "“There goes a very sentimental mentor”", score: "F" },
    ],
  },
  {
    no: 47,
    question: "Scenario: Your character has agreed to join up with a team of other adventurers to help rid a small town of some ruffians who are terrorizing the townsfolk. Do you envision yourself more as: ",
    answerOptions: [
      { type: "A", answer: "An unwavering member of the team that will dispense justice", score: "T" },
      { type: "B", answer: "A devoted and caring advocate for the terrorized townsfolk", score: "F" },
    ],
  },
  {
    no: 48,
    question: "Scenario: Your adventure team has just agreed with a patron to take joint possession of an abandoned mine in exchange for removing all the evil creatures that have taken residence within it. Do you: ",
    answerOptions: [
      { type: "A", answer: "Ensure you have a final and unalterable contract before starting the quest", score: "J" },
      { type: "B", answer: "Prefer a tentative and preliminary contract that can be altered based on what the quest may encounter", score: "P" },
    ],
  },
  {
    no: 49,
    question: "Scenario: Your adventure team has just agreed with a plan to sneak up to and attack a young dragon that has recently occupied an abandoned tower near a small town. Do you: ",
    answerOptions: [
      { type: "A", answer: "Feel comfortable now that a plan has been agreed upon", score: "J" },
      { type: "B", answer: "Feel uncomfortable because the plan locks the team into a given course of action", score: "P" },
    ],
  },
  {
    no: 50,
    question: "Scenario: Your adventure team has encountered a small group of Sea Elves embarked on a religious pilgrimage and they are asking you to help save several members who were abducted by Orcs. Do you: ",
    answerOptions: [
      {
        type: "A",
        answer: "Speak easily and at length with the group's leader",
        score: "E",
      },
      { type: "B", answer: "Find little to say to the group leader", score: "I" },
    ],
  },
  {
    no: 51,
    question: "Scenario: Your character acquires a mysterious and powerful potion. Do you: ",
    answerOptions: [
      { type: "A", answer: "Find someone to cast the “Identify” spell to find out exactly what it is", score: "S" },
      { type: "B", answer: "Experiment cautiously, curious about its potential effects", score: "N" },
    ],
  },
  {
    no: 52,
    question: "Scenario: Your adventure team finds two spell scrolls (Fireball and Major Image) and offers you first choice of which one to add to your inventory. Do you: ",
    answerOptions: [
      { type: "A", answer: "Take the Fireball scroll knowing it has a predictable and practical effect", score: "S" },
      { type: "B", answer: "Take the Major Image scroll knowing that you will come up with an ingenious way to use it", score: "N" },
    ],
  },
  {
    no: 53,
    question: "Scenario: Your adventure team faces a powerful foe who threatens to kill a hostage unless you ensure that he will not be harmed once he releases the hostage. Do you: ",
    answerOptions: [
      { type: "A", answer: "Engage in fact-based conversation, focusing on mutual benefits and reason", score: "T" },
      { type: "B", answer: "Connect emotionally, seeking to build a personal rapport", score: "F" },
    ],
  },
  {
    no: 54,
    question: "Scenario: There is a group of Goblins ambushing travelers. Your adventure team captures one who claims he is being forced to do bad things because he is bullied by the larger and meaner goblins in the group. Do you: ",
    answerOptions: [
      { type: "A", answer: "Listen to what the Goblin has to say in a fair-minded way based on his actions", score: "T" },
      { type: "B", answer: "Feel sympathetic to his situation based on the extenuating circumstances", score: "F" },
    ],
  },
  {
    no: 55,
    question: "Scenario: One of your adventure team members has been captured by enemy Orcs and held in a cage inside an Orc encampment. The team has decided to enter the camp on a rescue mission. Do you: ",
    answerOptions: [
      { type: "A", answer: "Make sure things are arranged as much as they can be prior to entering", score: "J" },
      { type: "B", answer: "Enter the camp immediately and let things just happen", score: "P" },
    ],
  },
  {
    no: 56,
    question: "Scenario: Your character has become a Hero of the Realm and you have taken on a number of retainers to assist you in your quests. Is your relationship with your retainers: ",
    answerOptions: [
      { type: "A", answer: "Re-negotiable", score: "J" },
      { type: "B", answer: "Random and circumstantial", score: "P" },
    ],
  },
  {
    no: 57,
    question: "Scenario: Your adventure team's wizard establishes a mental link with two other team members. The wizard is asking for advice. What is your preference: ",
    answerOptions: [
      { type: "A", answer: "Be the first to respond", score: "E" },
      { type: "B", answer: "Hope someone speaks up first", score: "I" },
    ],
  },
  {
    no: 58,
    question: "Scenario: Your adventure team is in a combat arena about to face certain death at the hands of an unbeatable abomination. What do you rely on more to survive: ",
    answerOptions: [
      { type: "A", answer: "A strong sense of reality", score: "S" },
      { type: "B", answer: "A vivid imagination", score: "N" },
    ],
  },
  {
    no: 59,
    question: "Scenario: A global conflict is brewing in the world between two major factions, the cause of which is unknown but must be identified to avoid a coming war. To help identify the cause, do you look at: ",
    answerOptions: [
      { type: "A", answer: "The tactical fundamentals of the situation", score: "S" },
      { type: "B", answer: "The potential strategic overtones", score: "N" },
    ],
  },
  {
    no: 60,
    question: "Scenario: Your adventure team is tasked to rescue a number of hostages taken by a brutal force from an evil empire. Which seems to be the greater error that could derail the mission: ",
    answerOptions: [
      { type: "A", answer: "Being too passionate", score: "T" },
      { type: "B", answer: "Being too objective", score: "F" },
    ],
  },
  {
    no: 61,
    question: "Scenario: A potential patron is determining whether to hire your character for an important task. The patron asks how you view yourself as a decision maker. Are you: ",
    answerOptions: [
      { type: "A", answer: "Hard-headed", score: "T" },
      { type: "B", answer: "Soft-hearted", score: "F" },
    ],
  },
  {
    no: 62,
    question: "Scenario: Your adventure team is tasked to prepare an undefended outpost for an inevitable and overwhelming attack and you have only a couple of days to prepare and limited resources. What appeals to you more: ",
    answerOptions: [
      { type: "A", answer: "A prioritized list executed on a schedule", score: "J" },
      { type: "B", answer: "An effort that is unscheduled but feels like it is getting the right things accomplished", score: "P" },
    ],
  },
  {
    no: 63,
    question: "Scenario: Your character is an exceptional Bard that is frequently asked to provide entertainment nightly at the inn where you are staying. What is your preferred approach to ensure the crowd is entertained: ",
    answerOptions: [
      { type: "A", answer: "Execute your “well practiced routine” that you know has worked before", score: "J" },
      { type: "B", answer: "Trying a “fresh and whimsical” approach based on the make-up of your audience", score: "P" },
    ],
  },
  {
    no: 64,
    question: "Scenario: A rival adventure team approaches you in a tavern. Which approach is more appealing to you: ",
    answerOptions: [
      { type: "A", answer: "Ensure you are easy to approach", score: "E" },
      { type: "B", answer: "Sit back and wait in a somewhat reserved approach", score: "I" },
    ],
  },
  {
    no: 65,
    question: "Scenario: Your character has been tasked to write a letter asking for help from a reclusive and retired adventurer whose help you need on your next quest. When drafting your letter, what writing style appeals to you more: ",
    answerOptions: [
      { type: "A", answer: "A literal one", score: "S" },
      { type: "B", answer: "A figurative one", score: "N" },
    ],
  },
  {
    no: 66,
    question: "Scenario: Your adventure team has been tasked to infiltrate an enemy army in order to gain valuable information necessary to defeat them. What is a more difficult approach for you: ",
    answerOptions: [
      { type: "A", answer: "Identifying and bonding with others in order to glean information", score: "S" },
      { type: "B", answer: "Utilizing and manipulating others in order to glean information", score: "N" },
    ],
  },
  {
    no: 67,
    question: "Scenario: Your adventure team has been tasked to convince an ancient and reclusive dragon that a particular item from their treasure hoard has to be borrowed in order to defeat an enemy army that the dragon cares less about. Which approach do you plan to use: ",
    answerOptions: [
      { type: "A", answer: "Clarity of reason", score: "T" },
      { type: "B", answer: "Strength of compassion", score: "F" },
    ],
  },
  {
    no: 68,
    question: "Scenario: Your adventure team has been taken prisoner by an evil wizard who is quizzing only you in a series of seemingly unrelated choices that you must make in order to free your fellow adventures. Which is the greater fault when approaching how to make your choices: ",
    answerOptions: [
      { type: "A", answer: "Being indiscriminate", score: "T" },
      { type: "B", answer: "Being critical", score: "F" },
    ],
  },
  {
    no: 69,
    question: "Scenario: Your adventure team must enter the “Caves of Chaos” in order to find and release a number of townsfolk that have been abducted for evil purposes. Before entering the caves, do you prefer to: ",
    answerOptions: [
      { type: "A", answer: "Come up with a quick plan with a number of possible options in order to deal with the unexpected", score: "J" },
      { type: "B", answer: "Enter immediately since no plan will be able to account for all the unknowns", score: "P" },
    ],
  },
  {
    no: 70,
    question: "Scenario: Your adventure team must enter an ancient city in the underdark and neutralize the power of a noble house that is running the city. What is a better overall approach to accomplishing the objective: ",
    answerOptions: [
      { type: "A", answer: "Deliberate than spontaneous", score: "J" },
      { type: "B", answer: "Spontaneous than deliberate", score: "P" },
    ],
  },
];
