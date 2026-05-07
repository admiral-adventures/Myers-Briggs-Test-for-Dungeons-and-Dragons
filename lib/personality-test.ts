import { openDB } from "idb";
import { Option, Future, Result } from "@swan-io/boxed";
import { personalityTest } from "../data/personality-test";
import { personalityClassGroup } from "../data/personality-class-groups";

export interface TestQuestion {
  no: number;
  question: string;
  answerOptions: TestAnswerOption[];
}

export interface TestAnswerOption {
  type: "A" | "B";
  answer: string;
  score: PersonalityClass["type"];
}

export interface PersonalityClass {
  type:
    | Extroverted
    | Introverted
    | Sensing
    | Intuitive
    | Thinking
    | Feeling
    | Perceiving
    | Judging;
  description: string;
}

export interface PersonalityClassGroup {
  type: `${Extroverted | Introverted}${Sensing | Intuitive}${
    | Thinking
    | Feeling}${Perceiving | Judging}`;
  name: string;
  nameDescription: string;
  epithet: string;
  description: string;
  jungianFunctionalPreference: {
    dominant: string;
    auxiliary: string;
    tertiary: string;
    inferior: string;
  };
  generalTraits: string[];
  relationshipStrengths: string[];
  relationshipWeaknesses: string[];
  successDefinition: string[];
  strengths: string[];
  gifts: string[];
  potentialProblemAreas: string[];
  explanationOfProblems: string;
  solutions: string;
  livingHappilyTips: string;
  suggestions?: string[];
  tenRulesToLive: string[];
}

export interface TestResult {
  timestamp: number;
  completionSeconds: number;
  testAnswers: TestAnswerOption["type"][];
  testScores: PersonalityClass["type"][];
}

type Extroverted = "E";

type Introverted = "I";

type Sensing = "S";

type Intuitive = "N";

type Thinking = "T";

type Feeling = "F";

type Perceiving = "P";

type Judging = "J";

const DB_NAME = "MBTI_PERSONALITY_TEST_APP_IDB";

const DB_VERSION = 1;

const TEST_RESULT_STORE = "TEST_RESULT_STORE";

async function getDb() {
  const db = await openDB<{
    [TEST_RESULT_STORE]: {
      key: number;
      value: TestResult;
    };
  }>(DB_NAME, DB_VERSION, {
    upgrade(idb) {
      idb.createObjectStore(TEST_RESULT_STORE, {
        keyPath: "timestamp",
      });
    },
  });

  return db;
}

export function getQuestionAnswerScore(
  questionNumber: number,
  answerOption: TestAnswerOption["type"]
) {
  const question = personalityTest.find(
    (question) => question.no === questionNumber
  )!;

  return question.answerOptions.find((option) => option.type === answerOption)!
    .score;
}

export function getPersonalityClassGroupByTestScores(
  testScores: PersonalityClass["type"][]
) {
  const scoreCount = testScores.reduce(
    (acc, score) => {
      return {
        ...acc,
        [score]: acc[score] + 1,
      };
    },
    {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    }
  );

  // Random selection for Extroverted/Introverted
  const extrovertedOrIntroverted = scoreCount.E === scoreCount.I ? (Math.random() >= 0.5 ? "E" : "I") : (scoreCount.E >= scoreCount.I ? "E" : "I");

  // Random selection for Sensing/Intuition
  const sensingOrIntuition = scoreCount.S === scoreCount.N ? (Math.random() >= 0.5 ? "S" : "N") : (scoreCount.S >= scoreCount.N ? "S" : "N");

  // Random selection for Thinking/Feeling
  const thinkingOrFeeling = scoreCount.T === scoreCount.F ? (Math.random() >= 0.5 ? "T" : "F") : (scoreCount.T >= scoreCount.F ? "T" : "F");

  // Random selection for Judging/Perceiving
  const judgingOrPerceiving = scoreCount.J === scoreCount.P ? (Math.random() >= 0.5 ? "J" : "P") : (scoreCount.J >= scoreCount.P ? "J" : "P");

  const personalityClassGroupType = `${extrovertedOrIntroverted}${sensingOrIntuition}${thinkingOrFeeling}${judgingOrPerceiving}`;

 return personalityClassGroup.find(
    ({ type }) => personalityClassGroupType === type
  )!;
}

export function getPersonalityClassGroupByType(
  type: PersonalityClassGroup["type"]
) {
  return personalityClassGroup.find(
    (group) => group.type === type
  )!;
}

export function getSavedTestResult(id: number) {
  return Future.make<Result<Option<TestResult>, Error>>((resolve) => {
    getDb()
      .then((db) => db.get(TEST_RESULT_STORE, id))
      .then(Option.fromNullable)
      .then((testResult) => resolve(Result.Ok(testResult)))
      .catch((error) => resolve(Result.Error(error)));
  });
}

export function getAllSavedTestResult() {
  return Future.make<Result<Option<TestResult[]>, Error>>((resolve) => {
    getDb()
      .then((db) => db.getAll(TEST_RESULT_STORE))
      .then(Option.fromNullable)
      .then((testResult) => resolve(Result.Ok(testResult)))
      .catch((error) => resolve(Result.Error(error)));
  });
}

async function submitResultToDatabase(testResult: TestResult) {
  try {
    const counts = testResult.testScores.reduce(
      (acc, score) => {
        acc[score] += 1;
        return acc;
      },
      { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
    );

    const classGroup = getPersonalityClassGroupByTestScores(
      testResult.testScores
    );

    await fetch("/api/submit-results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mbti_type: classGroup.type,
        e_count: counts.E,
        i_count: counts.I,
        s_count: counts.S,
        n_count: counts.N,
        t_count: counts.T,
        f_count: counts.F,
        j_count: counts.J,
        p_count: counts.P,
        campaign_version: "36q-v1",
        completion_seconds: testResult.completionSeconds,
        recommended_class: classGroup.name,
        total_questions: testResult.testScores.length,
      }),
    });
  } catch (error) {
    console.error("Telemetry failed:", error);
  }
}

  export function saveTestResult(testResult: {
    timestamp: number;
    completionSeconds: number;
    testAnswers: TestAnswerOption["type"][];
    testScores: PersonalityClass["type"][];
  }) {
  return Future.make<Result<number, Error>>((resolve) => {
    getDb()
      .then((db) => db.put(TEST_RESULT_STORE, testResult))
      .then((id) => {
        // NEW: send to Netlify DB (non-blocking)
        submitResultToDatabase(testResult);
      
        resolve(Result.Ok(id));
      })
      .catch((error) => resolve(Result.Error(error)));
  });
}
