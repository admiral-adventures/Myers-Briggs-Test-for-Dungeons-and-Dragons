import { Client } from "pg";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
  });

  try {
    await client.connect();

    const body = req.body;

    await client.query(
      `
      INSERT INTO test_results (
        mbti_type,
        e_count,
        i_count,
        s_count,
        n_count,
        t_count,
        f_count,
        j_count,
        p_count,
        campaign_version,
        completion_seconds,
        recommended_class,
        total_questions
      )
      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13
      )
      `,
      [
        body.mbti_type,
        body.e_count,
        body.i_count,
        body.s_count,
        body.n_count,
        body.t_count,
        body.f_count,
        body.j_count,
        body.p_count,
        body.campaign_version,
        body.completion_seconds,
        body.recommended_class,
        body.total_questions,
      ]
    );

    await client.end();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("DB insert failed:", error);
    return res.status(500).json({ success: false });
  }
}