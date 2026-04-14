import { neon } from "@netlify/neon";

const sql = neon();

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const body = await req.json();

    await sql`
      INSERT INTO test_results (
        created_at,
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
        recommended_class
      )
      VALUES (
        NOW(),
        ${body.mbti_type},
        ${body.e_count},
        ${body.i_count},
        ${body.s_count},
        ${body.n_count},
        ${body.t_count},
        ${body.f_count},
        ${body.j_count},
        ${body.p_count},
        ${body.campaign_version},
        ${body.completion_seconds},
        ${body.recommended_class}
      )
    `;

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DB insert failed:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
};