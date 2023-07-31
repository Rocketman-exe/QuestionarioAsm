import React, { useState } from "react";

const Questionnaire = () => {
  const [isAdult, setIsAdult] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showTotalPoints, setShowTotalPoints] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [pathologies, setPathologies] = useState([
    {
      id: 1,
      checked: false,
      pathology: "Allergie",
      category: "Low",
      pathologyDesc: ""
    },
    {
      id: 2,
      checked: false,
      pathology: "Intolleranze alimentari",
      category: "Low",
      pathologyDesc: ""
    },
    {
      id: 3,
      checked: false,
      pathology: "Intolleranze varie",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 4,
      checked: false,
      pathology: "Disturbi nello sviluppo psicologico",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 5,
      checked: false,
      pathology: "Patologie loco-motorie",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 6,
      checked: false,
      pathology: "Patologie cardiocircolatorie",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 7,
      checked: false,
      pathology: "Patologie dermatologiche",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 8,
      checked: false,
      pathology: "Patologie respiratorie",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 9,
      checked: false,
      pathology: "Disturbi visivi",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 10,
      checked: false,
      pathology: "Attacchi di panico",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 11,
      checked: false,
      pathology: "Cecità",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 12,
      checked: false,
      pathology: "Claustrofobia",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 13,
      checked: false,
      pathology: "Crisi convulsive",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 14,
      checked: false,
      pathology: "Patologie uditive",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 15,
      checked: false,
      pathology: "Patologie apparato digerente",
      category: "Medium",
      pathologyDesc: ""
    },
    {
      id: 16,
      checked: false,
      pathology: "Patologie neuromuscolari",
      category: "High",
      pathologyDesc: ""
    },
    {
      id: 17,
      checked: false,
      pathology: "Patologie metaboliche",
      category: "Medium",
      pathologyDesc: ""
    }
  ]);

  const handleIsAdultChange = (value) => {
    setIsAdult(value);
  };

  const handleResponseChange = (e, questionId, addPoint) => {
    const value = e.target.value;

    // Proceed to the next question only if the total points remain the same
    if (
      !(value === "yes" && addPoint === "yes") &&
      !(value === "no" && addPoint === "no")
    ) {
      setLastQuestion(true);
      setCheckbox(true);
      return;
    }

    // Determine if the answer should add a point based on the value and addPoint
    const shouldAddPoint =
      (value === "yes" && addPoint === "yes") ||
      (value === "no" && addPoint === "no");

    // Add a point if the answer should add a point
    if (shouldAddPoint) {
      setTotalPoints((prevPoints) => prevPoints + 1);
    }

    // Proceed to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    // Reset the input value for the current question
    e.target.checked = false;
  };

  const handleCheck = (id) => {
    const listPathologies = pathologies.map((pathology) =>
      pathology.id === id
        ? { ...pathology, checked: !pathology.checked }
        : pathology
    );
    setPathologies(listPathologies);
    localStorage.setItem("Pathologies", JSON.stringify(listPathologies));
  };

  const handleText = (id, e) => {
    /* const updatedPathologyDesc = [...pathologies];
    updatedPathologyDesc[id].pathologyDesc = e.target.value;
    setPathologies(updatedPathologyDesc); */

    const listPathologies2 = pathologies.map((pathology) =>
      pathology.id === id
        ? { ...pathology, pathologyDesc: e.target.value }
        : pathology
    );

    setPathologies(listPathologies2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Read the form data
    console.log(pathologies);

    setShowTotalPoints(true);
  };

  const adultQuestions = [
    {
      id: 1,
      text: "L&apos;allievo ha paura dell&apos;acqua? ",
      addPoint: "no"
    },
    {
      id: 2,
      text: "Sei in grado di galleggiare autonomamente senza supporti? Sia in modo prono che supino? Riesci ad immergere il viso nell&apos;acqua facendo la respirazione?",
      addPoint: "yes"
    },
    {
      id: 3,
      text: "Sai fare almeno una vasca in uno stile completo? <br/> Ti senti a tuo agio in vasca dove non si tocca?",
      addPoint: "yes"
    },
    {
      id: 4,
      text: "Sei in grado di fare almeno due stili completi? Sei in grado in questi due stili di effettuare una corretta respirazione?",
      addPoint: "yes"
    },
    {
      id: 5,
      text: "Nuoti perfettamente in tre stili (stile, dorso e rana)? Conosci anche un po&apos; di delfino? Sei in grado di galleggiare fermo in posizione eretta?",
      addPoint: "yes"
    },
    {
      id: 6,
      text: "Nuoti nei quattro stili (stile libero, dorso, rana e delfino) e sai fare le virate? Sei in grado di coprire una distanza di almeno 1500 mt in 1 ora?",
      addPoint: "yes"
    }
    // Add more questions for adults here
  ];

  const underagedQuestions = [
    {
      id: 1,
      text: "Do you play video games?",
      addPoint: "no"
    },
    {
      id: 2,
      text: "Do you enjoy watching cartoons?",
      addPoint: "yes"
    },
    {
      id: 3,
      text: "Do you have any siblings?",
      addPoint: "no"
    }
    // Add more questions for underaged here
  ];

  const questions = isAdult ? adultQuestions : underagedQuestions;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion =
    currentQuestionIndex === questions.length || lastQuestion === true;
  /* const showSubmitButton = !showTotalPoints || isLastQuestion; */

  return (
    <div>
      <h2>Questionnaire</h2>
      {isAdult === null && (
        <div>
          <p>Are you an adult?</p>
          <button
            type="button"
            onClick={() => handleIsAdultChange(true)}
            style={{ marginRight: "10px" }}
          >
            Yes
          </button>
          <button type="button" onClick={() => handleIsAdultChange(false)}>
            No
          </button>
        </div>
      )}
      {isAdult !== null && currentQuestionIndex < questions.length && (
        <div>
          <p>{currentQuestion.text}</p>
          <div>
            <label>
              Yes
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="yes"
                onChange={(e) =>
                  handleResponseChange(
                    e,
                    currentQuestion.id,
                    currentQuestion.addPoint
                  )
                }
              />
            </label>
            <label>
              No
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="no"
                onChange={(e) =>
                  handleResponseChange(
                    e,
                    currentQuestion.id,
                    currentQuestion.addPoint
                  )
                }
              />
            </label>
          </div>
        </div>
      )}
      {isAdult !== null && isLastQuestion && (
        <div>
          <form method="POST" onSubmit={handleSubmit}>
            <ul>
              {pathologies.map((pathology) => (
                <li className="pathology" key={pathology.id}>
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(pathology.id)}
                    checked={pathology.checked}
                  />
                  <label onDoubleClick={() => handleCheck(pathology.id)}>
                    {pathology.pathology}
                  </label>
                  <br />
                  {pathology.checked === true && (
                    <label>
                      Specificare la malatia:
                      <input
                        type="text"
                        name="pathologyDesc"
                        key={pathology.id}
                        onChange={(e) => {
                          handleText(pathology.id, e);
                        }}
                      />
                    </label>
                  )}
                </li>
              ))}
            </ul>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {showTotalPoints && (
        <div>
          <h3>Total Points: {totalPoints}</h3>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
