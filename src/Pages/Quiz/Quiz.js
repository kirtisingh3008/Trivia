import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="name">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>
            <span className="subtitle">{questions[currQues].category}</span>
            </span>
            <span>
              {/* {questions[currQues].difficulty} */}

              <span className="subtitle">Score : {score}</span>
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 80 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
