import paper1Image from "../assets/imgs/papers/math-survey.png";
import paper2Image from "../assets/imgs/papers/essay-judge.png";
import "./Papers.css";

const Papers = () => {
  const description =
    "While I don't have that much to show for it at the moment, trust me, it will take a while for your mouse wheel to be able to scroll to the bottom again in the near future.";

  const publishedPapers = [
    {
      id: 1,
      title:
        "A Survey of Mathematical Reasoning in the Era of Multimodal Large Language Model: Benchmark, Method & Challenges",
      image: paper1Image,
      link: "https://arxiv.org/abs/2412.11936",
      tags: ["Computation and Language (cs.CL)", "ACL 2025 Findings"],
      type: "published",
    },
    {
      id: 2,
      title:
        "EssayJudge: A Multi-Granular Benchmark for Assessing Automated Essay Scoring Capabilities of Multimodal Large Language Models",
      image: paper2Image,
      link: "https://arxiv.org/abs/2502.11916",
      tags: [
        "Computation and Language (cs.CL)",
        "Artificial Intelligence (cs.AI)",
      ],
      type: "published",
    },
  ];

  return (
    <div className="papers">
      <div className="papers-container">
        <section className="description-section">
          <div className="description-bar">
            <p className="description-text">{description}</p>
          </div>
        </section>

        <section className="published-papers">
          <h2 className="section-title">My Papers</h2>
          <div className="papers-grid">
            {publishedPapers.map((paper) => (
              <div key={paper.id} className="paper-item published-with-image">
                {paper.image && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    <img
                      src={paper.image}
                      alt={`Paper ${paper.id} Image`}
                      className="paper-image"
                    />
                  </a>
                )}
                <div className="paper-info">
                  <h3 className="paper-title">
                    {paper.link ? (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.title}
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  {paper.tags && (
                    <div className="paper-tags">
                      {paper.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Papers;
