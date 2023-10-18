// import { useSearchParams } from "react-router-dom";

import { useParams } from "react-router-dom";

function WellnesssTopic() {
  // let [searchParams] = useSearchParams();
  // const topic = searchParams.get("topic");
  const { topic } = useParams();
  return (
    <div>
      <h3>{topic.split("-").join(" ").toUpperCase()}</h3>
      <h4>What is meditation?</h4>
      <p>
        The origins of meditation have roots that span thousands of years in
        Eastern traditions. Today, meditation is widely adopted throughout both
        Eastern and Western society.
      </p>
      <p>
        According to The National Center for Complementary and Integrative
        Health (NCCIH) of the National Institute of Health, “The term
        ‘meditation’ refers to a variety of practices that focus on mind and
        body integration” used to “calm the mind and enhance overall
        well-being.”
      </p>
      <h3>Are there different types of meditation?</h3>
      <p>
        Yes! The NCCIH explains that “some types of meditation involve
        maintaining mental focus on a particular sensation, such as breathing, a
        sound, a visual image, or a mantra, which is a repeated word or phrase.”
      </p>
      <p>
        Other types of meditation can also include “the practice of mindfulness,
        which involves maintaining attention or awareness on the present moment
        without making judgments.” - Meditation And Mindfulness: What You Need
        To Know
      </p>
      <h3>Why do people meditate?</h3>
      <p>
        Some practice meditation to manage stress, anxiety, depression, and
        pain, while others meditate to help improve blood pressure, insomnia,
        sleep quality, and for other health benefits.{" "}
      </p>
      <h3>What is the impact of meditation on mental wellbeing?</h3>
      <p>
        There have been thousands of studies conducted around the world
        analyzing the impact of meditation on mental wellbeing, and many studies
        have found positive correlations between meditative practices and
        improved mental wellbeing.
      </p>
      <p>
        One such study is the 2018 NCCIH-supported study where “142 groups of
        participants with diagnosed psychiatric disorders such as anxiety or
        depression examined mindfulness meditation approaches compared with no
        treatment and with established evidence-based treatments such as
        cognitive behavioral therapy and antidepressant medications.”
      </p>
      <p>
        {" "}
        The NCCIH study “included more than 12,000 participants, and the
        researchers found that for treating anxiety and depression,
        mindfulness-based approaches were better than no treatment at all, and
        they worked as well as the evidence-based therapies. - Meditation And
        Mindfulness: What You Need To Know
      </p>
      <h3>Further Reading:</h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <li>
          <a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know">
            Meditation and Mindfulness: What You Need To Know
          </a>
        </li>
        <li>
          <a href="https://www.everydayhealth.com/meditation/how-meditation-can-improve-your-mental-health/">
            How Meditation Can Improve Your Mental Health
          </a>
        </li>
      </ul>
    </div>
  );
}

export default WellnesssTopic;
